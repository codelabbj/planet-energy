import React from 'react'
import Hero from '../components/Hero'
import ProductShowcase from '../components/ProductShowcase'
import CompatibilityTool from '../components/CompatibilityTool'
import NetworkAtlas from '../components/NetworkAtlas'
import Partners from '../components/Partners'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
    const { t } = useLanguage()
    return (
        <div className="home-page">
            <Hero />

            {/* Accueil / Welcome Section */}
            <section className="accueil-section section-padding">
                <div className="container">
                    <div className="accueil-content">
                        <h2 className="accueil-title">{t('home.accueil.title')}</h2>
                        <div className="accueil-divider"></div>
                        <p className="accueil-text">
                            {t('home.accueil.description1')}
                        </p>
                        <p className="accueil-text">
                            {t('home.accueil.description2')}
                        </p>
                        <p className="accueil-text">
                            {t('home.accueil.description3')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Corporate Intro / Stats Section */}
            <section className="intro-corporate section-padding">
                <div className="container intro-grid">
                    <div className="intro-text">
                        <span className="overline-corporate">{t('home.intro.overline')}</span>
                        <h2 className="section-title-corporate">{t('home.intro.title')}</h2>
                        <p className="intro-desc">
                            {t('home.intro.description')}
                        </p>

                        <div className="corporate-stats-row">
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">{t('home.intro.stats.years')}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5GW</span>
                                <span className="stat-label">{t('home.intro.stats.power')}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">15</span>
                                <span className="stat-label">{t('home.intro.stats.offices')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="intro-image-block">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                            alt="Corporate Office"
                            className="corp-img-main"
                        />
                        <div className="corp-img-accent"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .accueil-section {
                    background: linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%);
                    color: var(--color-text);
                }
                
                .accueil-content {
                    max-width: 900px;
                    margin: 0 auto;
                }
                
                .accueil-title {
                    font-size: 42px;
                    font-weight: 700;
                    color: var(--color-primary);
                    line-height: 1.3;
                    margin-bottom: 32px;
                    font-family: 'Outfit', sans-serif;
                }
                
                .accueil-divider {
                    width: 80px;
                    height: 4px;
                    background: var(--color-accent);
                    margin-bottom: 32px;
                    border-radius: 2px;
                }
                
                .accueil-text {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #475569;
                    margin-bottom: 24px;
                    font-weight: 500;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
                
                .accueil-text:last-child {
                    margin-bottom: 0;
                }
                
                @media (max-width: 768px) {
                    .accueil-title {
                        font-size: 32px;
                    }
                    .accueil-text {
                        font-size: 15px;
                    }
                }

                .intro-corporate {
                    background-color: var(--color-bg); /* White/Light background */
                    color: var(--color-text);
                }
                
                .intro-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }
                
                .intro-text {
                    max-width: 600px;
                }
                
                .overline-corporate {
                    color: var(--color-accent);
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 24px;
                    font-family: 'Outfit', sans-serif;
                }
                
                .section-title-corporate {
                    font-family: 'Outfit', sans-serif;
                    font-size: 48px;
                    line-height: 1.1;
                    color: var(--color-primary);
                    margin-bottom: 32px;
                    font-weight: 700;
                }
                
                .intro-desc {
                    font-size: 18px;
                    line-height: 1.7;
                    color: var(--color-text-light); /* Dark grey */
                    margin-bottom: 48px;
                }
                
                .corporate-stats-row {
                    display: flex;
                    gap: 48px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    padding-top: 40px;
                }
                
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                
                .stat-number {
                    font-family: 'Outfit', sans-serif;
                    font-size: 42px;
                    font-weight: 700;
                    color: var(--color-primary);
                    line-height: 1;
                }
                
                .stat-label {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .intro-image-block {
                    position: relative;
                }
                
                .corp-img-main {
                    width: 100%;
                    border-radius: 4px; /* Slight round, mostly square corporate */
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .corp-img-accent {
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--color-accent);
                    z-index: 1;
                    border-radius: 4px;
                }
                
                @media (max-width: 1024px) {
                    .intro-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }
                    .section-title-corporate {
                        font-size: 36px;
                    }
                    .corporate-stats-row {
                        gap: 24px;
                    }
                }
            `}</style>


            <ProductShowcase />

            {/* Global Reach Section - Light Theme */}
            <section className="global-reach-corporate">
                <div className="container">
                    <div className="reach-grid">
                        <div className="reach-content">
                            <span className="overline-dark">{t('home.reach.overline')}</span>
                            <h2 className="title-dark">{t('home.reach.title')}</h2>
                            <p className="reach-desc">
                                {t('home.reach.description')}
                            </p>

                            <div className="reach-stats">
                                <div className="r-stat">
                                    <span className="r-val">3</span>
                                    <span className="r-label">{t('home.reach.stats.continents')}</span>
                                </div>
                                <div className="r-stat">
                                    <span className="r-val">12+</span>
                                    <span className="r-label">{t('home.reach.stats.hubs')}</span>
                                </div>
                                <div className="r-stat">
                                    <span className="r-val" style={{ color: 'var(--color-accent)' }}>24/7</span>
                                    <span className="r-label">{t('home.reach.stats.support')}</span>
                                </div>
                            </div>

                            <button className="btn-link-dark">
                                {t('home.reach.button')} <span className="arrow">→</span>
                            </button>
                        </div>

                        <div className="reach-map-container">
                            {/* Stylized Abstract Map - Placeholder or CSS visual */}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png"
                                alt="Global Map"
                                className="map-graphic"
                                style={{ opacity: 0.1 }}
                            />
                            <div className="map-dots">
                                {/* Example Hotspots */}
                                <div className="map-dot" style={{ top: '30%', left: '48%' }} title="Germany"></div>
                                <div className="map-dot" style={{ top: '55%', left: '48%' }} title="Benin"></div>
                                <div className="map-dot" style={{ top: '58%', left: '52%' }} title="Ghana"></div>
                                <div className="map-dot" style={{ top: '45%', left: '70%' }} title="India"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <CompatibilityTool /> */}

            <Partners />
            {/* NetworkAtlas removed as it's redundant with the cleaner Global Reach section for simple home page */}

            <style jsx>{`
                .global-reach-corporate {
                    background: #f4f4f5; /* Light Grey */
                    padding: 120px 0;
                    overflow: hidden;
                }
                
                .reach-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    align-items: center;
                }
                
                .overline-dark {
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 2px;
                    font-size: 13px;
                    display: block;
                    margin-bottom: 24px;
                    font-family: 'Outfit', sans-serif;
                }
                
                .title-dark {
                    font-family: 'Outfit', sans-serif;
                    font-size: 48px;
                    color: var(--color-primary);
                    line-height: 1.1;
                    margin-bottom: 32px;
                    font-weight: 700;
                }
                
                .reach-desc {
                    color: var(--color-text-light);
                    font-size: 18px;
                    margin-bottom: 48px;
                    max-width: 500px;
                    line-height: 1.6;
                }
                
                .reach-stats {
                    display: flex;
                    gap: 60px;
                    margin-bottom: 50px;
                }
                
                .r-val {
                    display: block;
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--color-primary);
                    font-family: 'Outfit', sans-serif;
                }
                
                .r-label {
                    font-size: 13px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 600;
                }
                
                .btn-link-dark {
                    background: none;
                    border: none;
                    padding: 0;
                    color: var(--color-primary);
                    font-weight: 700;
                    font-size: 16px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: gap 0.2s;
                    font-family: 'Outfit', sans-serif;
                }
                
                .btn-link-dark:hover {
                    gap: 16px;
                    color: var(--color-accent);
                }
                
                .reach-map-container {
                    position: relative;
                    height: 500px;
                }
                
                .map-graphic {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    filter: grayscale(100%);
                }
                
                .map-dot {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: var(--color-accent);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 0 4px rgba(255, 140, 0, 0.2);
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(255, 140, 0, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 140, 0, 0); }
                }

                @media (max-width: 1024px) {
                    .reach-grid {
                        grid-template-columns: 1fr;
                    }
                    .reach-map-container {
                        height: 300px;
                        order: -1; /* Map on top for mobile? Or stick to bottom. Let's keep distinct. */
                    }
                    .title-dark {
                        font-size: 36px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Home
