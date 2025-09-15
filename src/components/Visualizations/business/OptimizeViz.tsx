import React from 'react';

export default function OptimizeViz() {
  // Process optimization stages
  const beforeBars = [
    { x: 100, height: 120, label: 'Task A' },
    { x: 140, height: 140, label: 'Task B' },
    { x: 180, height: 100, label: 'Task C' },
    { x: 220, height: 130, label: 'Task D' },
  ];

  const afterBars = [
    { x: 100, height: 80, label: 'Task A' },
    { x: 140, height: 90, label: 'Task B' },
    { x: 180, height: 70, label: 'Task C' },
    { x: 220, height: 85, label: 'Task D' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="optimizeBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="50%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </radialGradient>

            {/* Before gradient (inefficient) */}
            <linearGradient id="beforeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>

            {/* After gradient (optimized) */}
            <linearGradient id="afterGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="optimizeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#optimizeBgGradient)" />

          {/* Before section */}
          <g>
            <text x="160" y="50" textAnchor="middle" fontSize="12" fill="#ef4444">Before</text>
            {beforeBars.map((bar, index) => (
              <rect
                key={index}
                x={bar.x}
                y={280 - bar.height}
                width="20"
                height={bar.height}
                fill="url(#beforeGradient)"
                filter="url(#optimizeGlow)"
                opacity="0.8"
              />
            ))}
          </g>

          {/* After section */}
          <g>
            <text x="280" y="50" textAnchor="middle" fontSize="12" fill="#10b981">After</text>
            {afterBars.map((bar, index) => (
              <rect
                key={index}
                x={bar.x + 120}
                y={280 - bar.height}
                width="20"
                height={bar.height}
                fill="url(#afterGradient)"
                filter="url(#optimizeGlow)"
                opacity="0.8"
              />
            ))}
          </g>

          {/* Arrow showing optimization */}
          <path
            d="M 190 200 L 210 200 M 205 195 L 210 200 L 205 205"
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
            filter="url(#optimizeGlow)"
          />

          {/* Efficiency metrics */}
          <g opacity="0.8">
            <text x="160" y="320" textAnchor="middle" fontSize="10" fill="#ef4444">
              High Cost
            </text>
            <text x="280" y="320" textAnchor="middle" fontSize="10" fill="#10b981">
              Optimized
            </text>
          </g>

          {/* Performance improvement indicator */}
          <g opacity="0.7">
            <text x="200" y="360" textAnchor="middle" fontSize="14" fill="#10b981">
              +65% Efficiency Gain
            </text>
          </g>

          {/* Animated optimization particles */}
          <g opacity="0.4">
            {[1, 2, 3, 4].map(i => (
              <circle key={i} cx={180 + i * 10} cy={180} r="1.5" fill="#10b981">
                <animate attributeName="cx" values={`${180 + i * 10};${200 + i * 10};${180 + i * 10}`} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* Baseline */}
          <line x1="80" y1="280" x2="340" y2="280" stroke="#374151" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}