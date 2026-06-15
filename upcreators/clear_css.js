import fs from 'fs';
import path from 'path';

const PAGES_DIR = path.resolve('src/pages');

const cssFilesToClear = [
  'About.css',
  'Cart.css',
  'Contact.css',
  'Events.css',
  'FAQ.css',
  'HomeAgency.css',
  'HomeShop.css',
  'HomeStreamers.css',
  'OurWorks.css',
  'Pages.css',
  'Shop.css'
];

function run() {
  console.log('Clearing custom page CSS files to prevent conflicts...');
  for (const cssFile of cssFilesToClear) {
    const filePath = path.join(PAGES_DIR, cssFile);
    if (fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(`Cleared: ${cssFile}`);
    } else {
      console.warn(`File not found: ${cssFile}`);
    }
  }
  console.log('CSS files cleared successfully!');
}

run();
