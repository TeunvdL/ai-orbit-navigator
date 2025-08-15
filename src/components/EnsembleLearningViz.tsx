import React from 'react';

export default function EnsembleLearningViz() {
  // Individual models in the ensemble
  const models = [
    { x: 120, y: 140, type: 'Decision Tree', color: '#4fc3f7', accuracy: 0.82 },
    { x: 200, y: 100, type: 'Random Forest', color: '#4caf50', accuracy: 0.87 },
    { x: 280, y: 140, type: 'SVM', color: '#ff6b35', accuracy: 0.85 },
    { x: 160, y: 220, type: 'Neural Net', color: '#9c27b0', accuracy: 0.83 },
    { x: 240, y: 220, type: 'Naive Bayes', color: '#ffc107', accuracy: 0.79 },
  ];

  // Central combiner position
  const combiner = { x: 200, y: 300 };

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
            <radialGradient id="ensembleBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#0f1a2e" />
              <stop offset="50%" stopColor="#1a2332" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>

            {/* Combiner gradient */}
            <radialGradient id="combinerGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="50%" stopColor="#4fc3f7" />
              <stop offset="100%" stopColor="#9c27b0" />
            </radialGradient>

            {/* Model glow */}
            <filter id="modelGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Connection glow */}
            <filter id="connectionGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Pulse glow for combiner */}
            <filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Arrow marker */}
            <marker
              id="ensembleArrow"
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 8 3, 0 6"
                fill="#ffffff"
                opacity="0.7"
              />
            </marker>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#ensembleBgGradient)" />

          {/* Connections from models to combiner */}
          {models.map((model, index) => (
            <line
              key={`connection-${index}`}
              x1={model.x}
              y1={model.y}
              x2={combiner.x}
              y2={combiner.y}
              stroke={model.color}
              strokeWidth="2"
              opacity="0.6"
              filter="url(#connectionGlow)"
              markerEnd="url(#ensembleArrow)"
            />
          ))}

          {/* Individual model nodes - using squares */}
          {models.map((model, index) => (
            <g key={`model-${index}`}>
              {/* Outer glow */}
              <rect
                x={model.x - 20}
                y={model.y - 20}
                width="40"
                height="40"
                fill={model.color}
                opacity="0.2"
                filter="url(#modelGlow)"
                rx="4"
              />
              {/* Main model square */}
              <rect
                x={model.x - 12}
                y={model.y - 12}
                width="24"
                height="24"
                fill={model.color}
                stroke="#ffffff"
                strokeWidth="1"
                opacity="0.9"
                rx="2"
              />
              {/* Inner highlight */}
              <rect
                x={model.x - 6}
                y={model.y - 6}
                width="8"
                height="8"
                fill="#ffffff"
                opacity="0.6"
                rx="1"
              />
              {/* Accuracy indicator */}
              <text
                x={model.x}
                y={model.y + 25}
                textAnchor="middle"
                fontSize="10"
                fill={model.color}
                opacity="0.8"
              >
                {(model.accuracy * 100).toFixed(0)}%
              </text>
            </g>
          ))}

          {/* Central combiner */}
          <g>
            {/* Pulsing outer glow */}
            <circle
              cx={combiner.x}
              cy={combiner.y}
              r="25"
              fill="url(#combinerGradient)"
              opacity="0.4"
              filter="url(#pulseGlow)"
            >
              <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Main combiner circle */}
            <circle
              cx={combiner.x}
              cy={combiner.y}
              r="18"
              fill="url(#combinerGradient)"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.9"
            />
            {/* Inner highlight */}
            <circle
              cx={combiner.x - 4}
              cy={combiner.y - 4}
              r="6"
              fill="#ffffff"
              opacity="0.7"
            />
            {/* Combiner label */}
            <text
              x={combiner.x}
              y={combiner.y + 35}
              textAnchor="middle"
              fontSize="12"
              fill="#ffffff"
              opacity="0.9"
              fontWeight="bold"
            >
              Ensemble
            </text>
            {/* Final accuracy */}
            <text
              x={combiner.x}
              y={combiner.y + 50}
              textAnchor="middle"
              fontSize="10"
              fill="#4caf50"
              opacity="0.8"
            >
              92% Accuracy
            </text>
          </g>

          {/* Voting/combination particles */}
          <g opacity="0.5">
            {models.map((model, index) => (
              <circle 
                key={`particle-${index}`}
                cx={model.x} 
                cy={model.y} 
                r="2" 
                fill={model.color}
              >
                <animate 
                  attributeName="cx" 
                  values={`${model.x};${combiner.x};${model.x}`} 
                  dur={`${3 + index * 0.5}s`} 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="cy" 
                  values={`${model.y};${combiner.y};${model.y}`} 
                  dur={`${3 + index * 0.5}s`} 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0.8;0.2;0.8" 
                  dur={`${3 + index * 0.5}s`} 
                  repeatCount="indefinite" 
                />
              </circle>
            ))}
          </g>

        </svg>
      </div>
    </div>
  );
}