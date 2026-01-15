import React from 'react'
import { motion } from 'framer-motion'

import { useLanguage } from '../context/LanguageContext'

const Partners = () => {
    const { t } = useLanguage()
    const partners = [
        { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png' },
        { name: 'Helukabel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Helukabel_Logo.svg/1200px-Helukabel_Logo.svg.png' },
        { name: 'Rittal', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rittal_Logo.svg/1200px-Rittal_Logo.svg.png' },
       
    ]

    return (
        <section className="partners-section">
            <div className="container">
                <div className="partners-header">
                    <span className="overline">{t('partners.overline')}</span>
                    <h3>{t('partners.title')}</h3>
                </div>

                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className="partner-logo-box"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img src={partner.logo} alt={partner.name} className="p-logo" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .partners-section {
                    padding: 80px 0;
                    background: white;
                    border-top: 1px solid #f1f5f9;
                }

                .partners-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .overline {
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 2px;
                    font-size: 12px;
                    display: block;
                    margin-bottom: 12px;
                }

                .partners-header h3 {
                    font-size: 28px;
                    color: #1e293b;
                    font-weight: 700;
                    font-family: 'Outfit', sans-serif;
                }

                .partners-grid {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 60px;
                }

                .partner-logo-box {
                    width: 160px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    filter: grayscale(100%);
                    opacity: 0.6;
                    transition: all 0.3s ease;
                }

                .partner-logo-box:hover {
                    filter: grayscale(0%);
                    opacity: 1;
                    transform: scale(1.05);
                }
                
                .p-logo {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                @media (max-width: 768px) {
                    .partners-grid { gap: 40px; }
                    .partner-logo-box { width: 120px; }
                }
            `}</style>
        </section>
    )
}

export default Partners
