import React from 'react';

export default function ReinforcementLearningViz() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg width="320" height="320" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="rlBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#rlBg)" />

          {/* Agent */}
          <circle cx="120" cy="200" r="20" fill="#4fc3f7" filter="url(#glow)" />
          <text x="120" y="205" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Agent</text>

          {/* Environment */}
          <rect x="250" y="150" width="100" height="100" fill="#333" stroke="#fff" strokeWidth="2" rx="10" />
          <text x="300" y="205" textAnchor="middle" fontSize="12" fill="white">Environment</text>

          {/* Action arrow */}
          <path d="M 145 190 Q 200 170 245 180" fill="none" stroke="#4caf50" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="195" y="170" textAnchor="middle" fontSize="10" fill="#4caf50">Action</text>

          {/* Reward arrow */}
          <path d="M 255 220 Q 200 240 145 210" fill="none" stroke="#ff6b35" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="200" y="250" textAnchor="middle" fontSize="10" fill="#ff6b35">Reward</text>

          {/* Reward symbols */}
          <text x="320" y="130" fontSize="16" fill="#ffd700">+</text>
          <text x="280" y="280" fontSize="16" fill="#ff4444">-</text>

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}