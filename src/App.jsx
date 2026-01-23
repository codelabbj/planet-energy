import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Operations from './pages/Operations'
import Legal from './pages/Legal'
import CableNews from './pages/CableNews'
import CablesLanding from './pages/CablesLanding'
import IndustrialPage from './pages/IndustrialPage'
import SolarPage from './pages/SolarPage'
import HighVoltagePage from './pages/HighVoltagePage'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import Sitemap from './pages/Sitemap'

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)

    const handleLoadingComplete = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        console.log("isLoading:", isLoading, "showContent:", showContent)
    }, [isLoading, showContent])

    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <AnimatePresence mode="wait" onExitComplete={() => setShowContent(true)}>
                    {isLoading && (
                        <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
                    )}
                </AnimatePresence>

                {showContent && (
                    <>
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/operations" element={<Operations />} />
                                <Route path="/legal" element={<Legal />} />
                                <Route path="/cables/newsroom" element={<CableNews />} />
                                <Route path="/cables" element={<CablesLanding />} />
                                <Route path="/industrial" element={<IndustrialPage />} />
                                <Route path="/solar" element={<SolarPage />} />
                                <Route path="/high-voltage" element={<HighVoltagePage />} />
                                <Route path="/sitemap" element={<Sitemap />} />
                            </Routes>
                        </main>
                        <Footer />
                    </>
                )}
            </div>
        </Router>
    )
}

export default App
