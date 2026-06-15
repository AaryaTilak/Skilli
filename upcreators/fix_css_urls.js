import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://html.merku.love/upcreators/';
const CSS_DIR = path.resolve('public/css');

function run() {
  console.log('Fixing relative asset URLs inside local CSS files...');
  const files = fs.readdirSync(CSS_DIR);

  // We want to find url(...) references that point to images, SVGs, or videos
  // e.g. url(../img/index/bg.png) or url('../svg/shapes/28.svg')
  const urlRegex = /url\(['"]?([^'"]*?\.(?:png|jpg|webp|svg|gif|mp4|webm|ogv))['"]?\)/g;

  for (const file of files) {
    if (!file.endsWith('.css')) continue;
    const filePath = path.join(CSS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let match;
    let modified = false;

    // Use a copy of content to replace inside loop
    let newContent = content;

    while ((match = urlRegex.exec(content)) !== null) {
      const originalPath = match[1];

      // Skip external URLs or data URLs
      if (originalPath.startsWith('http') || originalPath.startsWith('data:')) continue;
      // Skip font files (which are already handled locally)
      if (originalPath.endsWith('.woff') || originalPath.endsWith('.woff2') || originalPath.endsWith('.ttf')) continue;

      let absoluteUrl;
      if (originalPath.startsWith('../')) {
        absoluteUrl = `${BASE_URL}${originalPath.substring(3)}`;
      } else if (originalPath.startsWith('/')) {
        absoluteUrl = `${BASE_URL}${originalPath.substring(1)}`;
      } else {
        absoluteUrl = `${BASE_URL}css/${originalPath}`;
      }

      console.log(`File: ${file} | Replacing relative URL: ${originalPath} -> ${absoluteUrl}`);
      
      // Replace all occurrences of this specific relative path in the stylesheet
      newContent = newContent.replaceAll(originalPath, absoluteUrl);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated assets references in: ${file}`);
    }
  }

  console.log('All CSS background asset paths have been updated!');
}

run();
