import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Link as LinkIcon, Info, ArrowRight } from 'lucide-react'

const mapping = [
  { siemens: 'SINAMICS S120', cable: 'HELUPOWER 600', group: 'Drive Systems' },
  { siemens: 'SIMOTION D425', cable: 'HELUFLEX 500', group: 'Motion Control' },
  { siemens: 'S7-1500 PLC', cable: 'HELUCOM PRO', group: 'Automation' },
]

const CompatibilityTool = () => {
  const [query, setQuery] = useState('')

  const matches = mapping.filter(m => m.siemens.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="comp-tool-corporate section-padding">
      <div className="container tool-grid">

        {/* Left: Content */}
        <div className="tool-content">
          <span className="overline-light">ENGINEERING TOOLS</span>
          <h2 className="title-light">Find the perfect <br /><span className="text-grad">connection.</span></h2>
          <p className="tool-desc">
            Ensure system reliability by pairing your specific Siemens drives and controllers with the certified Helukabel solutions.
          </p>

          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search Siemens System (e.g. SINAMICS)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right: Results / Interactive Area */}
        <div className="tool-interface">
          <AnimatePresence mode="popLayout">
            {matches.length > 0 ? (
              <div className="results-list">
                {matches.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="match-card"
                  >
                    <div className="match-row">
                      <div className="match-node">
                        <span className="label">System</span>
                        <span className="value">{item.siemens}</span>
                      </div>

                      <div className="match-link">
                        <LinkIcon size={16} />
                      </div>

                      <div className="match-node right">
                        <span className="label">Cable Match</span>
                        <span className="value accent">{item.cable}</span>
                      </div>
                    </div>
                    <div className="match-footer">
                      <span className="verified-badge">✓ Verified</span>
                      <span className="group-name">{item.group}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-results"
              >
                <div className="empty-state-icon">
                  <Info size={32} />
                </div>
                <h3>No direct match found.</h3>
                <p>Our technical team can engineer a custom solution for your specific configuration.</p>
                <button className="btn-solid-small">Contact Engineering <ArrowRight size={14} /></button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .comp-tool-corporate {
          background: #001f35; /* Darker Navy */
          color: white;
          padding: 100px 0;
        }

        .tool-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 80px;
           align-items: start;
        }

        .overline-light {
            color: var(--color-accent);
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 13px;
            display: block;
            margin-bottom: 24px;
            font-family: 'Outfit', sans-serif;
            text-transform: uppercase;
        }

        .title-light {
            font-family: 'Outfit', sans-serif;
            font-size: 48px;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 24px;
            color: white;
        }
        
        .text-grad {
            color: var(--color-accent);
        }

        .tool-desc {
            font-size: 18px;
            color: rgba(255,255,255,0.7);
            line-height: 1.6;
            margin-bottom: 40px;
            max-width: 500px;
        }

        .search-container {
            position: relative;
            max-width: 450px;
        }

        .search-icon {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-accent);
        }

        .search-input {
            width: 100%;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 4px; /* Corporate square look */
            padding: 18px 18px 18px 50px;
            color: white;
            font-size: 16px;
            font-family: 'Outfit', sans-serif;
            outline: none;
            transition: all 0.2s;
        }

        .search-input:focus {
            background: rgba(255,255,255,0.1);
            border-color: var(--color-accent);
        }

        .tool-interface {
            background: #001524;
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.05);
            padding: 40px;
            min-height: 400px;
        }

        .results-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .match-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 4px;
            padding: 24px;
        }
        
        .match-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .match-node {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .match-node.right {
            text-align: right;
        }

        .label {
            font-size: 11px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            font-weight: 600;
        }
        
        .value {
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 16px;
            color: white;
        }
        
        .value.accent {
            color: var(--color-accent);
        }
        
        .match-link {
            color: rgba(255,255,255,0.2);
        }
        
        .match-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 13px;
        }
        
        .verified-badge {
            color: #4ade80; /* Green */
            font-weight: 600;
        }
        
        .group-name {
            color: rgba(255,255,255,0.5);
        }

        .no-results {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
            padding-top: 60px;
        }
        
        .empty-state-icon {
            margin-bottom: 20px;
            color: rgba(255,255,255,0.2);
        }
        
        .no-results h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 20px;
            margin-bottom: 12px;
        }
        
        .no-results p {
            color: rgba(255,255,255,0.6);
            margin-bottom: 24px;
            font-size: 15px;
        }
        
        .btn-solid-small {
            background: var(--color-accent);
            color: white;
            border: none;
            padding: 10px 20px;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Outfit', sans-serif;
        }

        @media (max-width: 1024px) {
           .tool-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}

export default CompatibilityTool
