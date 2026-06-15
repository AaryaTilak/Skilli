import fs from 'fs';
import path from 'path';

const HTML_DIR = path.resolve('original_html');
const files = fs.readdirSync(HTML_DIR);

const assetPattern = /\b(img|svg|video)\/[^\s'">]+?\.(?:jpg|png|webp|svg|mp4|webm|ogv|ico)\b/gi;

console.log('Scanning original HTML files for asset paths...');
const matchedPaths = new Set();

for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const content = fs.readFileSync(path.join(HTML_DIR, file), 'utf8');
  let match;
  while ((match = assetPattern.exec(content)) !== null) {
    const matchedStr = match[0];
    // Find the surrounding context (approx 50 chars before and after)
    const startIdx = Math.max(0, match.index - 40);
    const endIdx = Math.min(content.length, match.index + matchedStr.length + 40);
    const context = content.substring(startIdx, endIdx).replace(/\r?\n|\r/g, ' ');
    
    if (!matchedPaths.has(matchedStr)) {
      matchedPaths.add(matchedStr);
      console.log(`File: ${file} | Path: ${matchedStr} | Context: ...${context}...`);
    }
  }
}

console.log(`Scan complete. Found ${matchedPaths.size} unique asset paths.`);
