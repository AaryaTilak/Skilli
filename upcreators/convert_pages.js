import fs from 'fs';
import path from 'path';

const HTML_DIR = path.resolve('original_html');
const PAGES_DIR = path.resolve('src/pages');

const pageMappings = [
  { html: 'index.html', jsx: 'HomeAgency.jsx', css: '/css/index.min.css' },
  { html: 'index-shop.html', jsx: 'HomeShop.jsx', css: '/css/index-shop.min.css' },
  { html: 'streamers.html', jsx: 'HomeStreamers.jsx', css: '/css/streamers.min.css' },
  { html: 'about.html', jsx: 'About.jsx', css: '/css/index.min.css' },
  { html: 'faq.html', jsx: 'FAQ.jsx', css: '/css/index.min.css' },
  { html: 'contacts.html', jsx: 'Contact.jsx', css: '/css/index.min.css' },
  { html: 'events.html', jsx: 'Events.jsx', css: '/css/index.min.css' },
  { html: 'cases.html', jsx: 'OurWorks.jsx', css: '/css/index.min.css' },
  { html: 'case.html', jsx: 'CaseDetails.jsx', css: '/css/index.min.css' },
  { html: 'shop.html', jsx: 'Shop.jsx', css: '/css/index-shop.min.css' },
  { html: 'shop-list.html', jsx: 'ShopList.jsx', css: '/css/index-shop.min.css' },
  { html: 'lookbook.html', jsx: 'ShopLookbook.jsx', css: '/css/index-shop.min.css' },
  { html: 'collection.html', jsx: 'ShopCollection.jsx', css: '/css/index-shop.min.css' },
  { html: 'product.html', jsx: 'ProductPage1.jsx', css: '/css/index-shop.min.css' },
  { html: 'product2.html', jsx: 'ProductPage2.jsx', css: '/css/index-shop.min.css' },
  { html: 'product3.html', jsx: 'ProductPage3.jsx', css: '/css/index-shop.min.css' },
  { html: 'cart.html', jsx: 'Cart.jsx', css: '/css/index-shop.min.css' },
  { html: 'blog-sidebar.html', jsx: 'BlogSidebar.jsx', css: '/css/index.min.css' },
  { html: 'blog-list.html', jsx: 'BlogList.jsx', css: '/css/index.min.css' },
  { html: 'blog-grid.html', jsx: 'BlogGrid.jsx', css: '/css/index.min.css' },
  { html: 'post.html', jsx: 'PostFull.jsx', css: '/css/index.min.css' },
  { html: 'post-sidebar.html', jsx: 'PostSidebar.jsx', css: '/css/index.min.css' }
];

const hrefMappings = {
  'index.html': '/',
  'streamers.html': '/home-streamers',
  'index-shop.html': '/home-shop',
  'about.html': '/about',
  'faq.html': '/faq',
  'contacts.html': '/contact',
  'events.html': '/events',
  'cases.html': '/our-works',
  'case.html': '/case-details',
  'blog-sidebar.html': '/blog-sidebar',
  'blog-list.html': '/blog-list',
  'blog-grid.html': '/blog-grid',
  'post-sidebar.html': '/post-sidebar',
  'post.html': '/post-full',
  'shop.html': '/shop',
  'shop-list.html': '/shop-list',
  'lookbook.html': '/shop-lookbook',
  'collection.html': '/shop-collection',
  'product.html': '/product-1',
  'product2.html': '/product-2',
  'product3.html': '/product-3',
  'cart.html': '/cart'
};

