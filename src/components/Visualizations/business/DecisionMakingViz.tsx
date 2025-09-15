import React from 'react';

export default function DecisionMakingViz() {
  // Decision tree structure
  const nodes = [
    { x: 200, y: 80, type: 'root', label: 'Decision' },
    { x: 120, y: 160, type: 'branch', label: 'Option A' },
    { x: 280, y: 160, type: 'branch', label: 'Option B' },
    { x: 80, y: 240, type: 'outcome', label: 'Result A1' },
    { x: 160, y: 240, type: 'outcome', label: 'Result A2' },
    { x: 240, y: 240, type: 'outcome', label: 'Result B1' },
    { x: 320, y: 240, type: 'outcome', label: 'Result B2' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="decisionBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e293b" />
            </radialGradient>

            {/* Decision gradient */}
            <linearGradient id="decisionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Option gradient */}
            <linearGradient id="optionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            {/* Outcome gradient */}
            <linearGradient id="outcomeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="decisionGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#decisionBgGradient)" />

          {/* Decision tree connections */}
          <g opacity="0.7">
            {/* Root to branches */}
            <line x1="200" y1="80" x2="120" y2="160" stroke="#3b82f6" strokeWidth="3" />
            <line x1="200" y1="80" x2="280" y2="160" stroke="#3b82f6" strokeWidth="3" />
            
            {/* Branches to outcomes */}
            <line x1="120" y1="160" x2="80" y2="240" stroke="#06b6d4" strokeWidth="2" />
            <line x1="120" y1="160" x2="160" y2="240" stroke="#06b6d4" strokeWidth="2" />
            <line x1="280" y1="160" x2="240" y2="240" stroke="#06b6d4" strokeWidth="2" />
            <line x1="280" y1="160" x2="320" y2="240" stroke="#06b6d4" strokeWidth="2" />
          </g>

          {/* Decision nodes */}
          {nodes.map((node, index) => {
            const gradient = node.type === 'root' ? 'url(#decisionGradient)' : 
                           node.type === 'branch' ? 'url(#optionGradient)' : 'url(#outcomeGradient)';
            const radius = node.type === 'root' ? 20 : node.type === 'branch' ? 15 : 12;
            
            return (
              <g key={index}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={gradient}
                  filter="url(#decisionGlow)"
                  opacity="0.9"
                />
                <circle
                  cx={node.x - 2}
                  cy={node.y - 2}
                  r={radius * 0.3}
                  fill="#ffffff"
                  opacity="0.7"
                />
                <text
                  x={node.x}
                  y={node.y + radius + 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#e2e8f0"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Probability indicators */}
          <g opacity="0.6">
            <text x="90" y="135" fontSize="9" fill="#06b6d4">60%</text>
            <text x="250" y="135" fontSize="9" fill="#06b6d4">40%</text>
            <text x="60" y="215" fontSize="8" fill="#10b981">85%</text>
            <text x="140" y="215" fontSize="8" fill="#10b981">15%</text>
            <text x="220" y="215" fontSize="8" fill="#10b981">70%</text>
            <text x="300" y="215" fontSize="8" fill="#10b981">30%</text>
          </g>

          {/* Animated decision flow */}
          <g opacity="0.5">
            <circle cx="200" cy="80" r="3" fill="#ffffff">
              <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Title */}
          <text x="200" y="350" textAnchor="middle" fontSize="14" fill="#e2e8f0">
            Smart Decision Trees
          </text>
        </svg>
      </div>
    </div>
  );
}