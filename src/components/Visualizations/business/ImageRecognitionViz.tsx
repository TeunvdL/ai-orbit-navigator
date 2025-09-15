import React from 'react';

export default function ImageRecognitionViz() {
  // Detection boxes representing recognized objects
  const detections = [
    { x: 120, y: 140, width: 60, height: 40, label: 'Product', confidence: 95 },
    { x: 200, y: 160, width: 50, height: 35, label: 'Brand', confidence: 89 },
    { x: 140, y: 200, width: 80, height: 45, label: 'Text', confidence: 92 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="visionBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#4c1d95" />
              <stop offset="50%" stopColor="#5b21b6" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient>

            {/* Detection gradient */}
            <linearGradient id="detectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>

            {/* Scan line gradient */}
            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="visionGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#visionBgGradient)" />

          {/* Camera viewfinder */}
          <rect
            x="100"
            y="120"
            width="200"
            height="150"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            rx="8"
            opacity="0.6"
          />

          {/* Corner brackets */}
          {[[100, 120], [300, 120], [100, 270], [300, 270]].map(([x, y], index) => (
            <g key={index}>
              <path
                d={`M ${x + (index % 2 === 0 ? 0 : -20)} ${y + (index > 1 ? (index % 2 === 0 ? -20 : -20) : 20)} 
                   L ${x} ${y} 
                   L ${x + (index % 2 === 0 ? 20 : 0)} ${y + (index > 1 ? 0 : (index % 2 === 0 ? 0 : -20))}`}
                stroke="#06b6d4"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
            </g>
          ))}

          {/* Detection boxes */}
          {detections.map((detection, index) => (
            <g key={index}>
              <rect
                x={detection.x}
                y={detection.y}
                width={detection.width}
                height={detection.height}
                fill="none"
                stroke="url(#detectionGradient)"
                strokeWidth="2"
                filter="url(#visionGlow)"
                opacity="0.8"
              />
              {/* Detection label */}
              <rect
                x={detection.x}
                y={detection.y - 20}
                width={detection.width}
                height="18"
                fill="url(#detectionGradient)"
                opacity="0.9"
                rx="2"
              />
              <text
                x={detection.x + detection.width / 2}
                y={detection.y - 8}
                textAnchor="middle"
                fontSize="10"
                fill="#ffffff"
              >
                {detection.label} {detection.confidence}%
              </text>
            </g>
          ))}

          {/* Scanning line animation */}
          <rect
            x="100"
            y="120"
            width="200"
            height="2"
            fill="url(#scanGradient)"
            opacity="0.8"
          >
            <animate attributeName="y" values="120;270;120" dur="3s" repeatCount="indefinite" />
          </rect>

          {/* Focus points */}
          <g opacity="0.6">
            {[
              [150, 150], [250, 170], [180, 220], [220, 240]
            ].map(([x, y], index) => (
              <circle key={index} cx={x} cy={y} r="2" fill="#06b6d4">
                <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* AI processing indicator */}
          <g opacity="0.7">
            <circle cx="350" cy="120" r="8" fill="url(#detectionGradient)" filter="url(#visionGlow)">
              <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text x="350" y="105" textAnchor="middle" fontSize="10" fill="#a855f7">AI</text>
          </g>

          {/* Processing status */}
          <text x="200" y="320" textAnchor="middle" fontSize="12" fill="#06b6d4">
            Visual Recognition Active
          </text>
        </svg>
      </div>
    </div>
  );
}