import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Activity } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import opsHeroImg from '../assets/Monitoring.jpg.jpeg'
import engineerImg from '../assets/MaintenanceEngineer.png'

const Operations = () => {
    const { t } = useLanguage()
    return (
        <div className="operations-page">
            {/* Hero Section */}
            <section className="ops-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="overline">{t('operations.hero.overline')}</span>
                    <h1>{t('operations.hero.title')}</h1>
                    <p>{t('operations.hero.subtitle')}</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container ops-grid">

                    {/* Left: Text Content */}
                    <div className="ops-content">
                        <h2 className="section-title">{t('operations.main.title')} <span className="text-accent">{t('operations.main.titleAccent')}</span></h2>
                        <p className="lead-text">
                            {t('operations.main.description1')}
                        </p>
                        <p className="body-text">
                            {t('operations.main.description2')}
                        </p>

                        <div className="service-list">
                            <div className="s-item">
                                <ShieldCheck size={24} className="s-icon" />
                                <div className="s-text">
                                    <h4>{t('operations.main.services.security.title')}</h4>
                                    <p>{t('operations.main.services.security.description')}</p>
                                </div>
                            </div>
                            <div className="s-item">
                                <Activity size={24} className="s-icon" />
                                <div className="s-text">
                                    <h4>{t('operations.main.services.performance.title')}</h4>
                                    <p>{t('operations.main.services.performance.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature Image/Card */}
                    <div className="ops-visual">
                        <div className="visual-card">
                            <img
                                src={engineerImg}
                                alt="Maintenance Engineer"
                                className="ops-img"
                            />
                            <div className="scada-overlay">
                                <div className="scada-header">
                                    <span className="dot"></span>
                                    <span>{t('operations.scada.header')}</span>
                                </div>
                                <div className="scada-grid">
                                    <div className="m-metric">
                                        <span className="lbl">{t('operations.scada.metrics.voltage')}</span>
                                        <span className="val">230.4 V</span>
                                    </div>
                                    <div className="m-metric">
                                        <span className="lbl">{t('operations.scada.metrics.load')}</span>
                                        <span className="val">84%</span>
                                    </div>
                                    <div className="m-metric">
                                        <span className="lbl">{t('operations.scada.metrics.status')}</span>
                                        <span className="val ok">{t('operations.scada.metrics.optimal')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <style jsx>{`
                .operations-page {
                    background: white;
                    color: var(--color-text);
                    font-family: 'Outfit', sans-serif;
                    min-height: 100vh;
                }

                .ops-hero {
                    background-image: url(${opsHeroImg});
                    color: white;
                    min-height: 80vh;
                    margin-top: 108px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(0, 31, 53, 0.72), rgba(15, 51, 85, 0.42));
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                }

                .ops-hero h1 {
                    font-size: 60px;
                    font-weight: 700;
                    margin: 12px 0;
                    line-height: 1.05;
                    text-shadow: 0 8px 24px rgba(0,0,0,0.4);
                }

                .ops-hero p {
                    font-size: 18px;
                    color: rgba(255,255,255,0.9);
                    max-width: 680px;
                    margin: 0 auto;
                }
                
                .overline {
                    display: inline-block;
                    background: rgba(255,255,255,0.06);
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 12px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    text-transform: uppercase;
                }

                .ops-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .section-title {
                    font-size: 42px;
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-bottom: 32px;
                    line-height: 1.2;
                }
                
                .text-accent { color: var(--color-accent); }

                .lead-text {
                    font-size: 20px;
                    color: #1e293b;
                    margin-bottom: 24px;
                    line-height: 1.6;
                    font-weight: 500;
                }
                
                .body-text {
                    font-size: 16px;
                    color: #64748b;
                    margin-bottom: 40px;
                    line-height: 1.7;
                }

                .service-list {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
                
                .s-item {
                    display: flex;
                    gap: 20px;
                    background: #f8fafc;
                    padding: 24px;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                }
                
                .s-icon {
                    color: var(--color-accent);
                    margin-top: 4px;
                }
                
                .s-text h4 {
                    font-size: 18px;
                    color: var(--color-primary);
                    margin-bottom: 4px;
                    font-weight: 700;
                }
                
                .s-text p {
                    font-size: 14px;
                    color: #64748b;
                    margin: 0;
                }

                .visual-card {
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .ops-img {
                    width: 100%;
                    display: block;
                }
                
                .scada-overlay {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    left: 20px;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                    padding: 20px;
                    border-radius: 4px;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .scada-header {
                     display: flex;
                     align-items: center;
                     gap: 8px;
                     color: #4ade80;
                     font-size: 11px;
                     font-weight: 700;
                     letter-spacing: 1px;
                     margin-bottom: 16px;
                     border-bottom: 1px solid rgba(255,255,255,0.1);
                     padding-bottom: 8px;
                }
                
                .dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; box-shadow: 0 0 8px #4ade80; }
                
                .scada-grid {
                    display: flex;
                    justify-content: space-between;
                }
                
                .m-metric {
                    display: flex;
                    flex-direction: column;
                }
                
                .lbl { font-size: 10px; color: #94a3b8; text-transform: uppercase; margin-bottom: 2px; }
                .val { font-size: 16px; color: white; font-weight: 700; font-family: monospace; }
                .val.ok { color: #4ade80; }

                @media (max-width: 1024px) {
                    .ops-grid { grid-template-columns: 1fr; gap: 50px; }
                }
            `}</style>
        </div>
    )
}

export default Operations
