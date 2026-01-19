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
import LoadingScreen from './components/LoadingScreen'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Router>
            <div className="app-container">
                <AnimatePresence mode="wait">
                    {isLoading && (
                        <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
                    )}
                </AnimatePresence>

                {!isLoading && (
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
                                <Route path="/newsroom/halogen-free-cables" element={<CableNews />} />
                                <Route path="/products/cables" element={<CablesLanding />} />
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
