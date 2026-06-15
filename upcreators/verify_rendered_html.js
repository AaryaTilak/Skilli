import http from 'http';

const pagesToCheck = [
  '/',
  '/home-shop',
  '/home-streamers',
  '/our-works'
];

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:5175${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

async function run() {
  console.log('Fetching local server rendered HTML pages to scan for assets...');
  for (const pagePath of pagesToCheck) {
    console.log(`\n=============================================`);
    console.log(`Checking route: ${pagePath}`);
    console.log(`=============================================`);
    try {
      const html = await fetchPage(pagePath);

      // Search for any img, source, or video tags in the fetched markup
      // Notice: React SSR or client-side rendering may not output full markup on a raw fetch since it is a client-side SPA. 
      // But we can check if the raw index.html or bundle JS contains relative assets.
      const assetMatches = html.match(/(src|srcset|data-src|data-srcset|poster)="([^"]+?)"/g) || [];
      console.log(`Found ${assetMatches.length} asset attributes in raw HTML:`);
      
      let relativeCount = 0;
      for (const match of assetMatches) {
        if (!match.includes('http') && !match.includes('data:') && !match.includes('mailto:') && !match.includes('tel:') && !match.includes('#')) {
          console.log(`  [RELATIVE RENDERING] ${match}`);
          relativeCount++;
        }
      }

      if (relativeCount === 0) {
        console.log('  No relative asset paths found in raw server index.html.');
      }
    } catch (e) {
      console.error(`Error checking ${pagePath}:`, e.message);
    }
  }
}

run();
