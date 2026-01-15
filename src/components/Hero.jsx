import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Globe, Zap, Users, Activity } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  // Video/Image Slides Configuration
  const slides = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/27552677/pexels-photo-27552677.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Monument Amazone - Cotonou, Benin'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/33213616/pexels-photo-33213616.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Berlin TV Tower - Deutschland'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/35175022/pexels-photo-35175022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Accra Skyline - Ghana'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Installation Électrique - Disjoncteur'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/414967/pexels-photo-414967.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Haute Tension - Transmission'
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
          <div className="hero-overlay"></div>
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
          <div className="hero-overline">
            <span className="dot"></span> GLOBAL ENERGY PARTNER
          </div>
          <h1>{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>

          <button className="btn-hero-primary">
            {t('hero.cta')} <ChevronRight size={18} />
          </button>
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
          <span>{slides[index].label}</span>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-premium {
            height: 100vh;
            min-height: 800px;
            position: relative;
            display: flex;
            align-items: center;
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
      background: linear-gradient(135deg, rgba(0, 31, 53, 0.72), rgba(15, 51, 85, 0.42));
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 3;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
    }

        .text-block {
            max-width: 700px;
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

    h1 {
      color: #fff;
      font-size: 64px;
      line-height: 1.1;
      font-weight: 700;
      margin-bottom: 24px;
      font-family: 'Outfit', sans-serif;
      text-shadow: 0 4px 20px rgba(0,0,0,0.45);
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
            display: flex;
            align-items: center;
            gap: 16px;
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

        @media (max-width: 768px) {
            h1 { font-size: 40px; }
            .hero-content { flex-direction: column; align-items: flex-start; gap: 40px; }
        }
      `}</style>
    </div>
  )
}

export default Hero
