import fs from 'fs';
import path from 'path';

const HTML_DIR = path.resolve('original_html');
const PAGES_DIR = path.resolve('src/pages');

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const pageMappings = [
  { html: 'index-2.html', jsx: 'Home.jsx' },
  { html: 'about-1.html', jsx: 'About.jsx' },
  { html: 'services.html', jsx: 'Services.jsx' },
  { html: 'service-detail.html', jsx: 'ServiceDetails.jsx' },
  { html: 'our-team.html', jsx: 'Guides.jsx' },
  { html: 'our-team-detail.html', jsx: 'GuideDetails.jsx' },
  { html: 'tour-package.html', jsx: 'Tours.jsx' },
  { html: 'tour-package-detail.html', jsx: 'TourDetails.jsx' },
  { html: 'destination-1-grid.html', jsx: 'Destinations.jsx' },
  { html: 'destination-detail.html', jsx: 'DestinationDetails.jsx' },
  { html: 'blog-grid.html', jsx: 'Blogs.jsx' },
  { html: 'blog-detail.html', jsx: 'BlogDetails.jsx' },
  { html: 'contact.html', jsx: 'Contact.jsx' },
  { html: 'faq.html', jsx: 'Faq.jsx' },
  { html: 'pricing.html', jsx: 'Pricing.jsx' },
  { html: 'compare.html', jsx: 'Compare.jsx' }
];

const hrefMappings = {
  'index.html': '/',
  'index-2.html': '/',
  'index-3.html': '/',
  'index-4.html': '/',
  'about-1.html': '/about',
  'services.html': '/services',
  'service-detail.html': '/services',
  'our-team.html': '/guides',
  'our-team-detail.html': '/guides',
  'tour-package.html': '/tours',
  'tour-package-detail.html': '/tours',
  'destination-1-grid.html': '/destinations',
  'destination-detail.html': '/destinations',
  'blog-grid.html': '/blog',
  'blog-detail.html': '/blog',
  'contact.html': '/contact',
  'faq.html': '/faq',
  'pricing.html': '/pricing',
  'compare.html': '/compare'
};

