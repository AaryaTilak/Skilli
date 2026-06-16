import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://template.hasthemes.com/brancy/brancy/';
const HTML_DIR = path.resolve('original_html');

if (!fs.existsSync(HTML_DIR)) {
  fs.mkdirSync(HTML_DIR, { recursive: true });
}

const pages = [
  'index-two.html',
  'product.html',
  'product-details.html',
  'product-cart.html',
  'product-checkout.html',
  'product-wishlist.html',
  'contact.html',
  'account-login.html',
  'blog.html',
  'blog-details.html'
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading original HTML files...');
  for (const page of pages) {
    const url = `${BASE_URL}${page}`;
    const dest = path.join(HTML_DIR, page);
    console.log(`Downloading ${url} -> ${dest}`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`Error downloading ${page}:`, e.message);
    }
  }
  console.log('All HTML files downloaded successfully!');
}

run().catch(console.error);
