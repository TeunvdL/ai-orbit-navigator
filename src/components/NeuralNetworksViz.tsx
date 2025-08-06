import React from 'react';

export default function MachineLearningViz() {
  // Neural network structure: 3 layers (input, hidden, output)
  const inputLayer = [
    { x: 80, y: 120 },
    { x: 80, y: 160 },
    { x: 80, y: 200 },
    { x: 80, y: 240 },
  ];
  
  const hiddenLayer = [
    { x: 200, y: 100 },
    { x: 200, y: 140 },
    { x: 200, y: 180 },
    { x: 200, y: 220 },
    { x: 200, y: 260 },
  ];
  
  const outputLayer = [
    { x: 320, y: 140 },
    { x: 320, y: 200 },
  ];

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
              <stop offset="0%" stopColor="#1e1a2e" />
              <stop offset="50%" stopColor="#2a1f3d" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </radialGradient>

            {/* Connection gradient */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="50%" stopColor="#f7931e" />
              <stop offset="100%" stopColor="#ffd23f" />
            </linearGradient>

            {/* Node glow */}
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Connection glow */}
            <filter id="connectionGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#mlBgGradient)" />

          {/* Neural network connections */}
          <g opacity="0.6">
            {/* Input to hidden connections */}
            {inputLayer.map((input, i) => 
              hiddenLayer.map((hidden, j) => (
                <line
                  key={`input-${i}-hidden-${j}`}
                  x1={input.x}
                  y1={input.y}
                  x2={hidden.x}
                  y2={hidden.y}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  filter="url(#connectionGlow)"
                />
              ))
            )}

            {/* Hidden to output connections */}
            {hiddenLayer.map((hidden, i) => 
              outputLayer.map((output, j) => (
                <line
                  key={`hidden-${i}-output-${j}`}
                  x1={hidden.x}
                  y1={hidden.y}
                  x2={output.x}
                  y2={output.y}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  filter="url(#connectionGlow)"
                />
              ))
            )}
          </g>

          {/* Input layer nodes */}
          {inputLayer.map((node, index) => (
            <g key={`input-${index}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r="12"
                fill="#4fc3f7"
                filter="url(#nodeGlow)"
                opacity="0.9"
              />
              <circle
                cx={node.x - 2}
                cy={node.y - 2}
                r="4"
                fill="#ffffff"
                opacity="0.7"
              />
            </g>
          ))}

          {/* Hidden layer nodes */}
          {hiddenLayer.map((node, index) => (
            <g key={`hidden-${index}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r="10"
                fill="#ff6b35"
                filter="url(#nodeGlow)"
                opacity="0.9"
              />
              <circle
                cx={node.x - 1.5}
                cy={node.y - 1.5}
                r="3"
                fill="#ffffff"
                opacity="0.7"
              />
            </g>
          ))}

          {/* Output layer nodes */}
          {outputLayer.map((node, index) => (
            <g key={`output-${index}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r="14"
                fill="#4caf50"
                filter="url(#nodeGlow)"
                opacity="0.9"
              />
              <circle
                cx={node.x - 2.5}
                cy={node.y - 2.5}
                r="5"
                fill="#ffffff"
                opacity="0.7"
              />
            </g>
          ))}

          {/* Data flow particles */}
          <g opacity="0.5">
            <circle cx="50" cy="180" r="2" fill="#4fc3f7">
              <animate attributeName="cx" values="50;380;50" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="45" cy="200" r="1.5" fill="#ff6b35">
              <animate attributeName="cx" values="45;375;45" dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="55" cy="160" r="1.8" fill="#4caf50">
              <animate attributeName="cx" values="55;385;55" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="3.8s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Layer labels */}
          <text x="80" y="300" textAnchor="middle" fontSize="12" fill="#ffffff" opacity="0.7">
            Input
          </text>
          <text x="200" y="300" textAnchor="middle" fontSize="12" fill="#ffffff" opacity="0.7">
            Hidden
          </text>
          <text x="320" y="300" textAnchor="middle" fontSize="12" fill="#ffffff" opacity="0.7">
            Output
          </text>
        </svg>
      </div>
    </div>
  );
}