import https from 'https';

const testUrls = [
  'https://html.merku.love/upcreators/img/cases/01.webp',
  'https://html.merku.love/upcreators/img/cases/01.jpg',
  'https://html.merku.love/upcreators/video/tennis.mp4',
  'https://html.merku.love/upcreators/img/index/herodoggo.png',
  'https://html.merku.love/upcreators/svg/logo--white.svg',
  'https://html.merku.love/upcreators/img/index_shop/item01.jpg'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
}

async function run() {
  console.log('Testing responsiveness of remote template assets...');
  for (const url of testUrls) {
    const result = await checkUrl(url);
    console.log(`URL: ${result.url} | Status: ${result.status}`);
  }
}

run();
