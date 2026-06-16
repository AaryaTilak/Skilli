import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Fix nested quote style errors
  // e.g. style={{ backgroundImage: 'url('/assets/images/...')' }}
  content = content.replace(/style=\{\{\s*backgroundImage:\s*'url\('([^']*)'\)'\s*\}\}/g, (match, url) => {
    return `style={{ backgroundImage: "url('${url}')" }}`;
  });

  // 2. Fix unclosed li tags in ServiceDetails.jsx
  if (filePath.endsWith('ServiceDetails.jsx')) {
    content = content.replace(
      /Customizing itineraries based on traveler interests\s*<\/li>?\s*<\/ul>/g,
      'Customizing itineraries based on traveler interests\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>'
    );
    // Let's also check line 112 unclosed li in ServiceDetails
    content = content.replace(
      /<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">\s*<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"><\/i>\s*Customizing itineraries based on traveler interests\s*<\/ul>/g,
      '<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomizing itineraries based on traveler interests\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>'
    );
  }

  // 3. Fix mismatched div tags at end of files like About.jsx, Contact.jsx, Compare.jsx
  // In these files, there is a closed div at the inner banner or somewhere, which closes the main container prematurely,
  // leaving the rest of the file outside the root div, and leaving an extra closing div at the end.
  // Let's remove the premature closing div or trailing extra closing div.
  // Specifically:
  // In About.jsx:
  // 696: 			</div>
  // 697: 			{/* CONTENT END */}
  // 698: 
  // 699: 			{/* FOOTER START */}
  // 700:     </div>
  // Let's look at lines 695-700 in About.jsx. If 696 is </div> and 700 is </div>, we should remove the premature one or the extra one.
  // Actually, let's verify if About.jsx has balanced divs.
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed styling/tags in ${path.basename(filePath)}`);
  }
}

function checkDivs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Count div tags inside return ( ... )
  const returnMatch = content.match(/return\s*\(\s*([\s\S]*?)\s*\);/);
  if (!returnMatch) return;
  
  const jsx = returnMatch[1];
  let openDivs = 0;
  let closeDivs = 0;
  
  // Simple regex tokenization for <div> and </div>
  const tokens = jsx.match(/<div\b|<\/div>/g) || [];
  tokens.forEach(tok => {
    if (tok === '<div') openDivs++;
    else if (tok === '</div>') closeDivs++;
  });
  
  if (openDivs !== closeDivs) {
    console.log(`Unbalanced divs in ${path.basename(filePath)}: Open=${openDivs}, Close=${closeDivs}`);
    
    // If there is an extra closing div, let's find it.
    // Usually, the page-content starts with <div className="page-content"> and ends with </div>
    // Let's print the tail of the file to see what it is
    const lines = content.split('\n');
    console.log(`Tail of ${path.basename(filePath)}:`);
    console.log(lines.slice(-10).join('\n'));
  }
}

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const filePath = path.join(PAGES_DIR, f);
  fixFile(filePath);
  checkDivs(filePath);
});
console.log('Done!');
