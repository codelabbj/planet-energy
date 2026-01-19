import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import heroImg from '../assets/cable-article-hero.png'
import '../styles/CableNews.css'

const CableNews = () => {
    const { t } = useLanguage()
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="cable-news-page"
        >
            <div className="article-container">
                <div className="article-breadcrumbs">
                    <Link to="/">{t('nav.home')}</Link>
                    <span>/</span>
                    <Link to="/news">{t('cableArticle.breadcrumb')}</Link>
                </div>

                <h1 className="article-title">{t('cableArticle.title')}</h1>
                <p className="article-intro">{t('cableArticle.intro')}</p>

                <div className="article-hero">
                    <img src={heroImg} alt="Halogen-free cables" />
                </div>

                <div className="article-content">
                    <section className="article-section">
                        <h2>{t('cableArticle.section1.title')}</h2>
                        <p>{t('cableArticle.section1.content')}</p>
                        <div className="problem-box">
                            <p>{t('cableArticle.section1.problem')}</p>
                        </div>
                    </section>

                    <section className="article-section">
                        <h2>{t('cableArticle.section2.title')}</h2>
                        <p>{t('cableArticle.section2.content')}</p>
                        <div className="examples-grid">
                            {t('cableArticle.section2.examples').map((ex, idx) => (
                                <div key={idx} className="example-card">
                                    <h3>{ex.category}</h3>
                                    <p>{ex.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="article-section">
                        <h2>{t('cableArticle.designations.title')}</h2>
                        <p>{t('cableArticle.designations.intro')}</p>
                        <ul className="designations-list">
                            {t('cableArticle.designations.list').map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '20px', fontSize: '14px', fontStyle: 'italic' }}>
                            {t('cableArticle.designations.footer')}
                        </p>
                    </section>

                    <section className="article-section">
                        <h2>{t('cableArticle.norms.title')}</h2>
                        <ul className="norms-list">
                            {t('cableArticle.norms.list').map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="article-section">
                        <h2>{t('cableArticle.conclusion.title')}</h2>
                        <p>{t('cableArticle.conclusion.text')}</p>
                    </section>

                    <div className="article-footer">
                        <button className="btn-back" onClick={() => navigate(-1)}>
                            ← {t('cableArticle.back')}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CableNews
