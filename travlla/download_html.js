import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://travlla-tailwind.vercel.app/';
const HTML_DIR = path.resolve('original_html');

if (!fs.existsSync(HTML_DIR)) {
  fs.mkdirSync(HTML_DIR, { recursive: true });
}

const pages = [
  'index.html',
  'index-2.html',
  'about-1.html',
  'services.html',
  'service-detail.html',
  'our-team.html',
  'our-team-detail.html',
  'tour-package.html',
  'tour-package-detail.html',
  'destination-1-grid.html',
  'destination-detail.html',
  'blog-grid.html',
  'blog-detail.html',
  'contact.html',
  'faq.html',
  'pricing.html',
  'compare.html'
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
  console.log('Downloading original HTML files for Travlla...');
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
