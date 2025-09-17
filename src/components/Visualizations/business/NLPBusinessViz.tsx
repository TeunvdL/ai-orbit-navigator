import React from 'react';

export default function NLPBusinessViz() {
  // Chat bubbles representing agent interactions
  const chatBubbles = [
    { x: 100, y: 150, width: 80, height: 30, isAgent: true },
    { x: 220, y: 180, width: 90, height: 35, isAgent: false },
    { x: 80, y: 220, width: 100, height: 32, isAgent: true },
    { x: 240, y: 250, width: 75, height: 28, isAgent: false },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="agentBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#2d1b69" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient>

            {/* Agent gradient */}
            <linearGradient id="agentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>

            {/* User gradient */}
            <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="agentGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#agentBgGradient)" />

          {/* Central AI brain */}
          <g>
            <circle
              cx="200"
              cy="120"
              r="25"
              fill="url(#agentGradient)"
              filter="url(#agentGlow)"
              opacity="0.9"
            />
            <text
              x="200"
              y="125"
              textAnchor="middle"
              fontSize="12"
              fill="#ffffff"
              opacity="0.9"
            >
              AI
            </text>
          </g>

          {/* Chat bubbles */}
          {chatBubbles.map((bubble, index) => (
            <g key={index}>
              <rect
                x={bubble.x}
                y={bubble.y}
                width={bubble.width}
                height={bubble.height}
                rx="15"
                fill={bubble.isAgent ? "url(#agentGradient)" : "url(#userGradient)"}
                opacity="0.8"
                filter="url(#agentGlow)"
              />
              {/* Connection line to AI brain */}
              <line
                x1={bubble.x + bubble.width / 2}
                y1={bubble.y + bubble.height / 2}
                x2="200"
                y2="120"
                stroke={bubble.isAgent ? "#8b5cf6" : "#10b981"}
                strokeWidth="2"
                opacity="0.4"
                strokeDasharray="4,4"
              >
                <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
              </line>
            </g>
          ))}

          {/* Floating conversation indicators */}
          <g opacity="0.6">
            {[1, 2, 3, 4].map(i => (
              <circle key={i} cx={150 + i * 25} cy={320} r="2" fill="#8b5cf6">
                <animate attributeName="cy" values="320;100;320" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* Labels */}
          <text x="200" y="360" textAnchor="middle" fontSize="14" fill="#a78bfa" opacity="0.9">
            Smart Conversations
          </text>
        </svg>
      </div>
    </div>
  );
}