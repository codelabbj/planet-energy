import React from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const TechnicalTable = ({ data, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="tech-card-corporate"
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="tech-specs-list">
        {Object.entries(data).map(([key, value], idx) => {
          if (key === 'image') return null;
          return (
            <div key={idx} className="spec-row">
              <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
              <span className="spec-value">
                {Array.isArray(value) ? value.join(' • ') : (typeof value === 'object' ? 'Standard Config' : value)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="card-footer">
        <button className="btn-datasheet">
          <FileText size={14} /> View Datasheet
        </button>
      </div>

      <style jsx>{`
        .tech-card-corporate {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .tech-card-corporate:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateY(-5px);
          border-color: var(--color-accent);
        }

        .card-header {
           background: #f8fafc;
           padding: 20px 24px;
           border-bottom: 1px solid #e2e8f0;
        }

        .card-title {
           font-size: 18px;
           color: #1e293b;
           margin: 0;
           font-weight: 700;
           font-family: 'Outfit', sans-serif;
        }

        .tech-specs-list {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 14px;
          border-bottom: 1px dashed #e2e8f0;
          padding-bottom: 8px;
        }
        
        .spec-row:last-child {
            border-bottom: none;
        }

        .spec-label {
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .spec-value {
          color: #334155;
          text-align: right;
          font-weight: 600;
        }
        
        .card-footer {
            padding: 16px 24px;
            border-top: 1px solid #e2e8f0;
            background: #f8fafc;
        }
        
        .btn-datasheet {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-primary);
            font-size: 13px;
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.2s;
            font-family: 'Outfit', sans-serif;
        }
        
        .btn-datasheet:hover {
            color: var(--color-accent);
        }

        @media (max-width: 600px) {
          .spec-row { flex-direction: column; gap: 4px; align-items: flex-start; }
          .spec-value { text-align: left; }
        }
      `}</style>
    </motion.div>
  )
}

export default TechnicalTable
