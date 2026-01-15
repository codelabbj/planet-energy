import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Building, Globe } from 'lucide-react'

const offices = [
    { city: 'Ahmedabad', address: '3rd Floor, Prerna Arbour, Chimanlal Girdharlal Road', phone: '+91 79 30927600' },
    { city: 'Bengaluru', address: '2nd Floor, Jyoti Mahal, No. 49, St. Marks Road', phone: '+91 80 33422000' },
    { city: 'Chennai', address: '4th Floor, ETA Mount Central, Seethakathi Business Centre', phone: '+91 44 30474000' },
    { city: 'Hyderabad', address: '5-9-19, 4th Floor, Lakshmi Narasinh Estate', phone: '+91 40 29390089' },
    { city: 'Kolkata', address: '1st Floor, 43, Shanti Palli, Rashbihari Bypass Connector', phone: '+91 33 30939000' },
    { city: 'Mumbai', address: 'Kalwa Works, Thane Belapur Road, Airoli', phone: '+91 22 39663000' }
]

const managers = [
    { region: 'West', towns: ['Belgaum', 'Bharuch', 'Bhopal', 'Boisar', 'Indore', 'Kolhapur', 'Vapi'] },
    { region: 'North', towns: ['Chandigarh', 'Haridwar', 'Jalandhar', 'Ludhiana', 'Rudrapur', 'Sonepat'] },
    { region: 'East', towns: ['Bhubaneshwar', 'Guwahati', 'Jamshedpur', 'Patna', 'Ranchi'] },
    { region: 'South', towns: ['Cochin', 'Madurai', 'Pondicherry', 'Sriperumbudur', 'Vizag'] }
]

const NetworkAtlas = () => {
    const [activeRegion, setActiveRegion] = useState('Offices')

    return (
        <section id="network" className="network-atlas section-padding">
            <div className="container">
                <div className="section-header-luxury">
                    <span className="badge-technical">PAN-INDIA PRESENCE</span>
                    <h2>Extensive <span className="text-grad">Distribution</span> Network</h2>
                    <p>From corporate hubs to regional territory support, SINOPLUS ensures technical availability across every industrial corridor in India.</p>
                </div>

                <div className="network-controls">
                    {['Offices', 'Territory Managers'].map(tab => (
                        <button
                            key={tab}
                            className={`tab-link-premium ${activeRegion === tab ? 'active' : ''}`}
                            onClick={() => setActiveRegion(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="network-display-grid">
                    {activeRegion === 'Offices' ? (
                        <div className="offices-grid">
                            {offices.map((office, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    key={idx}
                                    className="network-card glass-card"
                                >
                                    <div className="card-accent-tag">{office.city}</div>
                                    <Building size={24} className="icon-main" />
                                    <p className="address">{office.address}</p>
                                    <div className="card-actions">
                                        <div className="action-item"><Phone size={14} /> {office.phone}</div>
                                        <div className="action-item"><Globe size={14} /> Map Location</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="managers-grid">
                            {managers.map((group, idx) => (
                                <div key={idx} className="region-block">
                                    <h3>{group.region} Region</h3>
                                    <div className="town-list">
                                        {group.towns.map(town => (
                                            <div key={town} className="town-pill">{town}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .network-atlas { background: #0A192F; color: white; }
        
        .section-header-luxury { text-align: center; max-width: 800px; margin: 0 auto 80px; }
        .badge-technical { color: var(--color-accent); font-weight: 800; letter-spacing: 4px; font-size: 13px; }
        .section-header-luxury h2 { font-size: 56px; margin: 20px 0; }
        .section-header-luxury p { color: rgba(255,255,255,0.6); font-size: 18px; }

        .network-controls { display: flex; justify-content: center; gap: 30px; margin-bottom: 60px; }
        
        .tab-link-premium {
           background: transparent;
           border: 1px solid rgba(255,255,255,0.1);
           color: white;
           padding: 14px 32px;
           border-radius: 100px;
           font-weight: 700;
           font-family: 'Syne';
           cursor: pointer;
           transition: var(--trans-smooth);
        }

        .tab-link-premium.active {
           background: var(--color-accent);
           border-color: var(--color-accent);
           box-shadow: 0 0 30px var(--color-accent-soft);
        }

        .offices-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
           gap: 30px;
        }

        .network-card {
           padding: 40px;
           border-top: none;
           border: 1px solid rgba(255,255,255,0.05);
           position: relative;
        }

        .card-accent-tag {
           position: absolute;
           top: 20px;
           right: 20px;
           font-size: 12px;
           font-weight: 800;
           padding: 6px 14px;
           background: var(--color-accent);
           border-radius: 50px;
           color: white;
        }

        .icon-main { color: var(--color-accent); margin-bottom: 24px; }
        .address { font-size: 16px; margin-bottom: 32px; color: rgba(255,255,255,0.8); min-height: 50px; }

        .card-actions { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; gap: 30px; }
        .action-item { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.5); }

        .managers-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .region-block h3 { color: var(--color-accent); font-size: 20px; margin-bottom: 24px; }
        .town-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .town-pill { padding: 6px 16px; background: rgba(255,255,255,0.05); border-radius: 50px; font-size: 13px; font-weight: 600; }

        @media (max-width: 992px) { .offices-grid, .managers-grid { grid-template-columns: 1fr; } }
      `}</style>
        </section>
    )
}

export default NetworkAtlas
