import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Facebook, ShieldCheck, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/logo.png'

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
                     <p className="contact-section-title" style={{ fontWeight: 700, marginBottom: '8px' }}>{t('contact.offices.accra.name')}</p>
                     <div className="c-item">
                        <MapPin size={16} className="c-icon" />
                        <span>{t('contact.offices.accra.description')}</span>
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
                  {/* <Link to="/legal">{t('footer.links.terms')}</Link> */}
                  <Link to="/legal">{t('footer.links.privacy')}</Link>
                  <Link to="/sitemap">{t('footer.links.sitemap')}</Link>
               </div>
            </div>
         </div>

         <style jsx>{`
        .footer-corporate {
           background: #050505;
           color: #e5e5e5;
           padding-top: 100px;
           border-top: 1px solid rgba(255,255,255,0.05);
           font-family: 'Outfit', sans-serif;
        }

        .footer-grid {
           display: grid;
           grid-template-columns: 2fr 1fr 1fr 1.5fr;
           gap: 60px;
           padding-bottom: 80px;
        }

        .footer-logo {
           display: flex;
           flex-direction: column;
           gap: 4px;
           margin-bottom: 24px;
        }

        .footer-logo-image {
           height: 70px;
           width: auto;
           object-fit: contain;
           margin-bottom: 16px;
        }

        .footer-logo-main {
           font-family: 'Outfit', sans-serif;
           font-weight: 800;
           font-size: 18px;
           letter-spacing: 1px;
           color: white;
           display: flex;
           align-items: center;
           gap: 2px;
        }

        .footer-logo-dot {
           color: var(--color-accent);
           font-weight: 900;
        }

        .footer-logo-subtitle {
           font-family: 'Outfit', sans-serif;
           font-weight: 400;
           font-size: 8px;
           letter-spacing: 1.5px;
           color: rgba(255, 255, 255, 0.5);
           text-transform: uppercase;
        }

        .logo-text {
           font-family: 'Outfit', sans-serif;
           font-weight: 800;
           font-size: 20px;
           letter-spacing: 1px;
           color: white;
        }

        .logo-dot {
           width: 8px;
           height: 8px;
           background: var(--color-accent);
           border-radius: 50%;
        }

        .footer-desc {
           color: #a3a3a3;
           line-height: 1.6;
           font-size: 15px;
           margin-bottom: 32px;
           max-width: 300px;
        }

        .social-row {
           display: flex;
           gap: 12px;
        }

        .social-btn {
           width: 36px;
           height: 36px;
           border-radius: 50%;
           background: rgba(255,255,255,0.1);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
           transition: all 0.2s;
        }

        .social-btn:hover {
           background: var(--color-accent);
           color: #050505;
        }

        .footer-col h4 {
           color: white;
           font-size: 13px;
           font-weight: 700;
           letter-spacing: 1px;
           margin-bottom: 24px;
           text-transform: uppercase;
        }

        .footer-link-list {
           display: flex;
           flex-direction: column;
           gap: 16px;
        }

        .footer-link-list a {
           color: #a3a3a3;
           font-size: 15px;
           transition: color 0.2s;
        }

        .footer-link-list a:hover {
           color: white;
        }

        .contact-list {
           display: flex;
           flex-direction: column;
           gap: 20px;
        }

        .c-item {
           display: flex;
           align-items: flex-start;
           gap: 12px;
           color: #a3a3a3;
           font-size: 15px;
        }

        .c-icon {
           color: var(--color-accent);
           margin-top: 3px;
        }

        .footer-bottom {
           border-top: 1px solid rgba(255,255,255,0.05);
           padding: 30px 0;
           background: #000;
        }

        .bottom-flex {
           display: flex;
           justify-content: space-between;
           align-items: center;
           font-size: 13px;
           color: #525252;
        }

        .legal-links {
           display: flex;
           gap: 24px;
        }

        .legal-links a {
           color: #525252;
           transition: color 0.2s;
           text-decoration: none;
        }

        .legal-links a:hover {
           color: #a3a3a3;
        }

        @media (max-width: 1024px) {
           .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 40px;
           }
        }

        @media (max-width: 600px) {
           .footer-grid {
              grid-template-columns: 1fr;
           }
           .bottom-flex {
              flex-direction: column;
              gap: 16px;
              text-align: center;
           }
        }
      `}</style>
      </footer>
   )
}

export default Footer
