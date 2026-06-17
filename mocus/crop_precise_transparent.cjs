const { Jimp } = require('jimp');

function floodFillTransparent(image) {
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const visited = new Uint8Array(w * h);
  const queue = [];

  // Seed edge pixels for background removal
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

    // Background white/light grey pixels
    if (r > 200 && g > 200 && b > 200 && a > 0) {
      image.bitmap.data[idx+3] = 0; // Transparent

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
  console.log('Reading content-img-1.jpg...');
  const base = await Jimp.read('public/assets/img/th-3/content-img-1.jpg');

  // Crop Phone 1
  const phone1 = base.clone().crop({ x: 205, y: 100, w: 180, h: 430 });
  floodFillTransparent(phone1);
  await phone1.write('public/assets/img/th-3/phone-welcome.png');
  console.log('Saved phone-welcome.png');

  // Crop Phone 3
  const phone3 = base.clone().crop({ x: 598, y: 100, w: 170, h: 430 });
  floodFillTransparent(phone3);
  await phone3.write('public/assets/img/th-3/phone-dashboard.png');
  console.log('Saved phone-dashboard.png');

  // Crop Phone 4
  const phone4 = base.clone().crop({ x: 791, y: 100, w: 175, h: 430 });
  floodFillTransparent(phone4);
  await phone4.write('public/assets/img/th-3/phone-budget.png');
  console.log('Saved phone-budget.png');
}

main().catch(err => {
  console.error('Error cropping precise transparent phones:', err);
});
