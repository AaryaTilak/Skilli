const { Jimp } = require('jimp');

async function main() {
  console.log('Reading files...');
  
  // 1. Hero Mobile
  const hero = await Jimp.read('public/assets/img/th-3/hero-mobille.jpg');
  // Crop right side (the two phones on gradient bg)
  hero.crop({ x: 415, y: 0, w: 609, h: 682 });
  await hero.write('public/assets/img/th-3/hero-mobille-cropped.jpg');
  console.log('Cropped hero: saved as hero-mobille-cropped.jpg');

  // 2. Content Image 1 (Onboarding Flow)
  const content1 = await Jimp.read('public/assets/img/th-3/content-img-1.jpg');
  // Option A: Crop right side containing all 4 phones
  const content1_phones = content1.clone().crop({ x: 190, y: 50, w: 810, h: 580 });
  await content1_phones.write('public/assets/img/th-3/content-img-1-cropped.jpg');
  
  // Option B: Crop Phone 3 (Dashboard stats)
  const content1_phone3 = content1.clone().crop({ x: 585, y: 120, w: 185, h: 460 });
  await content1_phone3.write('public/assets/img/th-3/content-img-1-phone3.jpg');
  
  // Option C: Crop Phone 3 & 4
  const content1_two_phones = content1.clone().crop({ x: 585, y: 80, w: 385, h: 520 });
  await content1_two_phones.write('public/assets/img/th-3/content-img-1-two-phones.jpg');
  console.log('Cropped content1: saved options');

  // 3. Content Image 2 (Manage Groups)
  const content2 = await Jimp.read('public/assets/img/th-3/content-img-2.jpg');
  // Crop right side (the two phones on gradient bg)
  content2.crop({ x: 410, y: 0, w: 614, h: 682 });
  await content2.write('public/assets/img/th-3/content-img-2-cropped.jpg');
  console.log('Cropped content2: saved as content-img-2-cropped.jpg');

  // 4. Newsletter
  const newsletter = await Jimp.read('public/assets/img/th-3/newsletter.jpg');
  // Crop right side (the two phones on gradient bg)
  newsletter.crop({ x: 365, y: 0, w: 659, h: 682 });
  await newsletter.write('public/assets/img/th-3/newsletter-cropped.jpg');
  console.log('Cropped newsletter: saved as newsletter-cropped.jpg');
}

main().catch(err => {
  console.error('Error cropping images:', err);
});
