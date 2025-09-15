import React from 'react';

export default function TextAnalysisViz() {
  // Text analysis components
  const textElements = [
    { x: 100, y: 140, width: 60, height: 15, type: 'sentiment', color: '#10b981', label: '+' },
    { x: 180, y: 160, width: 80, height: 15, type: 'keyword', color: '#3b82f6', label: 'Key' },
    { x: 120, y: 200, width: 70, height: 15, type: 'entity', color: '#f59e0b', label: 'Entity' },
    { x: 210, y: 220, width: 90, height: 15, type: 'topic', color: '#8b5cf6', label: 'Topic' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="textBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#111827" />
            </radialGradient>

            {/* Analysis gradients */}
            <linearGradient id="sentimentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="keywordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            <linearGradient id="entityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <linearGradient id="topicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#textBgGradient)" />

          {/* Document representation */}
          <rect
            x="80"
            y="100"
            width="240"
            height="180"
            rx="8"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Text lines (simulated document content) */}
          <g opacity="0.3">
            {[120, 140, 160, 180, 200, 220, 240, 260].map((y, index) => (
              <rect
                key={index}
                x="100"
                y={y}
                width={Math.random() * 100 + 100}
                height="3"
                fill="#9ca3af"
                rx="1"
              />
            ))}
          </g>

          {/* Analysis highlights */}
          {textElements.map((element, index) => {
            const gradientId = `${element.type}Gradient`;
            return (
              <g key={index}>
                <rect
                  x={element.x}
                  y={element.y}
                  width={element.width}
                  height={element.height}
                  fill={`url(#${gradientId})`}
                  filter="url(#textGlow)"
                  opacity="0.8"
                  rx="3"
                >
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
                </rect>
                {/* Analysis tag */}
                <rect
                  x={element.x + element.width + 5}
                  y={element.y - 5}
                  width="25"
                  height="15"
                  fill={element.color}
                  opacity="0.9"
                  rx="7"
                />
                <text
                  x={element.x + element.width + 17}
                  y={element.y + 5}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#ffffff"
                >
                  {element.label}
                </text>
              </g>
            );
          })}

          {/* AI processor */}
          <circle
            cx="350"
            cy="140"
            r="15"
            fill="url(#topicGradient)"
            filter="url(#textGlow)"
            opacity="0.9"
          />
          <text
            x="350"
            y="145"
            textAnchor="middle"
            fontSize="10"
            fill="#ffffff"
          >
            AI
          </text>

          {/* Analysis results panel */}
          <g opacity="0.7">
            <rect x="80" y="300" width="240" height="60" rx="8" fill="#374151" opacity="0.3" />
            <text x="200" y="320" textAnchor="middle" fontSize="12" fill="#e5e7eb">Analysis Results</text>
            <text x="120" y="340" fontSize="10" fill="#10b981">Sentiment: Positive</text>
            <text x="120" y="355" fontSize="10" fill="#3b82f6">Keywords: 5 identified</text>
            <text x="250" y="340" fontSize="10" fill="#f59e0b">Entities: 3 found</text>
            <text x="250" y="355" fontSize="10" fill="#8b5cf6">Topics: 2 detected</text>
          </g>

          {/* Processing animation */}
          <g opacity="0.4">
            {[1, 2, 3].map(i => (
              <circle key={i} cx={320 + i * 10} cy={140} r="2" fill="#8b5cf6">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}