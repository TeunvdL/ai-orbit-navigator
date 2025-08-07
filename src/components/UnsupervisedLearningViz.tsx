import React from 'react';

export default function UnsupervisedLearningViz() {
  // Unlabeled data that forms natural clusters
  const dataPoints = [
    // Cluster 1
    { x: 120, y: 130, color: '#4fc3f7' },
    { x: 140, y: 150, color: '#4fc3f7' },
    { x: 110, y: 160, color: '#4fc3f7' },
    { x: 130, y: 140, color: '#4fc3f7' },
    // Cluster 2
    { x: 250, y: 120, color: '#ff6b35' },
    { x: 270, y: 140, color: '#ff6b35' },
    { x: 240, y: 130, color: '#ff6b35' },
    { x: 260, y: 125, color: '#ff6b35' },
    // Cluster 3
    { x: 180, y: 250, color: '#4caf50' },
    { x: 200, y: 270, color: '#4caf50' },
    { x: 160, y: 260, color: '#4caf50' },
    { x: 190, y: 240, color: '#4caf50' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg width="320" height="320" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="unsupervisedBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#unsupervisedBg)" />

          {/* Cluster boundaries */}
          <circle cx="125" cy="145" r="35" fill="none" stroke="#4fc3f7" strokeWidth="2" opacity="0.5" strokeDasharray="5,5" />
          <circle cx="255" cy="128" r="30" fill="none" stroke="#ff6b35" strokeWidth="2" opacity="0.5" strokeDasharray="5,5" />
          <circle cx="182" cy="255" r="32" fill="none" stroke="#4caf50" strokeWidth="2" opacity="0.5" strokeDasharray="5,5" />

          {/* Data points */}
          {dataPoints.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="6" fill={point.color} opacity="0.8" filter="url(#glow)" />
          ))}
        </svg>
      </div>
    </div>
  );
}