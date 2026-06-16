import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://template.hasthemes.com/brancy/brancy/';
const PUBLIC_DIR = path.resolve('public');

// Ensure directories exist
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

const cssFiles = [
  'assets/css/vendor/bootstrap.min.css',
  'assets/css/plugins/swiper-bundle.min.css',
  'assets/css/plugins/font-awesome.min.css',
  'assets/css/plugins/fancybox.min.css',
  'assets/css/plugins/nice-select.css',
  'assets/css/style.min.css'
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
  console.log('Downloading CSS files...');
  for (const cssRel of cssFiles) {
    const url = `${BASE_URL}${cssRel}`;
    const dest = path.join(PUBLIC_DIR, cssRel);
    ensureDirExists(path.dirname(dest));
    
    console.log(`Downloading ${url} -> ${dest}`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`Error downloading CSS ${cssRel}:`, e.message);
    }
  }

  console.log('Scanning CSS files for font references...');
  const fontUrlRegex = /url\(['"]?([^'"]*?\.(?:woff2?|ttf|eot|otf|svg)(?:\?[^'"]*)?)['"]?\)/g;
  const downloadedFonts = new Set();

  // We scan the style.min.css and font-awesome.min.css specifically
  const cssToScan = [
    path.join(PUBLIC_DIR, 'assets/css/style.min.css'),
    path.join(PUBLIC_DIR, 'assets/css/plugins/font-awesome.min.css')
  ];

  for (const filePath of cssToScan) {
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf8');
    let match;
    let modified = false;
    
    // Scan all url(...) references
    while ((match = fontUrlRegex.exec(content)) !== null) {
      const originalUrlPath = match[1];
      if (originalUrlPath.startsWith('data:')) continue;
      
      const cleanUrlPath = originalUrlPath.split('?')[0].split('#')[0];
      
      // Determine the absolute URL of the font file
      // If CSS is at assets/css/style.min.css, font is usually relative like ../fonts/foo.woff
      // absolute path: assets/css/ + ../fonts/foo.woff = assets/fonts/foo.woff
      // We resolve relative to the folder containing the stylesheet
      const cssFolder = path.dirname(filePath);
      const relativeFolder = cssFolder.replace(PUBLIC_DIR, '').replace(/\\/g, '/'); // e.g. /assets/css
      
      let fontRelPath;
      if (cleanUrlPath.startsWith('../')) {
        fontRelPath = path.posix.join(relativeFolder, cleanUrlPath); // e.g. /assets/fonts/foo.woff
      } else {
        fontRelPath = path.posix.join(relativeFolder, '..', cleanUrlPath);
      }
      
      const absoluteFontUrl = `${BASE_URL}${fontRelPath.replace(/^\//, '')}`;
      const fontDest = path.join(PUBLIC_DIR, fontRelPath);
      ensureDirExists(path.dirname(fontDest));

      const fontFilename = path.basename(cleanUrlPath);
      if (!downloadedFonts.has(fontFilename)) {
        console.log(`Downloading font: ${absoluteFontUrl} -> ${fontDest}`);
        try {
          await downloadFile(absoluteFontUrl, fontDest);
          downloadedFonts.add(fontFilename);
        } catch (e) {
          console.error(`Error downloading font ${fontFilename}:`, e.message);
        }
      }
    }
  }

  console.log('All downloads and stylesheet scans completed successfully!');
}

run().catch(console.error);
