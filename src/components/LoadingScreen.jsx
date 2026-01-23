import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

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

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-bg-dark);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .loader-title {
          display: none;
        }

        .logo-wrapper {
          margin-bottom: 20px;
        }

        .loader-logo {
          height: 80px;
          width: auto;
          object-fit: contain;
        }

        .counter-wrap {
          width: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .progress-bar-container {
          width: 100%;
          padding: 4px;
          background: rgba(255,255,255,0.03);
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 999px;
          position: relative;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-accent), #00ff80);
          border-radius: 999px;
          box-shadow: 0 0 15px rgba(0,210,106,0.4);
        }

        .count-display {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 4px;
        }

        .count {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--color-accent);
          letter-spacing: 1px;
        }

        .loading-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .loader-logo { height: 60px; }
          .counter-wrap { width: 280px; }
        }
      `}</style>
    </motion.div>
  )
}

export default LoadingScreen
