import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Legal = () => {
    const { t } = useLanguage()
    const sections = t('legal.impressum.sections')
    const sectionKeys = ['generalTerms', 'legalMentions', 'serviceAccess', 'intellectualProperty', 'personalData', 'contentResponsibility', 'linkResponsibility', 'copyright']

    return (
        <div className="legal-page">
            {/* Hero Section */}
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <h1>{t('legal.impressum.title')}</h1>
                        <p>Last Updated: January 2026</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="legal-content section-padding">
                <div className="container">
                    <div className="legal-wrapper">
                        {sectionKeys.map((key, index) => {
                            const section = sections[key]
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="legal-section"
                                >
                                    <h2 className="section-heading">{section.heading}</h2>
                                    {section.subheading && (
                                        <h3 className="section-subheading">{section.subheading}</h3>
                                    )}
                                    <div className="section-content">
                                        {section.content.split('\n').map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .legal-page {
                    background: #fff;
                }

                .legal-hero {
                    background: linear-gradient(135deg, #001f35 0%, #0f3355 100%);
                    min-height: 80vh;
                    margin-top: 108px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .legal-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.1), transparent);
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                }

                .legal-hero h1 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                    letter-spacing: -0.5px;
                }

                .legal-hero p {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin-top: 16px;
                }

                .legal-content {
                    padding: 100px 20px;
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .legal-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 80px;
                }

                .legal-section {
                    line-height: 1.9;
                }

                .section-heading {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #001f35;
                    margin: 0 0 16px 0;
                    padding-bottom: 16px;
                    border-bottom: 3px solid #0f9b8a;
                }

                .section-subheading {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #0f3355;
                    margin: 20px 0 16px 0;
                }

                .section-content {
                    margin-top: 20px;
                }

                .section-content p {
                    font-size: 1rem;
                    color: #333;
                    margin: 16px 0;
                    text-align: justify;
                    line-height: 1.9;
                }

                .section-content p:first-child {
                    margin-top: 0;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .legal-hero {
                        padding: 70px 20px;
                    }

                    .legal-hero h1 {
                        font-size: 2.2rem;
                    }

                    .legal-hero p {
                        font-size: 0.95rem;
                        margin-top: 14px;
                    }

                    .legal-content {
                        padding: 70px 20px;
                    }

                    .legal-wrapper {
                        gap: 60px;
                    }

                    .section-heading {
                        font-size: 1.6rem;
                    }

                    .section-subheading {
                        font-size: 1.2rem;
                    }

                    .section-content p {
                        font-size: 0.95rem;
                        text-align: left;
                        margin: 14px 0;
                    }

                    .container {
                        padding: 0 15px;
                    }
                }

                @media (max-width: 480px) {
                    .legal-hero {
                        padding: 50px 15px;
                    }

                    .legal-hero h1 {
                        font-size: 1.6rem;
                    }

                    .legal-hero p {
                        font-size: 0.9rem;
                        margin-top: 12px;
                    }

                    .legal-content {
                        padding: 50px 15px;
                    }

                    .legal-wrapper {
                        gap: 45px;
                    }

                    .section-heading {
                        font-size: 1.3rem;
                        margin-bottom: 14px;
                        padding-bottom: 12px;
                    }

                    .section-subheading {
                        font-size: 1.1rem;
                        margin: 16px 0 12px 0;
                    }

                    .section-content p {
                        font-size: 0.9rem;
                        margin: 12px 0;
                    }

                    .container {
                        padding: 0 10px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Legal
