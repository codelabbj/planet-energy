import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Facebook, ShieldCheck, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/logo.png'
import '../styles/Footer.css'

const Footer = () => {
   const { t } = useLanguage()

   return (
      <footer className="footer-corporate">
         <div className="container footer-grid">

            {/* Column 1: Brand */}
            <div className="footer-col brand-col">
               <img src={logo} alt="Planet Energy System" className="footer-logo-image" />
               <p className="footer-desc">
                  {t('footer.desc')}
               </p>
               <div className="social-row">
                  <a href="#" className="social-btn"><Linkedin size={18} /></a>
                  <a href="#" className="social-btn"><Facebook size={18} /></a>
               </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="footer-col">
               <h4>{t('footer.solutions')}</h4>
               <div className="footer-link-list">
                  <Link to="/products">Siemens Low Voltage</Link>
                  <Link to="/products">Industrial Automation</Link>
                  <Link to="/products">Helukabel Systems</Link>
                  <Link to="/products">Renewable Energy</Link>
               </div>
            </div>

            {/* Column 3: Company */}
            <div className="footer-col">
               <h4>{t('footer.company')}</h4>
               <div className="footer-link-list">
                  <Link to="/about">{t('footer.links.about')}</Link>
                  <Link to="/operations">{t('footer.links.om')}</Link>
                  <Link to="/contact">{t('footer.links.careers')}</Link>
                  <Link to="/contact">{t('footer.links.news')}</Link>
               </div>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-col contact-col">
               <h4>{t('footer.contact')}</h4>
               <div className="contact-list">
                  <div className="contact-section">
                     <p className="contact-section-title" style={{ fontWeight: 700, marginBottom: '8px' }}>{t('contact.offices.cotonou.name')}</p>
                     <div className="c-item">
                        <MapPin size={16} className="c-icon" />
                        <span>{t('contact.offices.cotonou.description')}</span>
                     </div>
                     <div className="c-item">
                        <Phone size={16} className="c-icon" />
                        <span>{t('contact.phone')}</span>
                     </div>
                  </div>
                  <div className="contact-section" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                     <p className="contact-section-title" style={{ fontWeight: 700, marginBottom: '8px' }}>{t('contact.offices.ghana.name')}</p>
                     <div className="c-item">
                        <MapPin size={16} className="c-icon" />
                        <span>{t('contact.offices.ghana.description')}</span>
                     </div>
                  </div>
                  <div className="c-item" style={{ marginTop: '16px' }}>
                     <Mail size={16} className="c-icon" />
                     <span>{t('contact.email')}</span>
                  </div>
               </div>
            </div>

         </div>

         {/* Footer Bottom */}
         <div className="footer-bottom">
            <div className="container bottom-flex">
               <p>&copy; {new Date().getFullYear()} Planet Energy System. {t('footer.rights')}</p>
               <div className="legal-links">
                  <Link to="/legal">{t('footer.links.terms')}</Link>
                  <Link to="/legal">{t('footer.links.privacy')}</Link>
                  <Link to="/sitemap">{t('footer.links.sitemap')}</Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
