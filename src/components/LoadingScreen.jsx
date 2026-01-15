import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import splashImage from '../assets/splash.jpeg'

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
      <div className="background-overlay"></div>
      <div className="loader-content">
        <h1 className="loader-title">
          <span className="stroke">PLANET</span>ENERGY
        </h1>
        <div className="counter-wrap">
          <div className="progress-bar">
            <motion.div
              className="fill"
              style={{ width: `${count}%` }}
            />
          </div>
          <span className="count">{Math.round(count)}%</span>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: url(${splashImage}) no-repeat center center fixed;
          background-size: cover;
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
          font-family: 'Syne', sans-serif;
          font-size: 80px;
          font-weight: 800;
          letter-spacing: -2px;
          margin: 0;
        }

        .stroke {
          -webkit-text-stroke: 2px transparent;
          background: linear-gradient(to bottom, #fff 30%, rgba(255,255,255,0.4));
          -webkit-background-clip: text;
          color: transparent;
        }

        .counter-wrap {
          width: 300px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .progress-bar {
          flex-grow: 1;
          height: 2px;
          background: rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          background: var(--color-accent);
        }

        .count {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: var(--color-accent);
          min-width: 40px;
          text-align: right;
        }

        @media (max-width: 768px) {
          .loader-title { font-size: 40px; }
          .counter-wrap { width: 200px; }
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
          z-index: 1;
        }

        .loader-content {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </motion.div>
  )
}

export default LoadingScreen
