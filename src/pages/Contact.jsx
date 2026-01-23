import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
    const { t } = useLanguage()
    return (
        <div className="contact-page-corporate">
            {/* Header */}
            <section className="contact-hero">
                <div className="container">
                    <span className="overline">{t('contact.hero.overline')}</span>
                    <h1>{t('contact.hero.title')}</h1>
                    <p>{t('contact.hero.subtitle')}</p>
                </div>
            </section>

            {/* Main Section */}
            <section className="contact-content section-padding">
                <div className="container">
                    <div className="contact-grid">

                        {/* Left: Contact Info */}
                        <div className="info-column">
                            <h2 className="info-title">{t('contact.info.title')}</h2>
                            <p className="info-lead">
                                {t('contact.info.description')}
                            </p>

                            <div className="office-list">
                                <div className="office-item">
                                    <div className="icon-box"><MapPin size={20} /></div>
                                    <div className="details">
                                        <h4>{t('contact.offices.cotonou.name')}</h4>
                                        <p>{t('contact.offices.cotonou.description')}</p>
                                    </div>
                                </div>
                                <div className="office-item">
                                    <div className="icon-box"><MapPin size={20} /></div>
                                    <div className="details">
                                        <h4>{t('contact.offices.ghana.name')}</h4>
                                        <p>{t('contact.offices.ghana.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="direct-contact">
                                <h3 className="sub-header">{t('contact.info.directContact')}</h3>
                                <div className="contact-methods">
                                    <a href="tel:+22901976200001" className="c-link">
                                        <Phone size={18} /> <span>{t('contact.phone')}</span>
                                    </a>
                                    <a href="mailto:info@planet-es.com" className="c-link">
                                        <Mail size={18} /> <span>{t('contact.email')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="form-column">
                            <div className="form-card">
                                <h3>{t('contact.form.title')}</h3>
                                <form className="corporate-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>{t('contact.form.labels.fullName')}</label>
                                            <input type="text" placeholder={t('contact.form.placeholders.fullName')} />
                                        </div>
                                        <div className="form-group">
                                            <label>{t('contact.form.labels.email')}</label>
                                            <input type="email" placeholder={t('contact.form.placeholders.email')} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>{t('contact.form.labels.company')}</label>
                                        <input type="text" placeholder={t('contact.form.placeholders.company')} />
                                    </div>

                                    <div className="form-group">
                                        <label>{t('contact.form.labels.department')}</label>
                                        <select>
                                            <option>{t('contact.form.options.sales')}</option>
                                            <option>{t('contact.form.options.technical')}</option>
                                            <option>{t('contact.form.options.partnership')}</option>
                                            <option>{t('contact.form.options.other')}</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>{t('contact.form.labels.message')}</label>
                                        <textarea rows="4" placeholder={t('contact.form.placeholders.message')}></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        {t('contact.form.submit')} <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-page-corporate {
                    background: white;
                    color: var(--color-text);
                    font-family: 'Outfit', sans-serif;
                    min-height: 100vh;
                }

                .contact-hero {
                    background: linear-gradient(135deg, rgba(0, 31, 53, 0.85) 0%, rgba(15, 51, 85, 0.85) 100%),
                                url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400') center/cover;
                    background-attachment: fixed;
                    color: white;
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 108px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .contact-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -30%;
                    right: -30%;
                    height: 100%;
                    background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
                    pointer-events: none;
                }
                
                .contact-hero .container {
                    position: relative;
                    z-index: 2;
                }
                
                .contact-hero h1 {
                    color: #fff;
                    font-size: 56px;
                    font-weight: 700;
                    margin: 16px 0;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                
                .contact-hero p {
                    font-size: 18px;
                    color: rgba(255,255,255,0.85);
                    max-width: 500px;
                    margin: 0 auto;
                    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
                }
                
                .overline {
                    color: var(--color-accent);
                    font-weight: 700;
                    letter-spacing: 2px;
                    font-size: 13px;
                }
                
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 80px;
                    align-items: start;
                }
                
                .info-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-bottom: 24px;
                    line-height: 1.2;
                }
                
                .info-lead {
                    font-size: 18px;
                    color: #64748b;
                    margin-bottom: 48px;
                    line-height: 1.6;
                }
                
                .office-list {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    margin-bottom: 60px;
                }
                
                .office-item {
                    display: flex;
                    gap: 20px;
                }
                
                .icon-box {
                    width: 40px;
                    height: 40px;
                    background: #f1f5f9;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                }
                
                .details h4 {
                    font-size: 18px;
                    color: #1e293b;
                    margin-bottom: 4px;
                    font-weight: 700;
                }
                
                .details p {
                    color: #64748b;
                    font-size: 15px;
                }
                
                .sub-header {
                    font-size: 14px;
                    text-transform: uppercase;
                    color: #94a3b8;
                    letter-spacing: 1px;
                    margin-bottom: 24px;
                }
                
                .contact-methods {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                
                .c-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 18px;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .c-link:hover {
                    color: var(--color-accent);
                }

                .form-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    padding: 48px;
                    border-radius: 4px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                
                .form-card h3 {
                    font-size: 24px;
                    color: var(--color-primary);
                    margin-bottom: 32px;
                }
                
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                
                .form-group {
                    margin-bottom: 24px;
                }
                
                .form-group label {
                    display: block;
                    font-size: 13px;
                    font-weight: 700;
                    color: #475569;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }
                
                .form-group input, .form-group select, .form-group textarea {
                    width: 100%;
                    padding: 14px 16px;
                    border: 1px solid #cbd5e1;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #1e293b;
                    outline: none;
                    font-family: inherit;
                    transition: border-color 0.2s;
                }
                
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    border-color: var(--color-accent);
                    box-shadow: 0 0 0 3px rgba(var(--color-accent-rgb), 0.1);
                }
                
                .submit-btn {
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 16px 32px;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: background 0.2s;
                    font-family: 'Outfit', sans-serif;
                }
                
                .submit-btn:hover {
                    background: var(--color-accent);
                }

                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 60px; }
                    .form-card { padding: 32px; }
                }
                
                @media (max-width: 600px) {
                   .form-row { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    )
}

export default Contact