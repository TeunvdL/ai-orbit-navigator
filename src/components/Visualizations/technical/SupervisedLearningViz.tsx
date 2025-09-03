import React from 'react';

export default function SupervisedLearningViz() {
  // Training data with labels
  const trainingData = [
    { x: 100, y: 150, label: 'A', color: '#4fc3f7' },
    { x: 130, y: 170, label: 'A', color: '#4fc3f7' },
    { x: 110, y: 190, label: 'A', color: '#4fc3f7' },
    { x: 250, y: 120, label: 'B', color: '#ff6b35' },
    { x: 270, y: 140, label: 'B', color: '#ff6b35' },
    { x: 240, y: 160, label: 'B', color: '#ff6b35' },
    { x: 170, y: 250, label: 'C', color: '#4caf50' },
    { x: 190, y: 270, label: 'C', color: '#4caf50' },
    { x: 150, y: 240, label: 'C', color: '#4caf50' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="supervisedBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#supervisedBg)" />

          {/* Training data points with labels */}
          {trainingData.map((point, index) => (
            <g key={index}>
              <circle cx={point.x} cy={point.y} r="12" fill={point.color} opacity="0.8" filter="url(#glow)" />
              <text x={point.x} y={point.y + 3} textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                {point.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}