export const technicalCatalog = {
    breakers: {
        acb: {
            series: '3WJ',
            ratedCurrent: '800A - 4000A',
            breakingCapacity: '55kA',
            standard: 'IEC 60947-2',
            features: ['LCD Display', 'Contact erosion indicator', 'Ready to close mechanism']
        },
        mccb: {
            series: '3VJ',
            variants: [
                { type: '3VJ1', protection: 'Thermal Magnetic', current: '16A - 125A' },
                { type: '3VJ2', protection: 'Microprocessor', current: '160A - 630A' }
            ],
            breakingCapacity: '10kA - 55kA'
        },
        mcb: {
            series: '5SL/5TJ',
            variants: ['5SL6 (7.5kA)', '5SL4 (10kA)', '5TJ (Digital Industrial)']
        }
    },
    loadBreak: {
        changeover: { series: '3KJ', current: '63A - 3150A', config: '4-pole' },
        superswitch: { series: '3KL8', current: '20A - 800A', protection: 'SDF/SD' }
    },
    switching: {
        contactors: {
            series: ['3MT7', '3TS', '3MH7'],
            applications: ['Power Switching', 'Capacitor Duty', 'Motor Protection']
        },
        overloadRelays: { series: '3MU7', group: 'Class 10', types: ['Contactor mounted', 'Independent'] }
    },
    control: {
        monitoring: { series: '7UG', parameters: ['Voltage', 'Phase', 'Current', 'Earth Fault'] },
        timers: { series: '7PV', types: ['Multifunction', 'Digital', 'Analog'] },
        signaling: { series: '3SB5', types: ['LED Lamps', 'Pushbuttons', 'Emergency Stop'] }
    }
};
