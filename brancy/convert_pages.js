import fs from 'fs';
import path from 'path';

const HTML_DIR = path.resolve('original_html');
const PAGES_DIR = path.resolve('src/pages');

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const pageMappings = [
  { html: 'index-two.html', jsx: 'Home.jsx' },
  { html: 'product.html', jsx: 'Shop.jsx' },
  { html: 'product-details.html', jsx: 'ProductDetails.jsx' },
  { html: 'product-cart.html', jsx: 'Cart.jsx' },
  { html: 'product-checkout.html', jsx: 'Checkout.jsx' },
  { html: 'product-wishlist.html', jsx: 'Wishlist.jsx' },
  { html: 'contact.html', jsx: 'Contact.jsx' },
  { html: 'account-login.html', jsx: 'Account.jsx' },
  { html: 'blog.html', jsx: 'Blog.jsx' },
  { html: 'blog-details.html', jsx: 'BlogDetails.jsx' }
];

const hrefMappings = {
  'index.html': '/',
  'index-two.html': '/',
  'product.html': '/shop',
  'product-details.html': '/product-details',
  'product-cart.html': '/cart',
  'product-checkout.html': '/checkout',
  'product-wishlist.html': '/wishlist',
  'contact.html': '/contact',
  'account-login.html': '/account',
  'blog.html': '/blog',
  'blog-details.html': '/blog-details'
};

function convertHtmlToJsx(htmlContent, pageName) {
  // 1. Extract <main>...</main>
  const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/i;
  const match = mainRegex.exec(htmlContent);
  if (!match) {
    console.error(`Could not find <main> tag in template for ${pageName}`);
    return null;
  }
  let mainContent = match[1];

  // Remove standard scripts inside main (e.g. video triggers)
  mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Convert HTML comments to JSX comments
  mainContent = mainContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Convert class to className
  mainContent = mainContent.replace(/\bclass=/g, 'className=');

  // Convert style="..." attribute to style={{...}} object in JSX
  // e.g. style="background-image: url(...);" or style="background-color: #fff;"
  // We can do simple conversions or handle background-image as a inline style object
  mainContent = mainContent.replace(/style="([^"]*)"/g, (m, styleStr) => {
    const properties = styleStr.split(';').filter(p => p.trim());
    const reactStyles = properties.map(prop => {
      const parts = prop.split(':');
      if (parts.length < 2) return '';
      const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase()); // camelCase
      const val = parts.slice(1).join(':').trim();
      return `${key}: '${val.replace(/'/g, "\\'")}'`;
    }).filter(Boolean);
    return `style={{ ${reactStyles.join(', ')} }}`;
  });

  // Resolve assets path: replace src="assets/images/..." with src="https://template.hasthemes.com/brancy/brancy/assets/images/..."
  // Also handle data-bg-img="assets/images/..."
  mainContent = mainContent.replace(/(src|srcset|data-src|data-srcset|data-bg-img)="([^"]*?assets\/images\/[^"]*?)"/gi, (m, attr, val) => {
    // If it starts with ./ let's trim it
    const cleanVal = val.replace(/^\.\//, '');
    return `${attr}="https://template.hasthemes.com/brancy/brancy/${cleanVal}"`;
  });

  // Self-closing tags: img, input, source, br, hr
  mainContent = mainContent.replace(/<(img|input|source|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Replace attribute names with React equivalents
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
  mainContent = mainContent.replace(/autocomplete=/gi, 'autoComplete=');

  // Replace links to use handler/React Router
  const hrefLinkRegex = /href="((?!http|#|mailto:|tel:)[^"]+?\.html)"/g;
  mainContent = mainContent.replace(hrefLinkRegex, (m, htmlFile) => {
    const reactRoute = hrefMappings[htmlFile];
    if (reactRoute) {
      return `href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('${reactRoute}'); }}`;
    }
    return `href="#" onClick={(e) => e.preventDefault()}`;
  });

  mainContent = mainContent.replace(/href="#"/gi, 'href="#" onClick={(e) => e.preventDefault()}');

  const jsxCode = `import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ${pageName.replace('.jsx', '')}() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="main-content">
      ${mainContent.trim()}
    </main>
  );
}
`;

  return jsxCode;
}

function run() {
  console.log('Converting HTML files to React page components...');
  for (const mapping of pageMappings) {
    const htmlPath = path.join(HTML_DIR, mapping.html);
    const jsxPath = path.join(PAGES_DIR, mapping.jsx);

    if (!fs.existsSync(htmlPath)) {
      console.warn(`HTML source file does not exist: ${htmlPath}`);
      continue;
    }

    console.log(`Converting ${mapping.html} -> ${mapping.jsx}`);
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const jsxCode = convertHtmlToJsx(htmlContent, mapping.jsx);

    if (jsxCode) {
      fs.writeFileSync(jsxPath, jsxCode, 'utf8');
      console.log(`Successfully converted ${mapping.jsx}`);
    }
  }
  console.log('Page conversion completed!');
}

run();
