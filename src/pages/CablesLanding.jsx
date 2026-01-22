import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Assets
import heroImg from '../assets/cable-article-hero.png'
import cableeee from '../assets/Cableeee.jpg'
import im1 from '../assets/IM1.jpg'
import im2 from '../assets/IM2.jpg'
import im3 from '../assets/IM3.jpg'

// Catalog Assets
import picc1 from '../assets/PIC1 N.jpg'
import pic2 from '../assets/PIC2.jpg'
import pic3 from '../assets/PIC3.jpg'
import pic4 from '../assets/PIC4.jpg'
import pic5 from '../assets/PIC5.jpg'
import pic6 from '../assets/PIC6.jpg'
import pic7 from '../assets/PIC7.jpg'
import pic8 from '../assets/PIC8.jpg'
import pic9 from '../assets/PIC9.jpg'
import pic10 from '../assets/PIC10.jpg'
import pic11 from '../assets/PIC11.jpg'
import im4 from '../assets/IM4.jpg'
import imc1 from '../assets/IM C1.jpg'
import imc2 from '../assets/IM C2.jpg'
import imc3 from '../assets/IM C3.jpg'

import '../styles/CablesLanding.css'

const CablesLanding = () => {
    const { t } = useLanguage()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false)
    const scrollRef = React.useRef(null)

    const slideData = [
        {
            image: heroImg,
            title: "PLANET ENERGYS SYSTEMS",
            subtitle: "DISTRIBUTEUR EXCLUSIF DE HELUKABEL AU BENIN",
            hasButton: false
        },
        {
            image: cableeee,
            title: "Résistance à la flamme",
            subtitle: "et sans halogène",
            hasButton: true,
            btnText: "VOIR PLUS",
            link: "/newsroom/halogen-free-cables"
        },
        {
            image: im1,
            title: "Câbles pour l'industrie",
            subtitle: "Des solutions robustes pour les environnements exigeants",
            hasButton: true,
            btnText: "DÉCOUVRIR",
            link: "/products/cables"
        },
        {
            image: im2,
            title: "Énergies Renouvelables",
            subtitle: "Solutions de câblage pour le solaire et l'éolien",
            hasButton: true,
            btnText: "DÉCOUVRIR",
            link: "/products/cables"
        },
        {
            image: im3,
            title: "Infrastructure & Bâtiment",
            subtitle: "Sécurité et performance pour vos projets immobiliers",
            hasButton: true,
            btnText: "DÉCOUVRIR",
            link: "/products/cables"
        }
    ]

    const consultedImages = [picc1, pic2, pic3, pic4, pic9, pic10, pic11]
    const halogenFreeImages = [pic5, pic6, pic7, pic8]

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    // Auto-advance carousel
    useEffect(() => {
        if (isAutoPlayPaused) return

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideData.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [slideData.length, isAutoPlayPaused])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length)
        setIsAutoPlayPaused(true)
    }
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length)
        setIsAutoPlayPaused(true)
    }

    return (
        <div className="cables-landing-container">
            {/* Professional Full Screen Carousel Hero */}
            <div className="cabling-carousel-hero full-height">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="carousel-slide"
                    >
                        <img src={slideData[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
                        <div className={`carousel-overlay dark ${currentSlide === 0 ? 'darker-overlay' : ''}`}></div>

                        {/* Slide Content Overlay */}
                        <div className="carousel-content-wrapper left">
                            <div className="carousel-text-overlay">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    {slideData[currentSlide].title}
                                    {slideData[currentSlide].subtitle && <><br /> <span className="text-highlight">{slideData[currentSlide].subtitle}</span></>}
                                </motion.h1>

                                {slideData[currentSlide].hasButton && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                        className="carousel-cta-container"
                                    >
                                        <Link to={slideData[currentSlide].link} className="carousel-btn premium">
                                            {slideData[currentSlide].btnText} <ChevronRight size={20} />
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <button className="carousel-control prev" onClick={prevSlide}><ChevronLeft size={44} /></button>
                <button className="carousel-control next" onClick={nextSlide}><ChevronRight size={44} /></button>

                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    {slideData.map((_, idx) => (
                        <div
                            key={idx}
                            className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentSlide(idx)
                                setIsAutoPlayPaused(true)
                            }}
                        >
                            <span className="dot"></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brand Introduction Section */}
            <section className="brand-intro-section">
                <div className="container">
                    <div className="brand-intro-grid">
                        <motion.div
                            className="brand-description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="brand-story-text">
                                {t('cablingLanding.brandStory')}
                            </p>
                        </motion.div>

                        <div className="domains-offering">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                {t('cablingLanding.intro')}
                            </motion.h3>
                            <ul className="domains-grid-list">
                                {t('cablingLanding.domains').map((domain, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        viewport={{ once: true }}
                                        className="domain-bullet"
                                    >
                                        <ChevronRight size={14} className="bullet-icon" />
                                        <span>{domain}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 0: Movement Solutions */}
            <section className="movement-solutions-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="section-title" style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: '700' }}>
                            {t('cablingLanding.sections.movement.title')}
                        </h2>
                    </div>
                    <div className="movement-cards-grid">
                        {/* Featured Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="movement-card featured"
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

                        {/* Sub Cards */}
                        {t('cablingLanding.sections.movement.cards').map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * (idx + 1) }}
                                className="movement-card sub"
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

            {/* Section 1: Catalog Sections */}
            <section className="catalog-sections">
                <div className="container">
                    {/* Most Consulted */}
                    <div className="catalog-row horizontal-scroll-row">
                        <div className="section-header">
                            <h2>{t('cablingLanding.sections.catalog.consulted.title')}</h2>
                            <p>{t('cablingLanding.sections.catalog.consulted.subtitle')}</p>
                        </div>

                        <div className="scroll-controls">
                            <button className="scroll-btn left" onClick={() => scroll('left')}>
                                <ChevronLeft size={24} />
                            </button>
                            <button className="scroll-btn right" onClick={() => scroll('right')}>
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        <div className="product-scroll-wrapper" ref={scrollRef}>
                            <div className="product-grid horizontal">
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