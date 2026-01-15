import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Activity, Zap, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const ProductShowcase = () => {
  const { t } = useLanguage()
  const [activeSet, setActiveSet] = useState(0)

  // Get product sets from translations and add images
  const baseProducts = t('productShowcase.sets')
  const productSets = [
    {
      ...baseProducts[0],
      items: baseProducts[0].items.map((item, idx) => ({
        ...item,
        img: idx === 0 ? 'src/assets/acb.jpg' : idx === 1 ? 'src/assets/mccb.jpg' : 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600'
      }))
    },
    {
      ...baseProducts[1],
      items: baseProducts[1].items.map((item, idx) => ({
        ...item,
        img: idx === 0 ? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600' : idx === 1 ? 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600' : 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600'
      }))
    }
  ]

  return (
    <section className="product-showcase-corporate section-padding">
      <div className="container">

        <div className="showcase-header">
          <div className="header-left">
            <span className="overline-light">{t('productShowcase.overline')}</span>
            <h2 className="title-light">{t('productShowcase.title')}</h2>
          </div>

          <div className="header-controls">
            {productSets.map((set, i) => (
              <button
                key={i}
                className={`tab-btn ${activeSet === i ? 'active' : ''}`}
                onClick={() => setActiveSet(i)}
              >
                {set.category}
              </button>
            ))}
          </div>
        </div>

        <div className="showcase-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSet}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="products-grid"
            >
              {productSets[activeSet].items.map((item, idx) => (
                <div key={idx} className="project-card">
                  <div className="card-bg">
                    <img src={item.img} alt={item.name} />
                    <div className="card-overlay"></div>
                  </div>
                  <div className="card-info">
                    <span className="card-spec">{item.spec}</span>
                    <h3>{item.name}</h3>
                    <div className="card-hover-detail">
                      <div className="divider-w"></div>
                      <p>{item.detail}</p>
                      <span className="view-link">{t('productShowcase.viewProduct')} <ArrowRight size={16} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .product-showcase-corporate {
          background: #002b49; /* Deep Corporate Navy */
          color: white;
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .showcase-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-end;
           margin-bottom: 60px;
           border-bottom: 1px solid rgba(255,255,255,0.1);
           padding-bottom: 40px;
        }

        .overline-light {
           color: var(--color-accent);
           font-weight: 700;
           font-size: 13px;
           letter-spacing: 2px;
           display: block;
           margin-bottom: 16px;
           font-family: 'Outfit', sans-serif;
           text-transform: uppercase;
        }

        .title-light {
           font-family: 'Outfit', sans-serif;
           font-size: 48px;
           font-weight: 700;
           line-height: 1.1;
           color: white;
        }

        .header-controls {
           display: flex;
           gap: 32px;
        }

        .tab-btn {
           background: transparent;
           border: none;
           color: rgba(255,255,255,0.6);
           font-size: 16px;
           font-weight: 600;
           padding-bottom: 10px;
           cursor: pointer;
           transition: all 0.3s;
           font-family: 'Outfit', sans-serif;
           position: relative;
        }

        .tab-btn:hover {
           color: white;
        }

        .tab-btn.active {
           color: white;
        }
        
        .tab-btn.active::after {
           content: '';
           position: absolute;
           bottom: -41px; /* Align with border-bottom of header */
           left: 0;
           width: 100%;
           height: 3px;
           background: var(--color-accent);
        }

        .products-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 30px;
        }

        .project-card {
           position: relative;
           height: 450px;
           border-radius: 4px;
           overflow: hidden;
           cursor: pointer;
           group: true;
           background: #001f35;
        }

        .card-bg {
           position: absolute;
           inset: 0;
        }
        
        .card-bg img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.6s ease;
        }
        
        .project-card:hover .card-bg img {
           transform: scale(1.05);
        }

        .card-overlay {
           position: absolute;
           inset: 0;
           background: linear-gradient(to top, rgba(0, 43, 73, 0.95), rgba(0, 43, 73, 0.4) 60%, transparent);
        }

        .card-info {
           position: relative;
           z-index: 2;
           height: 100%;
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           padding: 32px;
        }

        .card-spec {
           color: var(--color-accent);
           font-size: 12px;
           font-weight: 700;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-bottom: 8px;
        }

        .card-info h3 {
           font-family: 'Outfit', sans-serif;
           font-size: 24px;
           font-weight: 600;
           color: white;
           margin-bottom: 0;
           transition: transform 0.4s;
        }

        .card-hover-detail {
           max-height: 0;
           overflow: hidden;
           transition: max-height 0.4s ease, opacity 0.4s;
           opacity: 0;
        }

        .project-card:hover .card-hover-detail {
           max-height: 100px;
           opacity: 1;
        }
        
        .project-card:hover h3 {
           transform: translateY(-10px);
        }

        .divider-w {
           width: 40px;
           height: 1px;
           background: rgba(255,255,255,0.3);
           margin: 16px 0;
        }
        
        .card-hover-detail p {
           font-size: 14px;
           color: rgba(255,255,255,0.8);
           margin-bottom: 12px;
        }
        
        .view-link {
           display: flex;
           align-items: center;
           gap: 8px;
           font-size: 13px;
           font-weight: 700;
           color: white;
        }

        @media (max-width: 1024px) {
           .showcase-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 30px;
           }
           .products-grid {
              grid-template-columns: 1fr;
           }
           .project-card {
              height: 350px;
           }
        }
      `}</style>
    </section>
  )
}

export default ProductShowcase
