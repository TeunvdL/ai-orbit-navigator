import React from 'react';

export default function LinearRegressionViz() {
  // Calculate line equation: y = mx + b
  // Line: (60, 320) to (340, 80)
  const slope = (80 - 320) / (340 - 60); // ≈ -0.857
  const intercept = 320 - slope * 60; // ≈ 371.4
  
  // Function to calculate y value on the line for given x
  const getLineY = (x: number) => slope * x + intercept;
  
  // Data points that follow the line with realistic scatter
  const dataPoints = [
    { x: 80, y: getLineY(80) + 15, size: 3 },      // slightly above line
    { x: 110, y: getLineY(110) - 8, size: 2.5 },   // slightly below line
    { x: 140, y: getLineY(140) + 22, size: 3.5 },  // above line
    { x: 170, y: getLineY(170) - 12, size: 2.8 },  // below line
    { x: 200, y: getLineY(200) + 5, size: 3.2 },   // slightly above line
    { x: 230, y: getLineY(230) - 18, size: 2.7 },  // below line
    { x: 260, y: getLineY(260) + 10, size: 3.1 },  // above line
    { x: 290, y: getLineY(290) - 5, size: 2.9 },   // slightly below line
    { x: 320, y: getLineY(320) + 25, size: 3.3 },  // above line
    { x: 350, y: getLineY(350) - 15, size: 2.6 },  // below line
  ];

  // Line of best fit coordinates - perfectly centered diagonally
  const lineStart = { x: 60, y: 320 };
  const lineEnd = { x: 340, y: 80 };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
        >
          {/* Gradient Definitions */}
          <defs>
            {/* Background gradient */}
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="50%" stopColor="#16213e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>

            {/* Line gradient */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#00ff00" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Point glow filter */}
            <filter id="pointGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Grid pattern */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#bgGradient)" />

          {/* Grid overlay */}
          <rect width="400" height="400" fill="url(#grid)" opacity="0.3" />

          {/* Main content area - centered */}
          <g>
            {/* Regression line with glow */}
            <line
              x1={lineStart.x}
              y1={lineStart.y}
              x2={lineEnd.x}
              y2={lineEnd.y}
              stroke="url(#lineGradient)"
              strokeWidth="4"
              filter="url(#glow)"
              opacity="0.9"
            />

            {/* Data points */}
            {dataPoints.map((point, index) => (
              <g key={index}>
                {/* Outer glow */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={point.size + 2}
                  fill="#00ffff"
                  opacity="0.3"
                  filter="url(#pointGlow)"
                />
                {/* Main point */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={point.size}
                  fill="#00ffff"
                  opacity="0.9"
                />
                {/* Inner highlight */}
                <circle
                  cx={point.x - 0.5}
                  cy={point.y - 0.5}
                  r={point.size * 0.4}
                  fill="#ffffff"
                  opacity="0.6"
                />
              </g>
            ))}

            {/* Floating particles for atmosphere */}
            <g opacity="0.4">
              <circle cx="120" cy="120" r="1" fill="#ff00ff">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="280" cy="160" r="0.8" fill="#00ff00">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="340" cy="120" r="1.2" fill="#00ffff">
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="280" r="0.9" fill="#ff00ff">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="90" r="1.1" fill="#00ff00">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="90" cy="200" r="0.7" fill="#00ffff">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="300" r="1" fill="#ff00ff">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="350" r="0.8" fill="#00ff00">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.2s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>

          {/* Subtle outer glow */}
          <rect 
            width="400" 
            height="400" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            opacity="0.3"
            filter="url(#glow)"
          />
        </svg>
      </div>
    </div>
  );
}