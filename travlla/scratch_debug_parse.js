import fs from 'fs';

const html = fs.readFileSync('original_html/destination-1-grid.html', 'utf8');
console.log('HTML total length:', html.length);
console.log('page-content index:', html.indexOf('<div class="page-content">'));
console.log('footer index:', html.indexOf('<footer'));
console.log('FOOTER START index:', html.indexOf('<!-- FOOTER START -->'));
console.log('FOOTER COPYRIGHT index:', html.indexOf('<!-- FOOTER COPYRIGHT -->'));

// Let's print the 500 characters after page-content
const startIdx = html.indexOf('<div class="page-content">');
if (startIdx !== -1) {
  console.log('Snippet after page-content:');
  console.log(html.substring(startIdx, startIdx + 500));
}
