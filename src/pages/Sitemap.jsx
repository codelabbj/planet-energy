import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Home, Zap, Shield, AppWindow, Mail, Info, FileText, Newspaper } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Sitemap.css'

const Sitemap = () => {
    const { t } = useLanguage()

    const sections = [
        {
            title: t('sitemap.sections.corporate'),
            links: [
                { name: t('nav.home'), path: '/', icon: <Home size={16} /> },
                { name: t('nav.about'), path: '/about', icon: <Info size={16} /> },
                { name: t('nav.contact'), path: '/contact', icon: <Mail size={16} /> },
                { name: t('nav.om'), path: '/operations', icon: <Zap size={16} /> },
                { name: t('footer.links.news'), path: '/contact', icon: <Newspaper size={16} /> }
            ]
        },
        {
            title: t('sitemap.sections.solutions'),
            links: [
                { name: t('nav.industrial'), path: '/industrial', icon: <Zap size={16} /> },
                { name: "Industrial Automation", path: '/industrial', icon: <AppWindow size={16} /> },
                { name: "Siemens High Voltage", path: '/high-voltage', icon: <Zap size={16} /> },
                { name: "Helukabel Systems", path: '/products/cables', icon: <FileText size={16} /> }
            ]
        },
        {
            title: t('sitemap.sections.specialized'),
            links: [
                { name: t('nav.hv'), path: '/high-voltage', icon: <Zap size={16} /> },
                { name: t('nav.solar'), path: '/solar', icon: <Zap size={16} /> },
                { name: "Cables Newsroom", path: '/cables/newsroom', icon: <FileText size={16} /> }
            ]
        },
        {
            title: t('sitemap.sections.support'),
            links: [
                { name: t('footer.links.privacy'), path: '/legal', icon: <Shield size={16} /> },
                { name: t('footer.links.terms'), path: '/legal', icon: <FileText size={16} /> }
            ]
        }
    ]

    return (
        <motion.div
            className="sitemap-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="sitemap-hero">
                <div className="container">
                    <h1>{t('sitemap.hero.title')}</h1>
                    <p>{t('sitemap.hero.subtitle')}</p>
                </div>
            </section>

            <section className="sitemap-content">
                <div className="container">
                    <div className="sitemap-grid">
                        {sections.map((section, idx) => (
                            <div key={idx} className="sitemap-section">
                                <h2>{section.title}</h2>
                                <ul className="sitemap-links">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link to={link.path} className="sitemap-link">
                                                <span className="sitemap-link-icon">{link.icon}</span>
                                                {link.name}
                                                <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.3 }} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Sitemap
