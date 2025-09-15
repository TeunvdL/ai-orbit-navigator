import React from 'react';

export default function PredictPlanViz() {
  // Forecast data points
  const forecastData = [
    { x: 80, y: 300, type: 'historical' },
    { x: 120, y: 280, type: 'historical' },
    { x: 160, y: 260, type: 'historical' },
    { x: 200, y: 240, type: 'current' },
    { x: 240, y: 220, type: 'forecast' },
    { x: 280, y: 200, type: 'forecast' },
    { x: 320, y: 180, type: 'forecast' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="forecastBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#111827" />
            </radialGradient>

            {/* Historical gradient */}
            <linearGradient id="historicalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            {/* Forecast gradient */}
            <linearGradient id="forecastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="forecastGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#forecastBgGradient)" />

          {/* Grid lines */}
          <g opacity="0.2">
            {[120, 160, 200, 240, 280].map(y => (
              <line key={y} x1="60" y1={y} x2="340" y2={y} stroke="#9ca3af" strokeWidth="1" />
            ))}
          </g>

          {/* Historical trend line */}
          <path
            d={`M ${forecastData.filter(d => d.type === 'historical' || d.type === 'current').map(d => `${d.x},${d.y}`).join(' L ')}`}
            fill="none"
            stroke="url(#historicalGradient)"
            strokeWidth="3"
            filter="url(#forecastGlow)"
          />

          {/* Forecast trend line */}
          <path
            d={`M ${forecastData.filter(d => d.type === 'current' || d.type === 'forecast').map(d => `${d.x},${d.y}`).join(' L ')}`}
            fill="none"
            stroke="url(#forecastGradient)"
            strokeWidth="3"
            strokeDasharray="6,4"
            filter="url(#forecastGlow)"
          />

          {/* Data points */}
          {forecastData.map((point, index) => {
            const color = point.type === 'historical' ? '#6366f1' : 
                         point.type === 'current' ? '#10b981' : '#f59e0b';
            return (
              <g key={index}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill={color}
                  filter="url(#forecastGlow)"
                  opacity="0.9"
                />
                <circle
                  cx={point.x - 1}
                  cy={point.y - 1}
                  r="2"
                  fill="#ffffff"
                  opacity="0.7"
                />
              </g>
            );
          })}

          {/* Current marker */}
          <line x1="200" y1="120" x2="200" y2="320" stroke="#10b981" strokeWidth="2" opacity="0.6" strokeDasharray="4,4" />
          
          {/* Labels */}
          <text x="140" y="350" textAnchor="middle" fontSize="11" fill="#8b5cf6">Historical</text>
          <text x="200" y="100" textAnchor="middle" fontSize="11" fill="#10b981">Now</text>
          <text x="280" y="350" textAnchor="middle" fontSize="11" fill="#f59e0b">Forecast</text>

          {/* Title */}
          <text x="200" y="40" textAnchor="middle" fontSize="14" fill="#e5e7eb">
            Business Forecasting
          </text>

          {/* Floating prediction indicators */}
          <g opacity="0.4">
            {[1, 2, 3].map(i => (
              <circle key={i} cx={300 + i * 15} cy={160} r="1" fill="#f59e0b">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}