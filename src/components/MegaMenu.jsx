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
    const item = currentItems[index];
    return resolveImagePath(item?.img || "");
  }

  // Check if it's the specific "cables" category for full-screen redesign
  const isCables = activeCategory === 'cables';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`mega-menu-overlay ${isOpen ? 'active' : ''} ${isCables ? 'cables-special' : ''}`}
      onMouseLeave={onClose}
    >
      {isCables && currentItems.length > 0 ? (
        <div className="cables-fullscreen">
          <img src={getProductImage('cables', 0)} alt="Cables" className="bg-image" />
          <div className="content-overlay">
            <div className="top-right-text">
              {currentItems[0].title}
            </div>
            <div className="center-bottom-content">
              <h2 className="promo-text">{currentItems[0].promo}</h2>
              <p className="description-text">{currentItems[0].desc}</p>
            </div>
          </div>
        </div>
      ) : (
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
      )}

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

        /* Full width for single item categories */
        .mega-grid:has(.mega-card:only-child) {
          grid-template-columns: 1fr;
        }

        .mega-card {
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

        /* Cables Special Redesign */
        .cables-special {
          background: #000;
          border-top: none;
        }

        .cables-fullscreen {
          position: relative;
          width: 100%;
          height: calc(100vh - 80px); /* Covers the rest of the screen below the navbar */
          overflow: hidden;
        }

        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .content-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          padding: 80px 10%;
        }

        .top-right-text {
          position: absolute;
          top: 60px;
          left: 10%; /* Changed from right 60px to left 10% */
          color: white;
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          max-width: 600px;
          text-align: left;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        /* Decorative line under title */
        .top-right-text::after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: var(--color-primary);
          margin-top: 20px;
        }

        .center-bottom-content {
          margin-top: auto;
          text-align: center;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 60px;
        }

        .promo-text {
          color: var(--color-primary);
          font-family: 'Outfit', sans-serif;
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 24px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .description-text {
          color: #ffffff;
          font-size: 20px;
          line-height: 1.6;
          max-width: 1000px;
          margin: 0 auto;
          font-weight: 400;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .cables-fullscreen { height: 100vh; }
          .top-right-text { font-size: 24px; top: 40px; left: 5%; }
          .promo-text { font-size: 22px; }
          .description-text { font-size: 16px; }
          .content-overlay { padding: 40px 5%; }
        }
      `}</style>
    </motion.div>
  )
}

export default MegaMenu
