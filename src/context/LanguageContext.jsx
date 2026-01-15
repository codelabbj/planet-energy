import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default to 'fr' as requested
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = (lang) => {
        if (lang === 'fr' || lang === 'en') {
            setLanguage(lang);
        } else {
            setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
        }
    };

    // Helper to get nested translation
    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            current = current[key];
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
