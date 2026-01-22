import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'
import breaker1 from '../assets/B1.jpg.jpeg'
import breaker2 from '../assets/B2.jpeg'
import simocode from '../assets/B3.jpeg'
import heroBg from '../assets/Bh.jpeg'
import siemensGrid from '../assets/SiemensGrid.png'
import siemensDetail from '../assets/SiemensDetail.png'
import dijoncteurImg from '../assets/Dijoncteur.jpg.jpeg'
import siemensDisjoncteurImg from '../assets/SIEMENS Disjoncteur.jpg.jpeg'
import siemensBipolaireImg from '../assets/SIEMENS Disjoncteur bipolaire.jpg.jpeg'

const IndustrialPage = () => {
    const { t } = useLanguage()

    return (
        <>
            <div className="industrial-page">
                {/* Hero Section */}
                <div className="industrial-hero">
                    <div className="hero-overlay"></div>
                    <div className="container hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-text-block"
                        >
                            <h1 className="hero-title-main">
                                <span className="company-name">{t('industrial.hero.title')}</span>
                                <span className="distributor-text">{t('industrial.hero.subtitle')}</span>
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* Intro Section */}
                <section className="section-padding intro-section">
                    <div className="container">
                        <p className="intro-text-large text-center">
                            {t('industrial.intro.text')}
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <div className="industrial-content">
                    {/* Section 1: Breaker (Text Left / Image Right) */}
                    <section className="content-row section-padding bg-light">
                        <div className="container grid-row">
                            <div className="text-col">
                                <h2 className="section-title">{t('industrial.sections.breakers.title')}</h2>
                                <p className="section-desc">{t('industrial.sections.breakers.text')}</p>
                            </div>
                            <div className="image-col">
                                <img src={breaker1} alt="Circuit Breaker" className="content-image" />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Industrial Control (Image Left / Text Right) */}
                    <section className="content-row section-padding">
                        <div className="container grid-row reverse-mobile">
                            <div className="image-col">
                                <img src={breaker2} alt="Industrial Control" className="content-image" />
                            </div>
                            <div className="text-col">
                                <h2 className="section-title">{t('industrial.sections.control.title')}</h2>
                                <p className="section-desc">{t('industrial.sections.control.text')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Simocode (Text Left / Image Right) */}
                    <section className="content-row section-padding bg-light">
                        <div className="container grid-row">
                            <div className="text-col">
                                <h2 className="section-title">{t('industrial.sections.simocode.title')}</h2>
                                <p className="section-desc">{t('industrial.sections.simocode.text')}</p>
                            </div>
                            <div className="image-col">
                                <img src={simocode} alt="Simocode Siemens" className="content-image" />
                            </div>
                        </div>
                    </section>
                </div>



                {/* Product Grid Section */}
                <section className="section-padding bg-white">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="section-title" style={{ display: 'inline-block' }}>{t('industrial.sections.catalog.title')}</h2>
                            {/* <p className="intro-text-large" style={{ borderBottom: 'none' }}>
                                {t('industrial.sections.catalog.text')}
                            </p> */}
                        </div>

                        <div className="product-grid">
                            {[
                                { id: 1, title: "SIEMENS Disjoncteur 2A Ph+N Courbe C 4.5kA 230V - 5SL3002-7KL", ref: "5SL3002-7KL", price: "12,90 €", rating: 5, stock: true },
                                { id: 2, title: "SIEMENS Disjoncteur 10A Ph+N Courbe C 4.5kA 230V - 5SL3010-7KL", ref: "5SL3010-7KL", price: "7,30 €", rating: 4, stock: true },
                                { id: 3, title: "SIEMENS Disjoncteur 16A Ph+N Courbe C 4.5kA 230V - 5SL3016-7KL", ref: "5SL3016-7KL", price: "7,30 €", rating: 5, stock: true },
                                { id: 4, title: "SIEMENS Disjoncteur 20A Ph+N Courbe C 4.5kA 230V - 5SL3020-7KL", ref: "5SL3020-7KL", price: "7,30 €", rating: 4, stock: true },
                                { id: 5, title: "SIEMENS Disjoncteur 32A Ph+N Courbe C 4.5kA 230V - 5SL3032-7KL", ref: "5SL3032-7KL", price: "10,50 €", rating: 4, stock: true },
                                { id: 6, title: "SIEMENS Disjoncteur tétrapolaire 10A courbe C 6kA 400V", ref: "5SE2410-6", price: "49,80 €", rating: 5, stock: true },
                                { id: 7, title: "SIEMENS Disjoncteur tétrapolaire 16A courbe C 6kA 400V", ref: "5SE2416-6", price: "58,79 €", rating: 5, stock: true },
                                { id: 8, title: "SIEMENS Disjoncteur bipolaire 20A pour parafoudre courbe C 6kA 230V", ref: "5SE2420-6", price: "42,90 €", rating: 4, stock: true }
                            ].map((item, index) => {
                                let productImage = dijoncteurImg;
                                if (index >= 5 && index < 7) {
                                    productImage = siemensDisjoncteurImg;
                                } else if (index >= 7) {
                                    productImage = siemensBipolaireImg;
                                }

                                return (
                                    <div key={item.id} className="product-card">
                                        <div className="product-image">
                                            <img src={productImage} alt={item.title} />
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title">{item.title}</h3>
                                            <div className="product-meta">
                                                <span className="ref">Réf: {item.ref}</span>
                                                {/* <span className="stock-badge">
                                                    <span className="dot"></span> EN STOCK
                                                </span> */}
                                            </div>
                                            <div className="brand-rating">
                                                <span className="brand">SIEMENS</span>
                                                <div className="stars">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={i < item.rating ? "star filled" : "star"}>★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* <div className="price-row">
                                                <span className="price">{item.price} <small>TTC</small></span>
                                            </div> */}
                                            <div className="action-row">
                                                <input type="number" min="1" defaultValue="1" className="qty-input" />
                                                <button className="btn-cart">AJOUTER AU PANIER</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </section>
            </div>

            <style jsx>{`
                .industrial-hero {
                    height: 100vh;
                    min-height: 800px;
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
                    background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%);
                    z-index: 1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                .hero-text-block {
                    margin-left: 0;
                }

                .hero-title-main {
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-family: 'Outfit', sans-serif;
                    text-shadow: 0 4px 30px rgba(0,0,0,0.6);
                    border-left: 5px solid var(--color-accent);
                    padding-left: 32px;
                }

                .company-name {
                    font-size: 3.5rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: #ffffff;
                    text-transform: uppercase;
                    line-height: 1.1;
                }

                .distributor-text {
                    font-size: 1.5rem;
                    font-weight: 600;
                    letter-spacing: 4px;
                    color: var(--color-accent);
                    text-transform: uppercase;
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

                .intro-text-large {
                    font-size: 1.8rem;
                    color: var(--color-primary);
                    font-weight: 600;
                    text-align: center;
                    line-height: 1.4;
                    position: relative;
                    padding-bottom: 20px;
                    border-bottom: 3px solid var(--color-accent);
                    display: inline-block;
                }

                .intro-section {
                    text-align: center;
                }

                .content-row {
                    border-bottom: 1px solid #eee;
                }

                .bg-light {
                    background-color: #f8f9fa;
                }

                .grid-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .text-col {
                    padding: 20px;
                }

                .section-title {
                    font-size: 2.2rem;
                    color: var(--color-primary);
                    margin-bottom: 24px;
                    font-weight: 700;
                    position: relative;
                    padding-bottom: 16px;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 60px;
                    height: 4px;
                    background: var(--color-accent);
                }

                .section-desc {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: #555;
                }

                .content-image {
                    width: 100%;
                    height: auto;
                    border-radius: 4px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                    transition: transform 0.3s ease;
                }

                .content-image:hover {
                    transform: translateY(-5px);
                }

                @media (max-width: 992px) {
                    .industrial-hero {
                        height: 60vh;
                        min-height: 500px;
                    }
                    
                    .hero-content {
                        padding-left: 20px;
                        padding-right: 20px;
                    }

                    .hero-title {
                        font-size: 2.2rem;
                    }

                    .intro-text-large {
                        font-size: 1.2rem;
                    }

                    .grid-row {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .reverse-mobile {
                        display: flex;
                        flex-direction: column-reverse;
                    }

                    .image-col {
                        order: -1; 
                    }
                    
                    .reverse-mobile .image-col {
                        order: 0; 
                    }
                    .reverse-mobile .image-col {
                        order: 0; 
                    }
                    
                    .showcase-gallery {
                        grid-template-columns: 1fr;
                    }
                }

                .bg-light { background: #f8fafc; }

                    .showcase-gallery {
                        display: none;
                    }
                }

                .bg-light { background: #f8fafc; }
                .bg-white { background: #ffffff; }

                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 30px;
                }

                .product-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 4px;
                    padding: 20px;
                    transition: all 0.3s ease;
                }

                .product-card:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    border-color: var(--color-primary);
                }

                .product-image {
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .product-image img {
                    max-height: 100%;
                    max-width: 100%;
                }

                .product-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 12px;
                    line-height: 1.4;
                    height: 40px; 
                    overflow: hidden;
                }

                .product-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                    font-size: 11px;
                }

                .stock-badge {
                    color: #22c55e;
                    font-weight: 700;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .stock-badge .dot {
                    width: 6px;
                    height: 6px;
                    background: #22c55e;
                    border-radius: 50%;
                }

                .brand-rating {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    border-bottom: 1px solid #f0f0f0;
                    padding-bottom: 12px;
                }

                .brand {
                    color: #009999; 
                    font-weight: 700;
                    font-size: 13px;
                }

                .stars {
                    color: #fbbf24;
                }

                .price-row {
                    text-align: right;
                    margin-bottom: 16px;
                }

                .price {
                    font-size: 20px;
                    font-weight: 700;
                    color: #333;
                }

                .price small {
                    font-size: 10px;
                    color: #999;
                    margin-left: 2px;
                }

                .action-row {
                    display: flex;
                    gap: 10px;
                }

                .qty-input {
                    width: 50px;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    text-align: center;
                }

                .btn-cart {
                    flex: 1;
                    background: #0090d0;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                    text-transform: uppercase;
                }

                .btn-cart:hover {
                    background: #007bb5;
                }
            `}</style>
        </>
    )
}

export default IndustrialPage
