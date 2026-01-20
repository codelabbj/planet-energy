// Import all product images
import acb from '../assets/acb.jpg'
import mccb from '../assets/mccb.jpg'
import mcb from '../assets/mcb.jpg'
import hauteTension1 from '../assets/Haute-Tension1.jpg'
import hauteTension2 from '../assets/Haute-Tension2.jpeg'
import cable1 from '../assets/cable1.png'
import cable2 from '../assets/cable2.png'
import cable3 from '../assets/cable3.png'
import cableFull from '../assets/Cable.jpg'
import cableArticleHero from '../assets/cable-article-hero.png'
import cableeee from '../assets/Cableeee.jpg'
import im1 from '../assets/IM1.jpg'
import im2 from '../assets/IM2.jpg'
import im3 from '../assets/IM3.jpg'
import picc1 from '../assets/PIC1 N.jpg'
import pic2 from '../assets/PIC2.jpg'
import pic3 from '../assets/PIC3.jpg'
import pic4 from '../assets/PIC4.jpg'
import pic5 from '../assets/PIC5.jpg'
import pic6 from '../assets/PIC6.jpg'
import pic7 from '../assets/PIC7.jpg'
import pic8 from '../assets/PIC8.jpg'
import pic9 from '../assets/PIC9.jpg'
import pic10 from '../assets/PIC10.jpg'
import pic11 from '../assets/PIC11.jpg'
import im4 from '../assets/IM4.jpg'
import imc1 from '../assets/IM C1.jpg'
import imc2 from '../assets/IM C2.jpg'
import imc3 from '../assets/IM C3.jpg'
// import plogo1 from '../assets/logo1.png'
// import plogo2 from '../assets/logo2.gif'
// import plogo4 from '../assets/logo4.webp'
// import plogo5 from '../assets/logo5.webp'
// import plogo6 from '../assets/plogo6.png'

export const imageMap = {
  'acb.jpg': acb,
  'mccb.jpg': mccb,
  'mcb.jpg': mcb,
  'Haute-Tension1.jpg': hauteTension1,
  'Haute-Tension2.jpeg': hauteTension2,
  'cable1.png': cable1,
  'cable2.png': cable2,
  'cable3.png': cable3,
  'Cable.jpg': cableFull,
  'cable-article-hero.png': cableArticleHero,
  'Cableeee.jpg': cableeee,
  'IM1.jpg': im1,
  'IM2.jpg': im2,
  'IM3.jpg': im3,
  'PIC1 N.jpg': picc1,
  'PIC2.jpg': pic2,
  'PIC3.jpg': pic3,
  'PIC4.jpg': pic4,
  'PIC5.jpg': pic5,
  'PIC6.jpg': pic6,
  'PIC7.jpg': pic7,
  'PIC8.jpg': pic8,
  'PIC9.jpg': pic9,
  'PIC10.jpg': pic10,
  'PIC11.jpg': pic11,
  'IM4.jpg': im4,
  'IM C1.jpg': imc1,
  'IM C2.jpg': imc2,
  'IM C3.jpg': imc3,
  // 'logo1.png': plogo1,
  // 'logo2.gif': plogo2,
  // 'logo4.webp': plogo4,
  // 'logo5.webp': plogo5,
  // 'plogo6.png': plogo6
}

// Helper function to resolve image paths
export const resolveImagePath = (imagePath) => {
  if (!imagePath) return ''
  if (imagePath.startsWith('http')) return imagePath // Return external URLs as-is

  // Extract filename from path
  const filename = imagePath.split('/').pop()
  return imageMap[filename] || imagePath
}
