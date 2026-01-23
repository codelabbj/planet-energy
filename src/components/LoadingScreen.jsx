import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import '../styles/LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // Total loading time in ms
    const intervalTime = 20
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, intervalTime)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, duration + 500) // Slight delay after 100% for impact

    return () => {
      clearInterval(timer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="loading-screen"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="loader-content">
        <motion.div
          className="logo-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.05, 1],
            opacity: 1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={logo}
            alt="Planet Energy"
            className="loader-logo"
            animate={{
              filter: ["drop-shadow(0 0 0px rgba(0,210,106,0))", "drop-shadow(0 0 20px rgba(0,210,106,0.2))", "drop-shadow(0 0 0px rgba(0,210,106,0))"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="counter-wrap">
          <div className="progress-bar-container">
            <div className="progress-bar">
              <motion.div
                className="fill"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
          <div className="count-display">
            <span className="count">{Math.round(count)}%</span>
            <span className="loading-text">Chargement en cours...</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