function convertHtmlToJsx(htmlContent, cssPath, pageName) {
  // 1. Extract <main>...</main>
  const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/i;
  const match = mainRegex.exec(htmlContent);
  if (!match) {
    console.error(`Could not find <main> tag in template for ${pageName}`);
    return null;
  }
  let mainContent = match[1];

  // 2. Remove script tags within main
  mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Strip data-aos attributes which set opacity: 0 in CSS by default
  mainContent = mainContent.replace(/\bdata-aos="[^"]*"/gi, '');
  mainContent = mainContent.replace(/\bdata-aos-delay="[^"]*"/gi, '');
  mainContent = mainContent.replace(/\bdata-aos-duration="[^"]*"/gi, '');

  // 3. Class to className
  mainContent = mainContent.replace(/\bclass=/g, 'className=');

  // 4. Comments <!-- ... --> to {/* ... */}
  mainContent = mainContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // 5. Fix unquoted attribute values first to wrap them in quotes
  let previous;
  const unquotedAttrRegex = /([\s<])([a-zA-Z0-9\-]+)=((?!['"])[^\s'">=<]+)/g;
  do {
    previous = mainContent;
    mainContent = mainContent.replace(unquotedAttrRegex, '$1$2="$3"');
  } while (mainContent !== previous);

  // 6. Resolve relative asset paths (now all have quotes)
  const assetRegex = /(src|srcset|data-src|data-srcset|poster|href)="((?!http|\/|mailto:|tel:|#)[^"]*?\.(?:jpg|png|webp|svg|mp4|webm|ogv|ico))"/gi;
  mainContent = mainContent.replace(assetRegex, (m, attr, val) => {
    return `${attr}="https://html.merku.love/upcreators/${val}"`;
  });

  // 7. Replace SVG and HTML attributes with JSX equivalents
  mainContent = mainContent.replace(/fill-rule=/gi, 'fillRule=');
  mainContent = mainContent.replace(/clip-rule=/gi, 'clipRule=');
  mainContent = mainContent.replace(/stroke-width=/gi, 'strokeWidth=');
  mainContent = mainContent.replace(/stroke-linecap=/gi, 'strokeLinecap=');
  mainContent = mainContent.replace(/stroke-linejoin=/gi, 'strokeLinejoin=');
  mainContent = mainContent.replace(/stroke-miterlimit=/gi, 'strokeMiterlimit=');
  mainContent = mainContent.replace(/stroke-dasharray=/gi, 'strokeDasharray=');
  mainContent = mainContent.replace(/stroke-dashoffset=/gi, 'strokeDashoffset=');
  mainContent = mainContent.replace(/stroke-opacity=/gi, 'strokeOpacity=');
  mainContent = mainContent.replace(/fill-opacity=/gi, 'fillOpacity=');
  mainContent = mainContent.replace(/clip-path=/gi, 'clipPath=');
  mainContent = mainContent.replace(/xlink:href=/gi, 'xlinkHref=');
  mainContent = mainContent.replace(/xmlns:xlink=/gi, 'xmlnsXlink=');
  mainContent = mainContent.replace(/autoplay/gi, 'autoPlay');
  mainContent = mainContent.replace(/playsinline/gi, 'playsInline');
  mainContent = mainContent.replace(/tabindex=/gi, 'tabIndex=');
  mainContent = mainContent.replace(/readonly=/gi, 'readOnly=');

  // 8. Convert self-closing tags: img, input, source, br, hr
  mainContent = mainContent.replace(/<(img|input|source|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // 9. Resolve href links to use handleLinkClick
  const hrefLinkRegex = /href="((?!http|#|mailto:|tel:)[^"]+?\.html)"/g;
  mainContent = mainContent.replace(hrefLinkRegex, (m, htmlFile) => {
    const reactRoute = hrefMappings[htmlFile];
    if (reactRoute) {
      return `href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('${reactRoute}'); }}`;
    }
    return `href="#" onClick={(e) => e.preventDefault()}`;
  });

  mainContent = mainContent.replace(/href="#"/gi, 'href="#" onClick={(e) => e.preventDefault()}');

  // Create the final JSX file content
  const jsxCode = `import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ${pageName.replace('.jsx', '')}() {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '${cssPath}';
    link.id = 'page-styles-${pageName.toLowerCase().replace('.jsx', '')}';
    document.head.appendChild(link);
    return () => {
      const el = document.getElementById('page-styles-${pageName.toLowerCase().replace('.jsx', '')}');
      if (el) document.head.removeChild(el);
    };
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main>
      ${mainContent.trim()}
    </main>
  );
}
`;

  return jsxCode;
}

function run() {
  console.log('Converting pages from HTML to JSX components...');
  for (const mapping of pageMappings) {
    const htmlPath = path.join(HTML_DIR, mapping.html);
    const jsxPath = path.join(PAGES_DIR, mapping.jsx);

    if (!fs.existsSync(htmlPath)) {
      console.warn(`HTML source file does not exist: ${htmlPath}`);
      continue;
    }

    console.log(`Converting ${mapping.html} -> ${mapping.jsx}`);
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const jsxCode = convertHtmlToJsx(htmlContent, mapping.css, mapping.jsx);

    if (jsxCode) {
      fs.writeFileSync(jsxPath, jsxCode, 'utf8');
      console.log(`Successfully wrote ${mapping.jsx}`);
    }
  }
  console.log('All page conversions finished!');
}

run();
