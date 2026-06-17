const { Jimp } = require('jimp');

function floodFillTransparent(image) {
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const visited = new Uint8Array(w * h);
  const queue = [];

  // Seed border pixels
  for (let x = 0; x < w; x++) {
    queue.push([x, 0]);
    queue.push([x, h - 1]);
    visited[x] = 1;
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 0; y < h; y++) {
    queue.push([0, y]);
    queue.push([w - 1, y]);
    visited[y * w] = 1;
    visited[y * w + (w - 1)] = 1;
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const idx = (w * y + x) << 2;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    const a = image.bitmap.data[idx+3];

    // Background gradient pixels are very light (usually > 200 or 210)
    // Bezels are dark/black (< 100), so the flood-fill will stop at bezels
    if (r > 200 && g > 200 && b > 200 && a > 0) {
      image.bitmap.data[idx+3] = 0; // set transparent

      const neighbors = [
        [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
      ];
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nidx = ny * w + nx;
          if (!visited[nidx]) {
            visited[nidx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

async function main() {
  console.log('Reading high-res crops...');

  // 1. Hero
  const hero = await Jimp.read('public/assets/img/th-3/hero-mobille-clean.jpg');
  floodFillTransparent(hero);
  await hero.write('public/assets/img/th-3/hero-mobille-clean.png');
  console.log('Saved hero-mobille-clean.png');

  // 2. Content 1
  const content1 = await Jimp.read('public/assets/img/th-3/content-img-1-clean.jpg');
  floodFillTransparent(content1);
  await content1.write('public/assets/img/th-3/content-img-1-clean.png');
  console.log('Saved content-img-1-clean.png');

  // 3. Content 2
  const content2 = await Jimp.read('public/assets/img/th-3/content-img-2-clean.jpg');
  floodFillTransparent(content2);
  await content2.write('public/assets/img/th-3/content-img-2-clean.png');
  console.log('Saved content-img-2-clean.png');

  // 4. Newsletter
  const newsletter = await Jimp.read('public/assets/img/th-3/newsletter-clean.jpg');
  floodFillTransparent(newsletter);
  await newsletter.write('public/assets/img/th-3/newsletter-clean.png');
  console.log('Saved newsletter-clean.png');
}

main().catch(err => {
  console.error('Error removing backgrounds:', err);
});
