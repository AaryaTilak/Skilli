const { Jimp } = require('jimp');

async function main() {
  console.log('Generating high-res mockup crops...');

  // 1. Hero
  const hero = await Jimp.read('public/assets/img/th-3/hero-mobille.jpg');
  hero.crop({ x: 415, y: 0, w: 609, h: 682 });
  await hero.write('public/assets/img/th-3/hero-mobille-clean.jpg');
  console.log('Saved hero-mobille-clean.jpg');

  // 2. Content 1 (Onboarding Steps 3 & 4)
  const content1 = await Jimp.read('public/assets/img/th-3/content-img-1.jpg');
  // Crop precisely from x = 588 to x = 975 to cover Phone 3, Phone 4 and the middle arrow cleanly
  content1.crop({ x: 588, y: 70, w: 387, h: 540 });
  await content1.write('public/assets/img/th-3/content-img-1-clean.jpg');
  console.log('Saved content-img-1-clean.jpg');

  // 3. Content 2 (Groups list)
  const content2 = await Jimp.read('public/assets/img/th-3/content-img-2.jpg');
  content2.crop({ x: 410, y: 0, w: 614, h: 682 });
  await content2.write('public/assets/img/th-3/content-img-2-clean.jpg');
  console.log('Saved content-img-2-clean.jpg');

  // 4. Newsletter
  const newsletter = await Jimp.read('public/assets/img/th-3/newsletter.jpg');
  newsletter.crop({ x: 365, y: 0, w: 659, h: 682 });
  await newsletter.write('public/assets/img/th-3/newsletter-clean.jpg');
  console.log('Saved newsletter-clean.jpg');
}

main().catch(err => {
  console.error('Error generating high-res crops:', err);
});