function convertHtmlToJsx(htmlContent, pageName) {
  // Pre-processing fixes for vendor HTML errors
  // Fix unclosed <li> tag in service-detail.html and destination-detail.html
  htmlContent = htmlContent.replace(
    /Customizing itineraries based on traveler interests\s*(?=<\/ul>)/g,
    'Customizing itineraries based on traveler interests</li>\n'
  );

  // Fix premature closing content divs in vendor templates (like compare.html and index-2.html)
  htmlContent = htmlContent.replace(/<\/div>\s*<!--\s*CONTENT\s*END\s*-->/gi, '');
  htmlContent = htmlContent.replace(/<\/div>\s*<!--\s*CONTENT\s*END\s*-->/gi, ''); // run twice in case of multiple nested closes

  // 1. Extract content of <div class="page-content">...</div>
  const pageContentStart = htmlContent.indexOf('<div class="page-content">');
  if (pageContentStart === -1) {
    console.error(`Could not find <div class="page-content"> in template for ${pageName}`);
    return null;
  }

  // Find the footer tag or closing div that marks the end of page-content
  // The footer usually starts with <footer
  let pageContentEnd = htmlContent.indexOf('<footer');
  if (pageContentEnd === -1) {
    // Search using regex for FOOTER START comment with optional spacing
    const footerStartMatch = htmlContent.match(/<!--\s*FOOTER\s*START\s*-->/i);
    if (footerStartMatch) {
      pageContentEnd = footerStartMatch.index;
    }
  }
  if (pageContentEnd === -1) {
    const footerCopyMatch = htmlContent.match(/<!--\s*FOOTER\s*COPYRIGHT\s*-->/i);
    if (footerCopyMatch) {
      pageContentEnd = footerCopyMatch.index;
    }
  }
  if (pageContentEnd === -1) {
    // Fallback: search for last closing div
    pageContentEnd = htmlContent.lastIndexOf('</div>');
  }

  // Extract the page-content block slice
  const pageContentSlice = htmlContent.substring(pageContentStart, pageContentEnd).trim();
  const lastDivIdx = pageContentSlice.lastIndexOf('</div>');
  if (lastDivIdx === -1) {
    console.error(`Could not find closing </div> inside page-content slice for ${pageName}`);
    return null;
  }

  // Extract exactly the balanced page-content container (including the page-content class div and its matching close div)
  const balancedContainer = pageContentSlice.substring(0, lastDivIdx + 6).trim();

  // Count opens and closes inside balancedContainer to determine if the outer wrapper was closed inside the slice
  const opens = (balancedContainer.match(/<div[ >]/g) || []).length;
  const closes = (balancedContainer.match(/<\/div>/g) || []).length;
  const diff = opens - closes;

  // Strip the outer `<div class="page-content">` and optionally its matching `</div>`
  let mainContent;
  if (diff === 0) {
    // The outer page-content wrapper closing tag was inside the slice. Strip both.
    mainContent = balancedContainer.substring(26, balancedContainer.length - 6).trim();
  } else {
    // The outer page-content wrapper closing tag was NOT inside the slice. Strip only the opening tag.
    mainContent = balancedContainer.substring(26).trim();
  }

  // Remove standard scripts inside content
  mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Convert HTML comments to JSX comments
  mainContent = mainContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Convert class to className
  mainContent = mainContent.replace(/\bclass=/g, 'className=');

  // Convert style="..." attribute to style={{...}} object in JSX
  mainContent = mainContent.replace(/style="([^"]*)"/g, (m, styleStr) => {
    const properties = styleStr.split(';').filter(p => p.trim());
    const reactStyles = properties.map(prop => {
      const parts = prop.split(':');
      if (parts.length < 2) return '';
      const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase()); // camelCase
      let val = parts.slice(1).join(':').trim();
      // Resolve assets path inside url() if present
      val = val.replace(/url\(['\"]?assets\/([^)'\"]*?)['\"]?\)/gi, "url('/assets/$1')");
      val = val.replace(/url\(['\"]?\.\.\/images\/([^)'\"]*?)['\"]?\)/gi, "url('/assets/images/$1')");
      val = val.replace(/url\(['\"]?images\/([^)'\"]*?)['\"]?\)/gi, "url('/assets/images/$1')");
      // Also resolve regular assets/... path if it starts with assets/
      if (val.startsWith('assets/')) {
        val = '/assets/' + val.substring(7);
      }
      return `${key}: "${val.replace(/"/g, '\\"')}"`;
    }).filter(Boolean);
    return `style={{ ${reactStyles.join(', ')} }}`;
  });

  // Resolve assets path: replace assets/images/ with /assets/images/
  // and assets/css/, assets/js/, etc.
  mainContent = mainContent.replace(/(src|srcset|href|data-src|data-srcset|data-bg-img)="assets\/([^"]*?)"/gi, '$1="/assets/$2"');
  
  // Fix background urls in Tailwind arbitrary class names: bg-[url(../images/...)] -> bg-[url(/assets/images/...)]
  mainContent = mainContent.replace(/bg-\[url\(['\"]?\.\.\/images\/([^)]*?)['\"]?\)\]/gi, "bg-[url('/assets/images/$1')]");
  mainContent = mainContent.replace(/bg-\[url\(['\"]?assets\/images\/([^)]*?)['\"]?\)\]/gi, "bg-[url('/assets/images/$1')]");
  mainContent = mainContent.replace(/bg-\[url\(['\"]?images\/([^)]*?)['\"]?\)\]/gi, "bg-[url('/assets/images/$1')]");

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
    <div className="page-content">
      ${mainContent.trim()}
    </div>
  );
}
`;

  return jsxCode;
}

function run() {
  console.log('Converting Travlla HTML templates to React components...');
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
