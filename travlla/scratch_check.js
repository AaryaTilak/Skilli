import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('original_html').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const htmlPath = path.join('original_html', file);
  if (!fs.existsSync(htmlPath)) return;
  const html = fs.readFileSync(htmlPath, 'utf8');
  const start = html.indexOf('<div class="page-content">');
  const footerIdx = html.indexOf('<footer');
  const footerStartIdx = html.indexOf('<!-- FOOTER START -->');
  const end = footerIdx !== -1 ? footerIdx : footerStartIdx;
  
  if (start === -1) {
    console.log(file, 'has no page-content start');
    return;
  }
  
  const slice = html.substring(start, end);
  const opens = (slice.match(/<div[ >]/g) || []).length;
  const closes = (slice.match(/<\/div>/g) || []).length;
  console.log(`${file}: Slice length=${slice.length}, Opens=${opens}, Closes=${closes}, Diff=${opens - closes}`);
});
