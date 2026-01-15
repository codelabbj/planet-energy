import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Cpu, Shield, Zap, Activity, Layers, Settings, Database } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { resolveImagePath } from '../data/imageImports'

const MegaMenu = ({ isOpen, onClose, activeCategory }) => {
    const { t } = useLanguage()

  // Get current language translations for megamenu products
  const getCurrentItems = () => {
    if (!activeCategory) return []
    try {
      const translatedItems = t(`megamenu.products.${activeCategory}`)
      return Array.isArray(translatedItems) ? translatedItems : []
    } catch (e) {
      console.error("Error fetching megamenu translations:", e)
      return []
    }
  }

  const currentItems = getCurrentItems()

  // Static images for products (not translated)
  const getProductImage = (category, index) => {
          // This function will now retrieve images from the translations.js structure
          // Assuming the image URL is part of the translated item object
          const item = currentItems[index];
          return resolveImagePath(item?.img || ""); // Return the resolved image URL
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`mega-menu-overlay ${isOpen ? 'active' : ''}`}
      onMouseLeave={onClose}
    >
      <div className="container mega-grid">
        {currentItems.length > 0 ? (
          currentItems.map((item, idx) => (
            <div key={idx} className="mega-card">
              <div className="card-img">
                <img src={getProductImage(activeCategory, idx)} alt={item.title} />
                <div className="overlay"></div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">{t('megamenu.selectCategory')}</div>
        )}
      </div>

      <style jsx>{`
        .mega-menu-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          border-top: 1px solid #eee;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
          z-index: 100;
          pointer-events: none;
          visibility: hidden;
        }

        .mega-menu-overlay.active {
          pointer-events: auto;
          visibility: visible;
        }

        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 60px 40px;
        }

        .mega-card {
           group: true;
           cursor: pointer;
        }

        .card-img {
            height: 200px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            margin-bottom: 20px;
        }

        .card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .mega-card:hover .card-img img {
            transform: scale(1.1);
        }

        .card-content h3 {
            font-size: 18px;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 8px;
        }

        .card-content p {
            font-size: 14px;
            color: var(--color-text-muted);
            line-height: 1.6;
            margin-bottom: 16px;
        }

      `}</style>
    </motion.div>
  )
}

export default MegaMenu
