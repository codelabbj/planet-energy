import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Briefcase, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import aboutHeroImg from '../assets/Au bureau.jpg.jpeg'

const About = () => {
    const { t } = useLanguage()

    return (
        <div className="corporate-page">

            {/* Header / Hero */}
            <section className="corporate-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-content-simple">
                        <span className="overline">{t('about.hero.overline')}</span>
                        <h1>{t('about.hero.title')}</h1>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="corp-text full-width">
                        <h2 className="section-title">{t('about.main.title')}</h2>
                        <div className="divider-line full-width"></div>
                        <p className="lead-text">
                            {t('about.main.description1')}
                        </p>
                        <p className="body-text">
                            {t('about.main.description2')}
                        </p>

                        <div className="stats-row">
                            <div className="stat">
                                <span className="val">25+</span>
                                <span className="lbl">{t('about.main.stats.years')}</span>
                            </div>
                            <div className="stat">
                                <span className="val">50+</span>
                                <span className="lbl">{t('about.main.stats.projects')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="team-header">
                        <h2>{t('about.leadership.title')}</h2>
                    </div>

                    <div className="team-list">
                        {/* Founder Card */}
                        <div className="leader-card">
                            <div className="leader-bio">
                                <h3>{t('about.leadership.founder.name')}</h3>
                                <span className="role">{t('about.leadership.founder.role')}</span>
                                <p>
                                    {t('about.leadership.founder.bio')}
                                </p>
                            </div>
                        </div>

                        {/* Executive Slots */}
                        <div className="exec-grid">
                            {[t('about.leadership.executives.technical'), t('about.leadership.executives.financial'), t('about.leadership.executives.legal')].map((role, i) => (
                                <div key={i} className="exec-slot">
                                    <div className="slot-icon"><Briefcase size={20} /></div>
                                    <h4>{role}</h4>
                                    <span>{t('about.leadership.executives.board')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .corporate-page {
                    background: white;
                    color: var(--color-text);
                    font-family: 'Outfit', sans-serif;
                }

                .corporate-hero {
                    background-image: url(${aboutHeroImg});
                    height: 100vh;
                    min-height: 800px;
                    display: flex;
                    align-items: center;
                    color: white;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    overflow: hidden;
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

                .hero-content-simple h1 {
                    font-size: 64px;
                    font-weight: 700;
                    line-height: 1.05;
                    margin-top: 12px;
                    text-shadow: 0 10px 30px rgba(0,0,0,0.45);
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
                
                .bg-white { background: #ffffff; }
                .bg-light { background: #f8fafc; }

                .corporate-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: start;
                }

                .corp-text.full-width {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .section-title {
                    font-size: 42px;
                    color: var(--color-primary);
                    line-height: 1.2;
                    margin-bottom: 32px;
                    font-weight: 700;
                    text-align: center;
                }

                .divider-line.full-width {
                    width: 100%;
                    height: 4px;
                    background: var(--color-accent);
                    margin-bottom: 32px;
                }
                
                .lead-text {
                    font-size: 20px;
                    color: #334155;
                    line-height: 1.6;
                    margin-bottom: 24px;
                    font-weight: 500;
                }
                
                .body-text {
                    font-size: 16px;
                    color: #64748b;
                    line-height: 1.7;
                    margin-bottom: 40px;
                }
                
                .stats-row {
                    display: flex;
                    gap: 60px;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 32px;
                }
                
                .val {
                    display: block;
                    font-size: 48px;
                    font-weight: 700;
                    color: var(--color-primary);
                    line-height: 1;
                }
                
                .lbl {
                    font-size: 13px;
                    color: #64748b;
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .corp-image-block {
                    position: relative;
                }
                
                .main-img {
                    width: 100%;
                    border-radius: 4px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .img-caption {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    background: white;
                    padding: 8px 16px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--color-primary);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }

                .team-header {
                    margin-bottom: 60px;
                }
                .team-header h2 {
                    font-size: 36px;
                    color: var(--color-primary);
                    font-weight: 700;
                }
                
                .leader-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    padding: 40px;
                    border-radius: 4px;
                    margin-bottom: 30px;
                    border-left: 4px solid var(--color-accent);
                }
                
                .leader-bio h3 {
                    font-size: 24px;
                    color: var(--color-primary);
                    margin-bottom: 4px;
                }
                
                .leader-bio .role {
                    color: var(--color-accent);
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 13px;
                    display: block;
                    margin-bottom: 16px;
                }
                
                .leader-bio p {
                    color: #475569;
                    line-height: 1.6;
                    max-width: 800px;
                }

                .exec-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                
                .exec-slot {
                    background: white;
                    padding: 30px;
                    border: 1px dashed #cbd5e1;
                    border-radius: 4px;
                    text-align: center;
                }
                
                .slot-icon {
                    color: #94a3b8;
                    margin-bottom: 16px;
                }
                
                .exec-slot h4 {
                    font-size: 16px;
                    color: var(--color-primary);
                    margin-bottom: 4px;
                }
                
                .exec-slot span {
                    font-size: 12px;
                    color: #94a3b8;
                    text-transform: uppercase;
                }

                @media (max-width: 1024px) {
                    .corporate-grid { grid-template-columns: 1fr; gap: 40px; }
                    .exec-grid { grid-template-columns: 1fr; }
                    .hero-content-simple h1 { font-size: 48px; }
                }
            `}</style>
        </div>
    )
}

export default About
