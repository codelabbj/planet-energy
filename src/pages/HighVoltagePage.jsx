import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'
import heroBg from '../assets/Haute tension.jpg.jpeg'

const HighVoltagePage = () => {
    const { t } = useLanguage()

    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            {t('hv.hero.title')}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <section className="section-padding text-center">
                <div className="container">
                    <h2 className="status-title">{t('hv.status.title')}</h2>
                    <div className="divider-center"></div>
                    <p className="status-text">{t('hv.status.text')}</p>
                </div>
            </section>

            <style jsx>{`
                .page-hero {
                    height: 100vh;
                    min-height: 600px;
                    background-image: url(${heroBg});
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: left;
                    width: 100%;
                }

                .hero-title {
                    color: white;
                    font-size: 3.8rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: -1px;
                    line-height: 1.1;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                    text-shadow: 0 4px 12px rgba(0,0,0,0.4);
                }

                .status-title {
                    font-size: 2.5rem;
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-bottom: 24px;
                    font-family: 'Outfit', sans-serif;
                }

                .divider-center {
                    width: 80px;
                    height: 4px;
                    background: var(--color-accent);
                    margin: 0 auto 32px;
                }

                .status-text {
                    font-size: 1.2rem;
                    color: #555;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                @media (max-width: 992px) {
                    .page-hero {
                        height: 60vh;
                        min-height: 500px;
                    }
                    
                    .hero-title {
                        font-size: 2.2rem;
                        padding: 0 20px;
                    }
                }
            `}</style>
        </div>
    )
}

export default HighVoltagePage
