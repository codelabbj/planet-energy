import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import MegaMenu from './MegaMenu'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMegaOpen, setIsMegaOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Use Global Language Context
  const { language, changeLanguage, t } = useLanguage()
  const [isLangOpen, setIsLangOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' }
  ]

  const currentLang = languages.find(l => l.code === language) || languages[0]

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic Menu Config using translations
  const menuConfig = [
    { title: t('nav.home'), path: '/' },
    { title: t('nav.industrial'), path: '/industrial' },
    { title: t('nav.hv'), path: '/high-voltage' },
    { title: t('nav.cabling'), path: '/cables' },
    { title: t('nav.solar'), path: '/solar' },
    { title: t('nav.om'), path: '/operations' },
    { title: t('nav.about'), path: '/about' }
  ]

  const handleMouseEnter = (item) => {
    if (item.mega) {
      setActiveCategory(item.mega)
      setIsMegaOpen(true)
    } else {
      setIsMegaOpen(false)
    }
  }

  const isSolidNav = [
    '/industrial',
    '/solar',
    '/high-voltage',
    '/cables/newsroom',
    '/products',
    '/legal',
    '/about',
    '/operations',
    '/contact',
    '/cables',
    '/sitrain',
    '/sitemap'
  ].includes(location.pathname)

  return (
    <nav className={`nav-corporate ${scrolled || isMegaOpen || isSolidNav ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-top">
          <Link to="/" className="brand-corporate">
            <img src={logo} alt="Planet Energy System" className="logo-image" />
          </Link>

          <div className="nav-actions">
            <div className="lang-dropdown-container">
              <button
                className="lang-dropdown-trigger"
                onClick={() => setIsLangOpen(!isLangOpen)}
                onMouseEnter={() => setIsLangOpen(true)}
              >
                <img src={currentLang.flag} alt={currentLang.label} className="lang-flag-img" />
                <ChevronDown size={14} className={`chevron ${isLangOpen ? 'open' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    className="lang-dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsLangOpen(false)}
                  >
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className={`lang-option ${language === lang.code ? 'active' : ''}`}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsLangOpen(false)
                        }}
                      >
                        <img src={lang.flag} alt={lang.label} className="option-flag-img" />
                        <span className="option-label">{lang.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="btn-contact-nav" onClick={() => navigate('/contact')}>
              {t('nav.contact')}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              className="hamburger-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Corporate Menu */}
        <div className="nav-menu">
          {menuConfig.map((item) => (
            <div
              key={item.path} // Changed key to path as title changes
              onMouseEnter={() => handleMouseEnter(item)}
              className="nav-item-container"
            >
              <Link
                to={item.path}
                className={`nav-link-corporate ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {menuConfig.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <div className="mobile-menu-divider"></div>

            <button
              className="mobile-contact-button"
              onClick={() => {
                navigate('/contact')
                setIsMobileMenuOpen(false)
              }}
            >
              {t('nav.contact')}
            </button>

            <div className="mobile-lang-grid">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={`mobile-lang-item ${language === lang.code ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage(lang.code)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <img src={lang.flag} alt={lang.label} className="mobile-flag-img" />
                  <span>{lang.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MegaMenu isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} activeCategory={activeCategory} />

      <style jsx>{`
        .nav-corporate {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1001;
          padding: 24px 0;
          transition: all 0.4s ease;
          background: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .nav-corporate.scrolled {
          padding: 16px 0;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border-bottom: none;
        }

        /* Adjust colors when scrolled because bg becomes white */
        .nav-corporate.scrolled .brand-corporate,
        .nav-corporate.scrolled .nav-link-corporate,
        .nav-corporate.scrolled .lang-selector {
           color: var(--color-primary);
        }
        
        .nav-corporate.scrolled .brand-corporate .text-light {
           color: var(--color-secondary);
        }
        
        .nav-corporate.scrolled .nav-link-corporate:hover {
           color: var(--color-accent);
        }

        .nav-corporate.scrolled .btn-contact-nav {
           border-color: var(--color-primary);
           color: var(--color-primary);
        }
        
        .nav-corporate.scrolled .btn-contact-nav:hover {
           background: var(--color-primary);
           color: white;
        }

        .nav-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nav-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand-corporate {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: -0.5px;
          color: white;
          text-decoration: none;
          display: flex;
          gap: 6px;
          align-items: center;
          transition: opacity 0.3s ease;
        }

        .brand-corporate:hover {
          opacity: 0.8;
        }

        .logo-image {
          height: 60px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .nav-corporate.scrolled .logo-image {
          height: 50px;
        }
        
        .brand-logo-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .brand-main {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 1px;
          color: white;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .brand-dot {
          color: var(--color-accent);
          font-weight: 900;
        }

        .brand-subtitle {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          margin-top: -2px;
        }

        .nav-corporate.scrolled .brand-main {
          color: var(--color-primary);
        }

        .nav-corporate.scrolled .brand-subtitle {
          color: var(--color-secondary);
        }
        
        .brand-corporate .text-light {
            font-weight: 400;
            color: rgba(255,255,255,0.9);
        }

        .nav-menu {
          display: flex;
          gap: 40px;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        .nav-link-corporate {
          color: white; /* Default white on transparent */
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.3s ease;
          padding: 10px 0;
          display: inline-block;
          position: relative;
        }

        .nav-link-corporate:hover, .nav-link-corporate.active {
          color: var(--color-accent); 
        }

        /* Solid simple hover line */
        .nav-link-corporate::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 0%;
            height: 2px;
            background: var(--color-accent);
            transition: width 0.3s ease;
        }
        
        .nav-link-corporate:hover::after, .nav-link-corporate.active::after {
            width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .lang-dropdown-container {
          position: relative;
          z-index: 1002;
        }

        .lang-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .nav-corporate.scrolled .lang-dropdown-trigger {
          color: var(--color-primary);
        }

        .lang-dropdown-trigger:hover {
          background: rgba(255,255,255,0.1);
        }

        .nav-corporate.scrolled .lang-dropdown-trigger:hover {
          background: rgba(0,0,0,0.05);
        }

        .lang-flag-img {
          width: 24px;
          height: auto;
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .chevron {
          transition: transform 0.3s ease;
          opacity: 0.8;
          color: inherit;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .lang-dropdown-menu {
          position: absolute;
          top: calc(100% + 15px);
          right: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 180px;
          overflow: hidden;
          padding: 8px 0;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--color-primary);
          font-weight: 500;
        }

        .lang-option:hover {
          background: #f8fafc;
          padding-left: 20px;
        }

        .lang-option.active {
          background: #f1f5f9;
          color: var(--color-accent);
          font-weight: 700;
        }

        .option-flag-img {
          width: 20px;
          height: auto;
          border-radius: 1px;
        }

        .option-label {
          font-size: 14px;
        }

        .btn-contact-nav {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 10px 24px;
          border-radius: 4px; /* Boxy corporate look */
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .btn-contact-nav:hover {
          background: white;
          color: var(--color-primary);
          border-color: white;
        }

        /* Hamburger Menu */
        .hamburger-menu {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          transition: color 0.3s ease;
        }

        .hamburger-menu:hover {
          color: var(--color-accent);
        }

        .nav-corporate.scrolled .hamburger-menu {
          color: var(--color-primary);
        }

        .nav-corporate.scrolled .hamburger-menu:hover {
          color: var(--color-accent);
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(0, 31, 53, 0.98);
          backdrop-filter: blur(10px);
          padding: 24px;
          flex-direction: column;
          gap: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
          z-index: 1000;
        }

        .nav-corporate.scrolled .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
        }

        .mobile-menu-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          padding: 12px 0;
          transition: color 0.3s ease;
          display: block;
        }

        .mobile-menu-link:hover {
          color: var(--color-accent);
        }

        .nav-corporate.scrolled .mobile-menu-link {
          color: var(--color-primary);
        }

        .nav-corporate.scrolled .mobile-menu-link:hover {
          color: var(--color-accent);
        }

        /* Mobile Menu Divider */
        .mobile-menu-divider {
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: 12px 0;
        }

        .nav-corporate.scrolled .mobile-menu-divider {
          background: rgba(0,0,0,0.1);
        }

        /* Mobile Contact Button */
        .mobile-contact-button {
          background: var(--color-accent);
          border: 1px solid var(--color-accent);
          color: #001f35;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
          width: 100%;
          text-align: center;
        }

        .mobile-contact-button:hover {
          background: transparent;
          color: var(--color-accent);
        }

        .nav-corporate.scrolled .mobile-contact-button {
          background: var(--color-primary);
          color: white;
        }

        .nav-corporate.scrolled .mobile-contact-button:hover {
          background: transparent;
          color: var(--color-primary);
          border-color: var(--color-primary);
        }

        /* Mobile Language Selector */
        .mobile-lang-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding-top: 12px;
        }

        .mobile-lang-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 12px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-corporate.scrolled .mobile-lang-item {
          background: rgba(0,0,0,0.03);
          color: var(--color-primary);
        }

        .mobile-lang-item.active {
          background: var(--color-accent);
          color: #001f35;
        }

        .mobile-flag-img {
          width: 32px;
          height: auto;
          border-radius: 3px;
          margin-bottom: 4px;
        }

        @media (max-width: 1024px) {
           .nav-menu { display: none; }
           .lang-selector { display: none; }
           .btn-contact-nav { display: none; }
           .hamburger-menu { display: block; }
           .mobile-menu { display: flex; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
