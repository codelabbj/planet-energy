// Import all product images
import acb from '../assets/acb.jpg'
import mccb from '../assets/mccb.jpg'
import mcb from '../assets/mcb.jpg'
import hauteTension1 from '../assets/Haute-Tension1.jpg'
import hauteTension2 from '../assets/Haute-Tension2.jpeg'
import cable1 from '../assets/cable1.png'
import cable2 from '../assets/cable2.png'
import cable3 from '../assets/cable3.png'

export const imageMap = {
  'acb.jpg': acb,
  'mccb.jpg': mccb,
  'mcb.jpg': mcb,
  'Haute-Tension1.jpg': hauteTension1,
  'Haute-Tension2.jpeg': hauteTension2,
  'cable1.png': cable1,
  'cable2.png': cable2,
  'cable3.png': cable3
}

// Helper function to resolve image paths
export const resolveImagePath = (imagePath) => {
  if (!imagePath) return ''
  if (imagePath.startsWith('http')) return imagePath // Return external URLs as-is
  
  // Extract filename from path
  const filename = imagePath.split('/').pop()
  return imageMap[filename] || imagePath
}
