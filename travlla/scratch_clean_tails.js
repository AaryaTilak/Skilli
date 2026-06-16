import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(PAGES_DIR, f);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Pattern: matches </div> followed by comments/whitespace, then another </div> at the end of the return statement.
  const endRegex = /<\/div>\s*(?:\{\/\*[\s\S]*?\*\/\}|\s)*<\/div>\s*\);\s*\}\s*$/;
  if (endRegex.test(content)) {
    content = content.replace(endRegex, '</div>\n  );\n}');
    console.log(`Cleaned up trailing divs/comments in ${f}`);
  } else {
    // Some files might not end exactly with </div> ); } due to newlines, let's try a softer match
    const softRegex = /<\/div>\s*\{\/\*[\s\S]*?\*\/\}[\s\S]*?<\/div>\s*\);\s*\}\s*$/;
    if (softRegex.test(content)) {
      content = content.replace(softRegex, '</div>\n  );\n}');
      console.log(`Cleaned up trailing divs/comments (soft match) in ${f}`);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Done cleaning tails!');
