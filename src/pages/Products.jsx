import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { technicalCatalog } from '../data/technicalCatalog'
import TechnicalTable from '../components/TechnicalTable'
import { Zap, Activity, Cpu, Sliders } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Products = () => {
    const { t } = useLanguage()
    const [activeCategory, setActiveCategory] = useState('protection')

    const tabs = [
        { id: 'protection', label: t('products.tabs.protection'), icon: Zap },
        { id: 'switching', label: t('products.tabs.switching'), icon: Sliders },
        { id: 'control', label: t('products.tabs.control'), icon: Activity },
        { id: 'loaddrive', label: t('products.tabs.loaddrive'), icon: Cpu },
    ]

    return (
        <div className="product-page-corporate">
            {/* Header */}
            <section className="prod-header">
                <div className="container">
                    <span className="overline">{t('products.hero.overline')}</span>
                    <h1>{t('products.hero.title')}</h1>
                    <p>{t('products.hero.subtitle')}</p>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="tab-sticky-bar">
                <div className="container">
                    <div className="tab-list">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveCategory(tab.id)}
                                className={`tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
                            >
                                <tab.icon size={18} className="tab-icon" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <section className="catalog-content section-padding">
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="catalog-grid"
                        >
                            {activeCategory === 'protection' && (
                                <>
                                    <TechnicalTable title={t('products.categories.acb')} data={technicalCatalog.breakers.acb} />
                                    <TechnicalTable title={t('products.categories.mccb')} data={technicalCatalog.breakers.mccb} />
                                    <TechnicalTable title={t('products.categories.mcb')} data={technicalCatalog.breakers.mcb} />
                                </>
                            )}

                            {activeCategory === 'switching' && (
                                <>
                                    <TechnicalTable title={t('products.categories.contactors')} data={technicalCatalog.switching.contactors} />
                                    <TechnicalTable title={t('products.categories.overloadRelays')} data={technicalCatalog.switching.overloadRelays} />
                                </>
                            )}

                            {activeCategory === 'control' && (
                                <>
                                    <TechnicalTable title={t('products.categories.monitoring')} data={technicalCatalog.control.monitoring} />
                                    <TechnicalTable title={t('products.categories.timers')} data={technicalCatalog.control.timers} />
                                    <TechnicalTable title={t('products.categories.signaling')} data={technicalCatalog.control.signaling} />
                                </>
                            )}

                            {activeCategory === 'loaddrive' && (
                                <>
                                    <TechnicalTable title={t('products.categories.changeover')} data={technicalCatalog.loadBreak.changeover} />
                                    <TechnicalTable title={t('products.categories.superswitch')} data={technicalCatalog.loadBreak.superswitch} />
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <style jsx>{`
                .product-page-corporate {
                    background: #f8fafc;
                    min-height: 100vh;
                    font-family: 'Outfit', sans-serif;
                }

                .prod-header {
                    background: linear-gradient(135deg, rgba(0, 31, 53, 0.85) 0%, rgba(15, 51, 85, 0.85) 100%),
                                url('https://images.unsplash.com/photo-1581092161562-40038e57e238?auto=format&fit=crop&q=80&w=1400') center/cover;
                    background-attachment: fixed;
                    color: white;
                    padding: 140px 0 120px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .prod-header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -30%;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 100% 50%, rgba(3, 102, 214, 0.1) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .prod-header .container {
                    position: relative;
                    z-index: 2;
                }
                
                .prod-header h1 {
                    color: #fff;
                    font-size: 56px;
                    font-weight: 700;
                    margin: 16px 0;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                
                .prod-header p {
                    font-size: 18px;
                    color: rgba(255,255,255,0.85);
                    max-width: 600px;
                    margin: 0 auto;
                    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
                }
                
                .overline {
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 2px;
                    font-size: 13px;
                }

                .tab-sticky-bar {
                    background: white;
                    border-bottom: 1px solid #e2e8f0;
                    position: sticky;
                    top: 80px; /* Adjust based on navbar height */
                    z-index: 10;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }
                
                .tab-list {
                    display: flex;
                    justify-content: center;
                    gap: 40px;
                }
                
                .tab-btn {
                    background: none;
                    border: none;
                    padding: 24px 0;
                    font-size: 15px;
                    font-weight: 600;
                    color: #64748b;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    position: relative;
                    font-family: 'Outfit', sans-serif;
                    transition: color 0.2s;
                }
                
                .tab-btn:hover {
                    color: var(--color-primary);
                }
                
                .tab-btn.active {
                    color: var(--color-primary);
                }
                
                .tab-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--color-accent);
                    border-radius: 3px 3px 0 0;
                }

                .catalog-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    min-height: 400px; /* Prevent jump */
                }

                @media (max-width: 1024px) {
                    .catalog-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .catalog-grid { grid-template-columns: 1fr; }
                    .tab-list { overflow-x: auto; justify-content: flex-start; padding: 0 20px; gap: 30px; }
                    .tab-btn { white-space: nowrap; padding: 20px 0; }
                }
            `}</style>
        </div>
    )
}

export default Products
