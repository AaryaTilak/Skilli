import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://travlla-tailwind.vercel.app/';
const PUBLIC_DIR = path.resolve('public');

// Ensure directories exist
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

const cssFiles = [
  'assets/icons/line-awesome/css/line-awesome.min.css',
  'assets/icons/flaticon/flaticon.css',
  'assets/icons/fontawesome/css/all.min.css',
  'assets/icons/themify-icons/css/themify-icons.css',
  'assets/icons/feather/css/feather.css',
  'assets/vendor/swiper/swiper-bundle.min.css',
  'assets/vendor/flatpickr/css/flatpicker.css',
  'assets/css/lc_lightbox.css',
  'assets/vendor/magnific-popup/magnific-popup.css',
  'assets/vendor/lightgallery/dist/css/lightgallery-bundle.min.css',
  'assets/vendor/nouislider/nouislider.min.css',
  'assets/css/style.css'
];

const imageFiles = [
  'assets/images/logo-dark.png',
  'assets/images/logo-light.png',
  'assets/images/favicon.png',
  'assets/images/main-slider/slider2/slider-bg.jpg',
  'assets/images/main-slider/slider2/Plane-With-Line.png',
  'assets/images/main-slider/slider2/right-pic.png',
  'assets/images/main-slider/slider2/Cloud1.png',
  'assets/images/main-slider/slider2/Cloud2.png',
  'assets/images/background/Title-Separator.png',
  'assets/images/trv-icon/destination.png',
  'assets/images/trv-icon/make-payment.png',
  'assets/images/trv-icon/travelling.png',
  'assets/images/our-team/pic1.jpg',
  'assets/images/our-team/pic2.jpg',
  'assets/images/our-team/pic3.jpg',
  'assets/images/testimonials/pic1.jpg',
  'assets/images/testimonials/pic2.jpg',
  'assets/images/blog/pic1.jpg',
  'assets/images/blog/pic2.jpg',
  'assets/images/blog/pic3.jpg'
];

// Add some travel destinations and tours images
for (let i = 1; i <= 6; i++) {
  imageFiles.push(`assets/images/gallery/pic${i}.jpg`);
  imageFiles.push(`assets/images/tour/pic${i}.jpg`);
}

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
  console.log('Downloading CSS stylesheets and vendor packages...');
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

  console.log('Downloading key images...');
  for (const imgRel of imageFiles) {
    const url = `${BASE_URL}${imgRel}`;
    const dest = path.join(PUBLIC_DIR, imgRel);
    ensureDirExists(path.dirname(dest));
    
    console.log(`Downloading ${url} -> ${dest}`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`Error downloading image ${imgRel}:`, e.message);
    }
  }

  console.log('Scanning stylesheets for font files...');
  const fontUrlRegex = /url\(['"]?([^'"]*?\.(?:woff2?|ttf|eot|otf|svg)(?:\?[^'"]*)?)['"]?\)/g;
  const downloadedFonts = new Set();

  for (const cssRel of cssFiles) {
    const filePath = path.join(PUBLIC_DIR, cssRel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf8');
    let match;
    
    while ((match = fontUrlRegex.exec(content)) !== null) {
      const originalUrlPath = match[1];
      if (originalUrlPath.startsWith('data:')) continue;
      
      const cleanUrlPath = originalUrlPath.split('?')[0].split('#')[0];
      
      // Resolve path relative to CSS location
      const cssFolder = path.dirname(filePath);
      const relativeFolder = cssFolder.replace(PUBLIC_DIR, '').replace(/\\/g, '/'); // e.g. /assets/css
      
      let fontRelPath;
      if (cleanUrlPath.startsWith('../') || cleanUrlPath.startsWith('./') || !cleanUrlPath.startsWith('/')) {
        fontRelPath = path.posix.join(relativeFolder, cleanUrlPath);
      } else {
        fontRelPath = cleanUrlPath;
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

  console.log('All downloads and asset processes completed successfully!');
}

run().catch(console.error);
