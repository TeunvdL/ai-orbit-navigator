import React from 'react';

export default function FeatureExtractionViz() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg width="320" height="320" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="featureBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#featureBg)" />

          {/* High-dimensional space */}
          <g opacity="0.7">
            <text x="80" y="130" fontSize="10" fill="#4fc3f7">High Dimension</text>
            {/* Complex scattered points */}
            {[...Array(20)].map((_, i) => (
              <circle 
                key={i} 
                cx={60 + Math.random() * 80} 
                cy={140 + Math.random() * 80} 
                r="3" 
                fill="#4fc3f7" 
                opacity="0.6"
              />
            ))}
          </g>

          {/* Arrow showing transformation */}
          <path d="M 160 180 L 220 180" stroke="#fff" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="190" y="175" textAnchor="middle" fontSize="10" fill="#fff">Reduce</text>

          {/* Low-dimensional space */}
          <g opacity="0.9">
            <text x="260" y="130" fontSize="10" fill="#4caf50">Low Dimension</text>
            {/* Organized linear points */}
            {[0, 1, 2, 3, 4].map((i) => (
              <circle 
                key={i} 
                cx={250 + i * 20} 
                cy={160 + i * 10} 
                r="5" 
                fill="#4caf50" 
                filter="url(#glow)"
              />
            ))}
          </g>

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
            </marker>
          </defs>
          
        </svg>
      </div>
    </div>
  );
}