import React from 'react';

export default function ClassificationViz() {
  // Data points with distinct classes
  const classA = [
    { x: 120, y: 150 },
    { x: 140, y: 130 },
    { x: 110, y: 170 },
    { x: 130, y: 160 },
  ];

  const classB = [
    { x: 250, y: 120 },
    { x: 270, y: 140 },
    { x: 240, y: 130 },
    { x: 260, y: 150 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg width="320" height="320" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="classificationBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#classificationBg)" />

          {/* Decision boundary */}
          <line x1="185" y1="80" x2="185" y2="280" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />

          {/* Class A points (circles) */}
          {classA.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="8" fill="none" stroke="#4fc3f7" strokeWidth="3" filter="url(#glow)" />
          ))}

          {/* Class B points (squares) */}
          {classB.map((point, index) => (
            <rect key={index} x={point.x - 8} y={point.y - 8} width="16" height="16" fill="none" stroke="#ff6b35" strokeWidth="3" filter="url(#glow)" />
          ))}

          {/* Labels */}
          <text x="125" y="200" fontSize="14" fill="#4fc3f7" fontWeight="bold">Class A</text>
          <text x="255" y="200" fontSize="14" fill="#ff6b35" fontWeight="bold">Class B</text>

          <text x="200" y="380" textAnchor="middle" fontSize="12" fill="#fff" opacity="0.7">
            Discrete Class Labels
          </text>
        </svg>
      </div>
    </div>
  );
}