import React from 'react';

export default function MachineLearningBusinessViz() {
  // Business process improvement data
  const processSteps = [
    { x: 80, y: 200, label: 'Input', efficiency: 60 },
    { x: 160, y: 160, label: 'Process', efficiency: 75 },
    { x: 240, y: 120, label: 'Optimize', efficiency: 90 },
    { x: 320, y: 100, label: 'Output', efficiency: 95 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="businessBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1f2e" />
              <stop offset="50%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#1a202c" />
            </radialGradient>

            {/* Business gradient */}
            <linearGradient id="businessGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3182ce" />
              <stop offset="50%" stopColor="#2b77cb" />
              <stop offset="100%" stopColor="#4299e1" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="businessGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#businessBgGradient)" />

          {/* Process flow line */}
          <path
            d={`M ${processSteps.map(step => `${step.x},${step.y}`).join(' L ')}`}
            fill="none"
            stroke="url(#businessGradient)"
            strokeWidth="4"
            filter="url(#businessGlow)"
            opacity="0.8"
          />

          {/* Process steps */}
          {processSteps.map((step, index) => (
            <g key={index}>
              {/* Efficiency indicator */}
              <circle
                cx={step.x}
                cy={step.y}
                r={step.efficiency / 5}
                fill="#4299e1"
                opacity="0.3"
                filter="url(#businessGlow)"
              />
              {/* Main step */}
              <circle
                cx={step.x}
                cy={step.y}
                r="12"
                fill="#3182ce"
                opacity="0.9"
              />
              {/* Inner highlight */}
              <circle
                cx={step.x - 2}
                cy={step.y - 2}
                r="4"
                fill="#ffffff"
                opacity="0.7"
              />
              {/* Step label */}
              <text
                x={step.x}
                y={step.y + 30}
                textAnchor="middle"
                fontSize="11"
                fill="#e2e8f0"
                opacity="0.9"
              >
                {step.label}
              </text>
            </g>
          ))}

          {/* ROI indicators */}
          <g opacity="0.7">
            <text x="200" y="280" textAnchor="middle" fontSize="14" fill="#4299e1">
              Business ROI
            </text>
            <text x="200" y="300" textAnchor="middle" fontSize="12" fill="#a0aec0">
              +45% Efficiency
            </text>
          </g>

          {/* Animated value particles */}
          <g opacity="0.4">
            {[1, 2, 3].map(i => (
              <circle key={i} cx={50 + i * 20} cy={350} r="1.5" fill="#4299e1">
                <animate attributeName="cy" values="350;80;350" dur={`${4 + i}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${4 + i}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}