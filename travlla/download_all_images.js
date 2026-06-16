import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://travlla-tailwind.vercel.app/';
const PUBLIC_DIR = path.resolve('public');
const HTML_DIR = path.resolve('original_html');

function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
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
  const files = fs.readdirSync(HTML_DIR).filter(f => f.endsWith('.html'));
  const assetsToDownload = new Set();

  // 1. Scan for src="assets/images/..." and other variations
  // We match:
  // - src="assets/images/..."
  // - href="assets/..."
  // - url(assets/images/...)
  // - bg-[url(../images/...)]
  // - data-bg-img="assets/images/..."
  // - url(assets/images/...)
  const assetRegexes = [
    /(?:src|srcset|href|data-src|data-srcset|data-bg-img)="assets\/([^"]+?)"/gi,
    /url\(['"]?assets\/([^)'"]+?)['"]?\)/gi,
    /bg-\[url\(\.\.\/images\/([^)]+?)\)\]/gi,
    /url\(['"]?\.\.\/images\/([^)'"]+?)['"]?\)/gi
  ];

  for (const file of files) {
    const content = fs.readFileSync(path.join(HTML_DIR, file), 'utf8');
    
    // Check first two regexes (standard assets/)
    for (let i = 0; i < 2; i++) {
      const regex = assetRegexes[i];
      let match;
      while ((match = regex.exec(content)) !== null) {
        assetsToDownload.add('assets/' + match[1]);
      }
    }

    // Check last two regexes (relative images/)
    for (let i = 2; i < 4; i++) {
      const regex = assetRegexes[i];
      let match;
      while ((match = regex.exec(content)) !== null) {
        assetsToDownload.add('assets/images/' + match[1]);
      }
    }
  }

  // Also manually add some files that might be referenced in style.css or code
  const manualAssets = [
    'assets/images/inr-banner-cloud.png',
    'assets/images/airplane.png',
    'assets/images/hotballon-Left.png',
    'assets/images/hotballon-right.png',
    'assets/images/background/inr-banner.jpg',
    'assets/images/background/Cloud-bg.png',
    'assets/images/background/adv-bg.jpg',
    'assets/images/background/con-sec-bg.jpg',
    'assets/images/background/ftr-light-bg.png',
    'assets/images/background/ftr-dark-bg.png',
    'assets/images/background/pricebg-shape.png',
    'assets/images/background/pricebg-shape-dark.png',
    'assets/images/trv-icon/Icon-Bg.png',
    'assets/images/w-cho-top.png',
    'assets/images/w-cho-top-dark.png',
    'assets/images/w-cho-btm.png',
    'assets/images/arrow-down.png',
    'assets/images/client-logo/dark/1.png',
    'assets/images/client-logo/dark/2.png',
    'assets/images/client-logo/dark/3.png',
    'assets/images/client-logo/dark/4.png',
    'assets/images/client-logo/dark/5.png',
    'assets/images/client-logo/light/1.png',
    'assets/images/client-logo/light/2.png',
    'assets/images/client-logo/light/3.png',
    'assets/images/client-logo/light/4.png',
    'assets/images/client-logo/light/5.png'
  ];

  manualAssets.forEach(asset => assetsToDownload.add(asset));

  console.log(`Found ${assetsToDownload.size} unique assets to download...`);

  let count = 0;
  for (const asset of assetsToDownload) {
    // Clean up url parameters (like # or ? in fonts/icons)
    const cleanAssetPath = asset.split('?')[0].split('#')[0];
    
    // Ignore html page links
    if (cleanAssetPath.endsWith('.html')) continue;

    const url = `${BASE_URL}${cleanAssetPath}`;
    const dest = path.join(PUBLIC_DIR, cleanAssetPath);
    ensureDirExists(path.dirname(dest));

    if (fs.existsSync(dest)) {
      // Skip if already downloaded
      continue;
    }

    count++;
    console.log(`[${count}] Downloading ${url} -> ${dest}`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`  Failed to download ${asset}: ${e.message}`);
    }
  }

  console.log('Asset downloading process complete!');
}

run().catch(console.error);
