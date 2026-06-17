const { Jimp } = require('jimp');

function floodFillTransparent(image) {
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const visited = new Uint8Array(w * h);
  const queue = [[0, 0], [w - 1, 0], [0, h - 1], [w - 1, h - 1]];
  
  for (const [qx, qy] of queue) {
    visited[qy * w + qx] = 1;
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const idx = (w * y + x) << 2;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    const a = image.bitmap.data[idx+3];

    // Identify white background pixels
    if (r > 240 && g > 240 && b > 240 && a > 0) {
      image.bitmap.data[idx+3] = 0; // set alpha to 0 (transparent)

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

  // Let's crop the 4 phones:
  // Phone 1: Welcome Splash (Split Smart, Live Better)
  const phone1 = base.clone().crop({ x: 203, y: 120, w: 185, h: 465 });
  floodFillTransparent(phone1);
  await phone1.write('public/assets/img/th-3/phone-welcome.png');
  console.log('Saved phone-welcome.png');

  // Phone 3: Dashboard (Gain total control of your expenses)
  const phone3 = base.clone().crop({ x: 590, y: 120, w: 185, h: 465 });
  floodFillTransparent(phone3);
  await phone3.write('public/assets/img/th-3/phone-dashboard.png');
  console.log('Saved phone-dashboard.png');

  // Phone 4: Budgets (Planning ahead)
  const phone4 = base.clone().crop({ x: 785, y: 120, w: 185, h: 465 });
  floodFillTransparent(phone4);
  await phone4.write('public/assets/img/th-3/phone-budget.png');
  console.log('Saved phone-budget.png');
}

main().catch(err => {
  console.error('Error extracting phones:', err);
});
