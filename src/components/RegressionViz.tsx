import React from 'react';

export default function RegressionViz() {
  // Data points for continuous prediction
  const dataPoints = [
    { x: 80, y: 280 },
    { x: 120, y: 250 },
    { x: 160, y: 220 },
    { x: 200, y: 190 },
    { x: 240, y: 160 },
    { x: 280, y: 130 },
    { x: 320, y: 100 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg width="320" height="320" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="regressionBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#regressionBg)" />

          {/* Regression line */}
          <line x1="60" y1="300" x2="340" y2="80" stroke="#4fc3f7" strokeWidth="3" filter="url(#glow)" />

          {/* Data points */}
          {dataPoints.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="5" fill="#ff6b35" filter="url(#glow)" />
          ))}

          {/* Prediction indicators */}
          <circle cx="350" cy="70" r="8" fill="#4caf50" opacity="0.7" strokeDasharray="3,3" stroke="#4caf50" strokeWidth="2" />
          <text x="360" y="75" fontSize="10" fill="#4caf50">Prediction</text>

        </svg>
      </div>
    </div>
  );
}