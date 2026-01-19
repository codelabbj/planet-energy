import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import im1 from '../assets/IM1.jpg'
import im2 from '../assets/IM2.jpg'
import im3 from '../assets/IM3.jpg'
import picc1 from '../assets/PIC1 N.jpg'
import pic2 from '../assets/PIC2.jpg'
import pic3 from '../assets/PIC3.jpg'
import pic4 from '../assets/PIC4.jpg'
import pic5 from '../assets/PIC5.jpg'
import pic6 from '../assets/PIC6.jpg'
import pic7 from '../assets/PIC7.jpg'
import pic8 from '../assets/PIC8.jpg'
import im4 from '../assets/IM4.jpg'
import imc1 from '../assets/IM C1.jpg'
import imc2 from '../assets/IM C2.jpg'
import imc3 from '../assets/IM C3.jpg'
import '../styles/CablesLanding.css'

const CablesLanding = () => {
    const { t } = useLanguage()
    const [isSubNavOpen, setIsSubNavOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [im1, im2, im3]
    const domains = t('cablingLanding.domains')

    // Product image maps
    const consultedImages = [picc1, pic2, pic3, pic4]
    const halogenFreeImages = [pic5, pic6, pic7, pic8]

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <div className="cables-landing-container">
            {/* Sub-Navbar / Dropdown Header */}
            <div className="cabling-sub-nav">
                <div className="container sub-nav-inner">
                    <div className="sub-nav-text" onClick={() => setIsSubNavOpen(!isSubNavOpen)}>
                        <p>{t('cablingLanding.intro')}</p>
                        <ChevronDown className={`toggle-icon ${isSubNavOpen ? 'open' : ''}`} />
                    </div>

                    <AnimatePresence>
                        {isSubNavOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="domains-dropdown"
                            >
                                <div className="domains-grid">
                                    {domains.map((domain, idx) => (
                                        <div key={idx} className="domain-item">
                                            <span>{domain}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Full Screen Carousel Hero */}
            <div className="cabling-carousel-hero">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="carousel-slide"
                    >
                        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                        <div className="carousel-overlay"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Content Overlay */}
                <div className="carousel-content-wrapper">
                    <div className="carousel-text-overlay">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Résistance à la flamme <br /> et sans halogène
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="carousel-cta-container"
                        >
                            <Link to="/newsroom/halogen-free-cables" className="carousel-btn">
                                VOIR PLUS <ChevronRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control prev" onClick={prevSlide}><ChevronLeft size={40} /></button>
                <button className="carousel-control next" onClick={nextSlide}><ChevronRight size={40} /></button>

                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* Section 0: Movement Solutions (Based on Image 0) */}
            <section className="movement-solutions-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="movement-featured-card"
                    >
                        <div className="card-bg-placeholder">
                            <img src={im4} alt="Movement Featured" className="section-img" />
                        </div>
                        <div className="card-content">
                            <h2>{t('cablingLanding.sections.movement.featured.title')}</h2>
                            <p>{t('cablingLanding.sections.movement.featured.subtitle')}</p>
                            <button className="terracotta-btn">{t('cablingLanding.sections.movement.featured.btn')}</button>
                        </div>
                    </motion.div>

                    <div className="movement-cards-grid">
                        {t('cablingLanding.sections.movement.cards').map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="movement-sub-card"
                            >
                                <div className="card-bg-placeholder">
                                    {idx === 0 && <img src={imc1} alt={card.title} className="section-img" />}
                                    {idx === 1 && <img src={imc2} alt={card.title} className="section-img" />}
                                    {idx === 2 && <img src={imc3} alt={card.title} className="section-img" />}
                                </div>
                                <div className="card-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.subtitle}</p>
                                    <button className="terracotta-btn">{card.btn}</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: Catalog Sections (Based on Image 1) */}
            <section className="catalog-sections">
                <div className="container">
                    {/* Most Consulted */}
                    <div className="catalog-row">
                        <div className="section-header">
                            <h2>{t('cablingLanding.sections.catalog.consulted.title')}</h2>
                            <p>{t('cablingLanding.sections.catalog.consulted.subtitle')}</p>
                        </div>
                        <div className="product-grid">
                            {t('cablingLanding.sections.catalog.consulted.products').map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="product-card"
                                >
                                    <div className="product-img-box">
                                        <img src={consultedImages[idx]} alt={product.name} className="product-img" />
                                    </div>
                                    <div className="product-info">
                                        <h4 className="product-name">{product.name}</h4>
                                        <p className="art-no">Numéro d’article {product.artNo}</p>
                                        <div className="product-badges">
                                            <span className="badge-placeholder"></span>
                                            <span className="badge-placeholder"></span>
                                            <span className="badge-placeholder"></span>
                                        </div>
                                    </div>
                                    <button className="terracotta-btn-outline">{t('cablingLanding.sections.catalog.consulted.btn')}</button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Halogen Free */}
                    <div className="catalog-row">
                        <div className="section-header">
                            <h2>{t('cablingLanding.sections.catalog.halogenFree.title')}</h2>
                            <p>{t('cablingLanding.sections.catalog.halogenFree.subtitle')}</p>
                        </div>
                        <div className="product-grid">
                            {t('cablingLanding.sections.catalog.halogenFree.products').map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="product-card"
                                >
                                    <div className="product-img-box">
                                        <img src={halogenFreeImages[idx]} alt={product.name} className="product-img" />
                                    </div>
                                    <div className="product-info">
                                        <h4 className="product-name">{product.name}</h4>
                                        <p className="product-desc">{product.desc}</p>
                                    </div>
                                    <button className="terracotta-btn-outline">{t('cablingLanding.sections.catalog.halogenFree.btn')}</button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CablesLanding
