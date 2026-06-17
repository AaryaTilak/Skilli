const { Jimp } = require('jimp');

function floodFillTransparent(image) {
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const visited = new Uint8Array(w * h);
  // Seed the corners of the crop box
  const queue = [];
  
  // Seed top and bottom edges
  for (let x = 0; x < w; x++) {
    queue.push([x, 0]);
    queue.push([x, h - 1]);
    visited[x] = 1;
    visited[(h - 1) * w + x] = 1;
  }
  // Seed left and right edges
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

    // White or very light background outside the black bezel (bezel is dark/black)
    if (r > 230 && g > 230 && b > 230 && a > 0) {
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
  console.log('Reading content-img-1.jpg...');
  const base = await Jimp.read('public/assets/img/th-3/content-img-1.jpg');

  // Coordinates: x = start, y = 130, w = 155, h = 400
  // Phone 1: Welcome
  const phone1 = base.clone().crop({ x: 212, y: 130, w: 155, h: 400 });
  floodFillTransparent(phone1);
  await phone1.write('public/assets/img/th-3/phone-welcome.png');
  console.log('Saved phone-welcome.png');

  // Phone 2: Login
  const phone2 = base.clone().crop({ x: 406, y: 130, w: 155, h: 400 });
  floodFillTransparent(phone2);
  await phone2.write('public/assets/img/th-3/phone-login.png');
  console.log('Saved phone-login.png');

  // Phone 3: Dashboard
  const phone3 = base.clone().crop({ x: 600, y: 130, w: 155, h: 400 });
  floodFillTransparent(phone3);
  await phone3.write('public/assets/img/th-3/phone-dashboard.png');
  console.log('Saved phone-dashboard.png');

  // Phone 4: Budget
  const phone4 = base.clone().crop({ x: 794, y: 130, w: 155, h: 400 });
  floodFillTransparent(phone4);
  await phone4.write('public/assets/img/th-3/phone-budget.png');
  console.log('Saved phone-budget.png');
}

main().catch(err => {
  console.error('Error extracting clean phones:', err);
});
