import React from 'react';

export default function DetectViz() {
  // Data points with different classifications
  const dataPoints = [
    { x: 120, y: 140, type: 'normal', confidence: 98, anomaly: false },
    { x: 180, y: 160, type: 'normal', confidence: 95, anomaly: false },
    { x: 240, y: 180, type: 'anomaly', confidence: 92, anomaly: true },
    { x: 140, y: 200, type: 'normal', confidence: 97, anomaly: false },
    { x: 200, y: 220, type: 'pattern', confidence: 89, anomaly: false },
    { x: 260, y: 160, type: 'anomaly', confidence: 88, anomaly: true },
    { x: 160, y: 240, type: 'pattern', confidence: 94, anomaly: false },
  ];

  // Detection zones
  const zones = [
    { x: 100, y: 120, width: 80, height: 60, type: 'normal', label: 'Normal' },
    { x: 220, y: 140, width: 70, height: 80, type: 'anomaly', label: 'Anomaly' },
    { x: 140, y: 200, width: 90, height: 50, type: 'pattern', label: 'Pattern' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="detectBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            {/* Detection zone gradients */}
            <linearGradient id="normalZoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="anomalyZoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>

            <linearGradient id="patternZoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            {/* Scanning pulse gradient */}
            <radialGradient id="scanPulseGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </radialGradient>

            {/* Glow filter */}
            <filter id="detectGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Detection scanner filter */}
            <filter id="scannerBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur"/>
              <feMerge> 
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#detectBgGradient)" />

          {/* Detection zones */}
          {zones.map((zone, index) => (
            <g key={index}>
              <rect
                x={zone.x}
                y={zone.y}
                width={zone.width}
                height={zone.height}
                fill={`url(#${zone.type}ZoneGradient)`}
                opacity="0.1"
                rx="8"
                strokeWidth="1"
                stroke={`url(#${zone.type}ZoneGradient)`}
                strokeOpacity="0.3"
              >
                <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
              </rect>
              
              {/* Zone label */}
              <text
                x={zone.x + zone.width / 2}
                y={zone.y - 5}
                textAnchor="middle"
                fontSize="10"
                fill={zone.type === 'normal' ? '#10b981' : zone.type === 'anomaly' ? '#ef4444' : '#3b82f6'}
                opacity="0.8"
              >
                {zone.label}
              </text>
            </g>
          ))}


          {/* Data points */}
          {dataPoints.map((point, index) => {
            const color = point.type === 'normal' ? '#10b981' : 
                         point.type === 'anomaly' ? '#ef4444' : '#3b82f6';
            const pulseDelay = `${index * 0.3}s`;
            
            return (
              <g key={index}>
                {/* Detection circle */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill={color}
                  filter="url(#detectGlow)"
                  opacity="0.8"
                >
                  <animate 
                    attributeName="r" 
                    values="4;7;4" 
                    dur="4s" 
                    begin={pulseDelay}
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Classification indicator */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="12"
                  fill="none"
                  stroke={color}
                  strokeWidth="1"
                  opacity="0.6"
                >
                  <animate 
                    attributeName="r" 
                    values="8;14;8" 
                    dur="4s" 
                    begin={pulseDelay}
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0.6;0.3;0.6" 
                    dur="4s" 
                    begin={pulseDelay}
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Confidence score */}
                <text
                  x={point.x}
                  y={point.y - 15}
                  textAnchor="middle"
                  fontSize="8"
                  fill={color}
                  opacity="0.9"
                >
                  {point.confidence}%
                </text>

                {/* Anomaly warning */}
                {point.anomaly && (
                  <text
                    x={point.x}
                    y={point.y + 25}
                    textAnchor="middle"
                    fontSize="7"
                    fill="#ef4444"
                    opacity="0.8"
                  >
                    !
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
                  </text>
                )}
              </g>
            );
          })}

          {/* AI Detection Engine */}
          <g opacity="0.8">
            <circle 
              cx="350" 
              cy="120" 
              r="12" 
              fill="url(#patternZoneGradient)" 
              filter="url(#detectGlow)"
            >
              <animate attributeName="r" values="10;13;10" dur="5s" repeatCount="indefinite" />
            </circle>
            <text x="350" y="125" textAnchor="middle" fontSize="8" fill="#ffffff">AI</text>
          </g>

          {/* Detection grid overlay */}
          <g opacity="0.1">
            {[0, 1, 2, 3, 4].map(i => (
              <g key={i}>
                <line 
                  x1={80 + i * 60} 
                  y1="100" 
                  x2={80 + i * 60} 
                  y2="280" 
                  stroke="#64748b" 
                  strokeWidth="0.5"
                />
                <line 
                  x1="80" 
                  y1={100 + i * 45} 
                  x2="320" 
                  y2={100 + i * 45} 
                  stroke="#64748b" 
                  strokeWidth="0.5"
                />
              </g>
            ))}
          </g>

          {/* Detection statistics */}
          <g opacity="0.7">
            <rect x="80" y="300" width="240" height="50" rx="8" fill="#1e293b" opacity="0.3" />
            <text x="200" y="320" textAnchor="middle" fontSize="12" fill="#e2e8f0">Detection Results</text>
            <text x="120" y="335" fontSize="10" fill="#10b981">Normal: 4</text>
            <text x="180" y="335" fontSize="10" fill="#ef4444">Anomalies: 2</text>
            <text x="250" y="335" fontSize="10" fill="#3b82f6">Patterns: 2</text>
          </g>

          {/* Processing indicators */}
          <g opacity="0.5">
            {[1, 2, 3].map(i => (
              <circle key={i} cx={320 + i * 8} cy={120} r="2" fill="#8b5cf6">
                <animate 
                  attributeName="opacity" 
                  values="0.2;1;0.2" 
                  dur="1.5s" 
                  begin={`${i * 0.2}s`} 
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