import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import accraImage from '../assets/Acrra Rue.jpg.jpeg'
import amazoneeImage from '../assets/Amazonee.jpg.jpeg'
import berlinImage from '../assets/Tour de berlin.jpg.jpeg'
import cableArticleHero from '../assets/cable fire.jpeg'
import helukabelLogo from '../assets/logo1.png'



const Hero = () => {

  const { t } = useLanguage()

  // Video/Image Slides Configuration
  const slides = [
    {
      type: 'image',
      src: cableArticleHero,
      logo: helukabelLogo
    },
    {
      type: 'image',
      src: amazoneeImage,
      label: t('hero.slides.label_benin')
    },
    {
      type: 'image',
      src: accraImage,
      label: t('hero.slides.label_ghana')
    },
    {
      type: 'image',
      src: berlinImage,
      label: t('hero.slides.label_berlin')
    }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-premium">
      {/* Background Media Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="media-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          {slides[index].type === 'video' ? (
            <video
              src={slides[index].src}
              autoPlay
              loop
              muted
              playsInline
              className="hero-media"
            />
          ) : (
            <img
              src={slides[index].src}
              alt="Hero Background"
              className="hero-media"
            />
          )}
          <div className={`hero-overlay ${index === 0 ? 'darker' : ''}`}></div>
        </motion.div>
      </AnimatePresence>

      <div className="container hero-content">
        {/* Main Text Content - Steady (Does not re-animate on slide change) */}
        <motion.div
          className="text-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title-main">
            <span className="company-name">{t('hero.companyName')}</span>
            <span className="distributor-text">{t('hero.distributorText')}</span>
          </h1>
        </motion.div>

        {/* Animated Slide Label */}
        <motion.div
          className="slide-indicator"
          key={index} // This part animates on slide change
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >



          <div className="slide-line"></div>
          {slides[index].logo ? (
            <img src={slides[index].logo} alt="Helukabel Logo" className="slide-logo" />
          ) : (
            <span>{slides[index].label}</span>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .hero-premium {
            height: 99vh;
            position: relative;
            display: flex;
            align-items: center; /* Center content vertically */
            overflow: hidden;
            background: linear-gradient(135deg, #001f35 0%, #0f3355 100%);
        }

    .hero-premium::before {
      content: '';
      position: absolute;
      top: 0;
      right: -20%;
      bottom: 0;
      width: 60%;
      background: radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 45%);
      pointer-events: none;
      z-index: 0;
    }

        .media-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .hero-media {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.15));
      z-index: 1;
      transition: background 0.5s ease;
    }

    .hero-overlay.darker {
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35));
    }

    .hero-content {
      position: relative;
      z-index: 3;
      color: white;
      display: flex;
      align-items: center; /* Vertical center for the text block */
      justify-content: flex-start; /* Align text block to the left */
      width: 100%;
      height: 100%;
    }

        .text-block {
            max-width: 1000px;
            z-index: 4;
        }

        .hero-overline {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent);
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 12px;
            margin-bottom: 24px;
        }

        .hero-overline .dot {
            width: 8px;
            height: 8px;
            background: var(--color-accent);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(230, 166, 0, 0.5);
        }

    .hero-title-main {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 0;
      font-family: 'Outfit', sans-serif;
      text-shadow: 0 4px 30px rgba(0,0,0,0.6);
      border-left: 5px solid var(--color-accent);
      padding-left: 32px;
    }

    .company-name {
      font-size: 56px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
      display: block;
      line-height: 1.1;
      white-space: nowrap;
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    }

    .distributor-text {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 4px;
      color: var(--color-accent);
      display: block;
      text-transform: uppercase;
      text-shadow: 0 2px 15px rgba(0, 0, 0, 0.82);
    }

        .hero-subtitle {
            font-size: 20px;
            color: rgba(255,255,255,0.8);
            margin-bottom: 40px;
            max-width: 500px;
            line-height: 1.6;
        }

        .btn-hero-primary {
            background: var(--color-primary);
            color: white;
            border: none;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
            font-family: 'Outfit', sans-serif;
        }

        .btn-hero-primary:hover {
            background: var(--color-accent);
            color: black;
            padding-right: 40px;
        }

        .slide-indicator {
            position: absolute;
            bottom: 150px; /* Anchored to bottom of hero-premium */
            right: 0;
            display: flex;
            align-items: center;
            gap: 16px;
            z-index: 5;
        }

        .slide-line {
            width: 60px;
            height: 2px;
            background: var(--color-accent);
        }

        .slide-indicator span {
            color: white;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
        }

        .slide-logo {
            height: 35px; /* Adjust height to fit nicely */
            width: auto;
            object-fit: contain;
            filter: brightness(0) invert(1); /* Make it white to match theme if needed, or remove if logo has colors */
        }

        @media (max-width: 768px) {
            .slide-logo {
                height: 25px;
            }
        }

        @media (max-width: 768px) {
            .company-name { font-size: 28px; white-space: normal; }
            .distributor-text { font-size: 13px; letter-spacing: 2px; white-space: normal; }
            
            /* On mobile, let's keep it absolute but align left or adjust */
            .slide-indicator { left: 20px; right: auto; bottom: 120px; }
            
            .hero-content { 
                align-items: center; /* Center vertically to avoid nav overlap */
                padding-top: 60px; /* Extra breathing room from top */
            }
            .hero-title-main { border-left-width: 3px; padding-left: 20px; }
        }
      `}</style>
    </div>
  )
}

export default Hero
