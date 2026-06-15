import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://html.merku.love/upcreators/';
const CSS_DIR = path.resolve('public/css');
const FONTS_DIR = path.resolve('public/fonts');

// Ensure directories exist
if (!fs.existsSync(CSS_DIR)) {
  fs.mkdirSync(CSS_DIR, { recursive: true });
}
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

const cssFiles = [
  'css/preload.min.css',
  'css/icomoon.css',
  'css/libs.min.css',
  'css/floatbutton.min.css',
  'css/index.min.css',
  'css/index-shop.min.css',
  'css/streamers.min.css'
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
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
  console.log('Downloading CSS files...');
  for (const fileRel of cssFiles) {
    const url = `${BASE_URL}${fileRel}`;
    const filename = path.basename(fileRel);
    const dest = path.join(CSS_DIR, filename);
    console.log(`Downloading ${url} -> ${dest}`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`Error downloading CSS ${fileRel}:`, e.message);
    }
  }

  console.log('Scanning CSS files for font references...');
  const files = fs.readdirSync(CSS_DIR);
  const fontUrlRegex = /url\(['"]?([^'"]*?\.(?:woff2?|ttf|eot|otf|svg)(?:\?[^'"]*)?)['"]?\)/g;

  // Track downloaded fonts to avoid redundant downloads
  const downloadedFonts = new Set();

  for (const file of files) {
    if (!file.endsWith('.css')) continue;
    const filePath = path.join(CSS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let match;
    let modified = false;

    // We will parse all url(...) imports in CSS
    // Matches like url('../fonts/icomoon.woff') or url('/fonts/archivo.woff2') or url('../fonts/Archivo-Regular.woff2')
    // We want to extract the path and download it.
    while ((match = fontUrlRegex.exec(content)) !== null) {
      const originalUrlPath = match[1];
      // Skip data URLs or external absolute URLs if they don't belong to the site
      if (originalUrlPath.startsWith('data:')) continue;
      
      // Resolve url relative to the original CSS folder: base/css/
      // e.g. base_url/css/ + ../fonts/icomoon.woff = base_url/fonts/icomoon.woff
      // clean query params (e.g. ?v=4.7.0 or ?#iefix)
      const cleanUrlPath = originalUrlPath.split('?')[0].split('#')[0];
      
      // CSS is at BASE_URL/css/filename.css. 
      // If font is relative like ../fonts/foo.woff, the absolute URL is BASE_URL/fonts/foo.woff
      let absoluteFontUrl;
      if (cleanUrlPath.startsWith('http')) {
        absoluteFontUrl = cleanUrlPath;
      } else if (cleanUrlPath.startsWith('../')) {
        absoluteFontUrl = `${BASE_URL}${cleanUrlPath.substring(3)}`;
      } else if (cleanUrlPath.startsWith('/')) {
        absoluteFontUrl = `${BASE_URL}${cleanUrlPath.substring(1)}`;
      } else {
        absoluteFontUrl = `${BASE_URL}css/${cleanUrlPath}`;
      }

      const fontFilename = path.basename(cleanUrlPath);
      const fontDest = path.join(FONTS_DIR, fontFilename);

      if (!downloadedFonts.has(fontFilename)) {
        console.log(`Downloading font: ${absoluteFontUrl} -> ${fontDest}`);
        try {
          await downloadFile(absoluteFontUrl, fontDest);
          downloadedFonts.add(fontFilename);
        } catch (e) {
          console.error(`Error downloading font ${fontFilename}:`, e.message);
        }
      }

      // Rewrite the URL inside CSS to point to the local fonts folder
      // Since CSS files are at /css/ and fonts at /fonts/, the relative path from CSS to Fonts is ../fonts/
      const newLocalUrl = `../fonts/${fontFilename}`;
      content = content.replace(originalUrlPath, newLocalUrl);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated font paths in: ${file}`);
    }
  }

  console.log('All downloads and stylesheet updates completed successfully!');
}

run().catch(console.error);
