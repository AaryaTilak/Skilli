import fs from 'fs';
import path from 'path';

const PAGES_DIR = path.resolve('src/pages');
const files = fs.readdirSync(PAGES_DIR);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  const content = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');

  // Find tags like img, source, video
  // We want to see if any src, srcset, data-src, data-srcset, poster contains:
  // 1. Relative paths (like "img/...")
  // 2. Base64 placeholders (like "data:image/gif...")
  const relativeRegex = /(src|srcset|data-src|data-srcset|poster)="((?!http|\/|data:image|mailto:|tel:|#)[^"]+?)"/g;
  let match;
  while ((match = relativeRegex.exec(content)) !== null) {
    console.log(`[RELATIVE PATH] File: ${file} | Attribute: ${match[1]} | Value: ${match[2]}`);
  }

  // Also check if src is a lazy placeholder while data-src has a real path, 
  // which means the image won't load if lazy loader JS is missing.
  const lazyImgRegex = /<img[^>]+?data-src="([^"]+?)"[^>]*?>/g;
  let lazyMatch;
  while ((lazyMatch = lazyImgRegex.exec(content)) !== null) {
    const tag = lazyMatch[0];
    const dataSrc = lazyMatch[1];
    
    // Check if the tag also has src
    const srcMatch = /src="([^"]+?)"/.exec(tag);
    if (!srcMatch) {
      console.log(`[LAZY IMG WITHOUT SRC] File: ${file} | Tag: ${tag}`);
    } else {
      const srcVal = srcMatch[1];
      if (srcVal.startsWith('data:image') || srcVal === '' || srcVal === '#') {
        console.log(`[LAZY IMG PLACEHOLDER] File: ${file} | data-src: ${dataSrc} | src: ${srcVal}`);
      }
    }
  }
}
console.log('Checks completed!');
