import React from 'react';

export default function MachineLearningViz() {
  // Performance data showing improvement over time
  const iterations = [
    { x: 80, accuracy: 0.3, iteration: 1 },
    { x: 120, accuracy: 0.45, iteration: 2 },
    { x: 160, accuracy: 0.6, iteration: 3 },
    { x: 200, accuracy: 0.72, iteration: 4 },
    { x: 240, accuracy: 0.81, iteration: 5 },
    { x: 280, accuracy: 0.87, iteration: 6 },
    { x: 320, accuracy: 0.91, iteration: 7 },
  ];

  // Convert accuracy to y coordinate (invert since SVG y increases downward)
  const getY = (accuracy: number) => 300 - (accuracy * 200);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg
          width="320"
          height="320"
          viewBox="0 0 400 400"
          className="w-full h-full"
        >
          <defs>
            {/* Background gradient */}
            <radialGradient id="mlBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#0f1419" />
              <stop offset="50%" stopColor="#1a1f2e" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>

            {/* Learning curve gradient */}
            <linearGradient id="learningGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4444" />
              <stop offset="30%" stopColor="#ff8800" />
              <stop offset="60%" stopColor="#44ff44" />
              <stop offset="100%" stopColor="#0088ff" />
            </linearGradient>

            {/* Point glow */}
            <filter id="pointGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Line glow */}
            <filter id="lineGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#mlBgGradient)" />

          {/* Grid lines for reference */}
          <g opacity="0.2">
            <line x1="60" y1="120" x2="340" y2="120" stroke="#888" strokeWidth="0.5" />
            <line x1="60" y1="160" x2="340" y2="160" stroke="#888" strokeWidth="0.5" />
            <line x1="60" y1="200" x2="340" y2="200" stroke="#888" strokeWidth="0.5" />
            <line x1="60" y1="240" x2="340" y2="240" stroke="#888" strokeWidth="0.5" />
            <line x1="60" y1="280" x2="340" y2="280" stroke="#888" strokeWidth="0.5" />
          </g>

          {/* Learning curve line */}
          <path
            d={`M ${iterations.map(point => `${point.x},${getY(point.accuracy)}`).join(' L ')}`}
            fill="none"
            stroke="url(#learningGradient)"
            strokeWidth="3"
            filter="url(#lineGlow)"
            opacity="0.9"
          />

          {/* Data points showing improvement */}
          {iterations.map((point, index) => {
            const y = getY(point.accuracy);
            const color = index < 2 ? '#ff4444' : index < 4 ? '#ff8800' : index < 6 ? '#44ff44' : '#0088ff';
            
            return (
              <g key={index}>
                {/* Outer glow */}
                <circle
                  cx={point.x}
                  cy={y}
                  r="8"
                  fill={color}
                  opacity="0.3"
                  filter="url(#pointGlow)"
                />
                {/* Main point */}
                <circle
                  cx={point.x}
                  cy={y}
                  r="4"
                  fill={color}
                  opacity="0.9"
                />
                {/* Inner highlight */}
                <circle
                  cx={point.x - 1}
                  cy={y - 1}
                  r="1.5"
                  fill="#ffffff"
                  opacity="0.7"
                />
              </g>
            );
          })}

          {/* Experience indicators - floating data */}
          <g opacity="0.4">
            <text x="100" y="290" fontSize="10" fill="#ff8800" opacity="0.7">
              Experience
            </text>
            <text x="230" y="100" fontSize="10" fill="#44ff44" opacity="0.7">
              Performance
            </text>
            
            {/* Animated learning particles */}
            <circle cx="90" cy="320" r="1.5" fill="#ff4444">
              <animate attributeName="cy" values="320;120;320" dur="6s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#ff4444;#44ff44;#ff4444" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="310" r="1.2" fill="#ff8800">
              <animate attributeName="cy" values="310;130;310" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#ff8800;#0088ff;#ff8800" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.9;0.2" dur="5.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="210" cy="315" r="1.8" fill="#ff4444">
              <animate attributeName="cy" values="315;125;315" dur="6.2s" repeatCount="indefinite" />
              <animate attributeName="fill" values="#ff4444;#44ff44;#ff4444" dur="6.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="6.2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Arrow showing upward trend */}
          <path
            d="M 305 215 L 320 200 L 305 185 M 320 200 L 270 200"
            stroke="#0088ff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
            filter="url(#lineGlow)"
          />
        </svg>
      </div>
    </div>
  );
}