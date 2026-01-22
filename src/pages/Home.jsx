import React from 'react'
import Hero from '../components/Hero'
import NetworkAtlas from '../components/NetworkAtlas'
import Partners from '../components/Partners'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
    const { t } = useLanguage()
    return (
        <div className="home-page">
            <Hero />
            <div className="accueil-divider"></div>

            {/* Accueil Section - Full Width Title */}
            <section className="accueil-section">
                <div className="container">
                    <div className="accueil-content-centered">
                        <h2 className="accueil-title-full">
                            {t('home.accueil.title')}
                        </h2>
                        <div className="accueil-divider-full"></div>
                    </div>
                </div>
            </section>

            <div className="accueil-divider"></div>


            {/* Corporate Intro Section */}
            <section className="corporate-intro">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text-column">
                            <span className="overline">{t('home.intro.overline')}</span>
                            <h2 className="section-title-corporate">{t('home.intro.title')}</h2>
                            <p className="intro-description">
                                {t('home.intro.description')}
                            </p>

                            <div className="corporate-stats-row">
                                <div className="stat-item">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">{t('home.intro.stats.years')}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">3</span>
                                    <span className="stat-label">{t('home.intro.stats.countries')}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">{t('home.intro.stats.support')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="intro-image-block">
                            <div className="reach-map-container">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png"
                                    alt="Global Map"
                                    className="map-graphic"
                                    style={{ opacity: 0.1 }}
                                />
                                <div className="map-dots">
                                    <div className="map-dot" style={{ top: '30%', left: '48%' }} title="Germany"></div>
                                    <div className="map-dot" style={{ top: '55%', left: '48%' }} title="Benin"></div>
                                    <div className="map-dot" style={{ top: '58%', left: '52%' }} title="Ghana"></div>
                                    <div className="map-dot" style={{ top: '45%', left: '70%' }} title="India"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="accueil-divider-full"></div>

            <style jsx>{`
                .accueil-section {
                    padding: 60px 0;
                    background: #fff;
                }
                
                .accueil-content-centered {
                    text-align: left;
                    width: 100%;
                }
                
                .accueil-title-full {
                    font-family: 'Outfit', sans-serif;
                    font-size: 32px;
                    color: var(--color-primary);
                    margin: 0;
                    padding-bottom: 20px;
                    width: 100%;
                    line-height: 1.3;
                    font-weight: 600;
                }
                
                .accueil-divider-full {
                    height: 4px;
                    background: var(--color-accent);
                    width: 100%;
                    border-radius: 2px;
                }
                
                .accueil-divider {
                    height: 1px;
                    background: rgba(0,0,0,0.1);
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .intro-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    padding: 80px 0;
                }
                
                .corporate-intro {
                    padding-top: 100px;
                }
                
                .overline {
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
                
                .intro-description {
                    font-size: 18px;
                    line-height: 1.7;
                    color: var(--color-text-light);
                    margin-bottom: 48px;
                    white-space: pre-line;
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
                    border-radius: 4px;
                    position: relative;
                    z-index: 2;
                    background: #f8f9fa;
                    padding: 20px;
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

                .reach-map-container {
                    position: relative;
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                }
                
                .map-graphic {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                .map-dots {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                
                .map-dot {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: var(--color-accent);
                    border-radius: 50%;
                    box-shadow: 0 0 15px var(--color-accent);
                }
                
                /* Split Layout Styles */
                .split-layout {
                    display: flex;
                    align-items: center;
                    gap: 80px;
                    padding: 80px 0;
                }
                
                .split-layout.reverse {
                    flex-direction: row-reverse;
                }
                
                .split-image {
                    flex: 1;
                    position: relative;
                }
                
                .feature-img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 4px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .split-content {
                    flex: 1;
                }
                
                .split-description {
                    font-size: 18px;
                    line-height: 1.7;
                    color: var(--color-text);
                    white-space: pre-line;
                }

                @media (max-width: 1024px) {
                    .intro-grid, .split-layout {
                        grid-template-columns: 1fr;
                        flex-direction: column;
                        gap: 40px;
                    }
                    .split-layout.reverse {
                        flex-direction: column;
                    }
                    .feature-img {
                        height: 300px;
                    }
                    .accueil-title-full {
                        white-space: normal;
                    }
                }
            `}</style>


            {/* Connection International Section */}
            <section className="connection-section">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-image">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="International Partnership"
                                className="feature-img"
                            />
                        </div>
                        <div className="split-content">
                            <span className="overline">{t('home.connection.overline')}</span>
                            <h2 className="section-title-corporate">{t('home.connection.title')}</h2>
                            <p className="split-description">
                                {t('home.connection.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="accueil-divider-full"></div>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-content">
                            <span className="overline">{t('home.mission.overline')}</span>
                            <h2 className="section-title-corporate">{t('home.mission.title')}</h2>
                            <p className="split-description">
                                {t('home.mission.description')}
                            </p>
                        </div>
                        <div className="split-image">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                alt="Sustainable Mission"
                                className="feature-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="accueil-divider-full"></div>

            <Partners />
            {/* NetworkAtlas removed as it's redundant with the cleaner Global Reach section for simple home page */}

        </div>
    )
}

export default Home
