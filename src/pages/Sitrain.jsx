import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Monitor, MapPin, GraduationCap, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Sitrain = () => {
    const { t } = useLanguage()
    return (
        <div className="sitrain-page">
            <section className="sitrain-hero" style={{
                backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.4))`,
                backgroundColor: '#0a192f',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container hero-inner">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hero-content-academy"
                    >
                        <span className="academy-badge">{t('sitrain.hero.badge')}</span>
                        <h1>{t('sitrain.hero.title')}</h1>
                        <p>{t('sitrain.hero.subtitle')}</p>
                        <button className="btn-primary">{t('sitrain.hero.button')} <ChevronRight size={18} /></button>
                    </motion.div>
                </div>
            </section>

            <section className="academy-features section-padding">
                <div className="container">
                    <div className="features-grid-luxury">
                        <div className="feature-academy glass-card">
                            <Monitor size={32} />
                            <h3>{t('sitrain.features.digitalFormats.title')}</h3>
                            <p>{t('sitrain.features.digitalFormats.description')}</p>
                        </div>
                        <div className="feature-academy glass-card">
                            <BookOpen size={32} />
                            <h3>{t('sitrain.features.tsdcKalwa.title')}</h3>
                            <p>{t('sitrain.features.tsdcKalwa.description')}</p>
                        </div>
                        <div className="feature-academy glass-card">
                            <GraduationCap size={32} />
                            <h3>{t('sitrain.features.certifiedMastery.title')}</h3>
                            <p>{t('sitrain.features.certifiedMastery.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="locations-academy bg-light section-padding">
                <div className="container">
                    <div className="section-header-center">
                        <h2>{t('sitrain.locations.title')}</h2>
                        <p>{t('sitrain.locations.subtitle')}</p>
                    </div>
                    <div className="academy-map-list">
                        {[t('sitrain.locations.centers.kalwa'), t('sitrain.locations.centers.noida'), t('sitrain.locations.centers.coimbatore'), t('sitrain.locations.centers.panchakula'), t('sitrain.locations.centers.kolkata')].map(loc => (
                            <div key={loc} className="academy-loc-item">
                                <MapPin size={20} className="pin-icon" />
                                <span>{loc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .sitrain-page { background: white; }
        .sitrain-hero {
          height: 80vh;
          display: flex;
          align-items: center;
          color: white;
          padding-top: 100px;
        }

        .academy-badge {
           color: var(--color-accent);
           font-weight: 800;
           letter-spacing: 4px;
           font-size: 13px;
        }

        .hero-content-academy h1 {
           font-size: 84px;
           margin: 20px 0;
           line-height: 1;
           font-family: 'Syne';
        }

        .hero-content-academy p {
           font-size: 22px;
           max-width: 600px;
           color: rgba(255,255,255,0.7);
           margin-bottom: 40px;
        }

        .features-grid-luxury {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 40px;
           margin-top: -100px;
        }

        .feature-academy {
           padding: 40px;
           background: white;
           border-bottom: 4px solid var(--color-accent);
           box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .feature-academy :global(svg) { color: var(--color-accent); margin-bottom: 24px; }
        .feature-academy h3 { font-size: 24px; margin-bottom: 16px; color: var(--color-primary); }
        .feature-academy p { color: var(--color-text-muted); font-weight: 500; font-size: 15px; }

        .bg-light { background: #f8fafc; }
        .section-header-center { text-align: center; margin-bottom: 60px; color: var(--color-primary); }
        .section-header-center h2 { font-size: 40px; font-family: 'Syne'; }

        .academy-map-list {
           display: flex;
           justify-content: center;
           gap: 40px;
           flex-wrap: wrap;
        }

        .academy-loc-item {
           display: flex;
           align-items: center;
           gap: 12px;
           font-weight: 700;
           font-size: 18px;
           color: var(--color-primary);
        }

        .pin-icon { color: var(--color-accent); }

        @media (max-width: 992px) {
           .hero-content-academy h1 { font-size: 50px; }
           .features-grid-luxury { grid-template-columns: 1fr; margin-top: 40px; }
        }
      `}</style>
        </div>
    )
}

export default Sitrain
