import React from 'react';

export default function InformationRetrievalViz() {
  // Knowledge sources
  const sources = [
    { x: 80, y: 150, label: 'Docs' },
    { x: 150, y: 120, label: 'Data' },
    { x: 220, y: 140, label: 'Web' },
    { x: 290, y: 160, label: 'Files' },
  ];

  // Search results
  const results = [
    { x: 120, y: 250, relevance: 95 },
    { x: 180, y: 270, relevance: 87 },
    { x: 240, y: 290, relevance: 79 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="retrievalBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="50%" stopColor="#075985" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>

            {/* Query gradient */}
            <linearGradient id="queryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Result gradient */}
            <linearGradient id="resultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="retrievalGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#retrievalBgGradient)" />

          {/* Search query box */}
          <rect
            x="150"
            y="60"
            width="100"
            height="25"
            rx="12"
            fill="url(#queryGradient)"
            filter="url(#retrievalGlow)"
            opacity="0.9"
          />
          <text x="200" y="77" textAnchor="middle" fontSize="11" fill="#ffffff">
            Search Query
          </text>

          {/* Knowledge sources */}
          {sources.map((source, index) => (
            <g key={index}>
              <circle
                cx={source.x}
                cy={source.y}
                r="20"
                fill="url(#queryGradient)"
                filter="url(#retrievalGlow)"
                opacity="0.7"
              />
              <text
                x={source.x}
                y={source.y + 4}
                textAnchor="middle"
                fontSize="10"
                fill="#ffffff"
              >
                {source.label}
              </text>
              {/* Connection to search center */}
              <line
                x1={source.x}
                y1={source.y}
                x2="200"
                y2="180"
                stroke="#0ea5e9"
                strokeWidth="2"
                opacity="0.4"
                strokeDasharray="4,4"
              >
                <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
              </line>
            </g>
          ))}

          {/* Central search processor */}
          <circle
            cx="200"
            cy="180"
            r="25"
            fill="url(#queryGradient)"
            filter="url(#retrievalGlow)"
            opacity="0.9"
          />
          <text x="200" y="185" textAnchor="middle" fontSize="12" fill="#ffffff">
            AI
          </text>

          {/* Search results */}
          {results.map((result, index) => (
            <g key={index}>
              <rect
                x={result.x - 25}
                y={result.y - 10}
                width="50"
                height="20"
                rx="10"
                fill="url(#resultGradient)"
                filter="url(#retrievalGlow)"
                opacity="0.8"
              />
              <text
                x={result.x}
                y={result.y + 3}
                textAnchor="middle"
                fontSize="9"
                fill="#ffffff"
              >
                {result.relevance}% Match
              </text>
              {/* Connection from search center */}
              <line
                x1="200"
                y1="180"
                x2={result.x}
                y2={result.y}
                stroke="#22d3ee"
                strokeWidth="2"
                opacity="0.6"
              />
            </g>
          ))}

          {/* Search beam animation */}
          <g opacity="0.5">
            <circle cx="200" cy="180" r="5" fill="#0ea5e9">
              <animate attributeName="r" values="5;40;5" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Floating information particles */}
          <g opacity="0.4">
            {[1, 2, 3, 4, 5].map(i => (
              <circle key={i} cx={100 + i * 40} cy={350} r="1" fill="#22d3ee">
                <animate attributeName="cy" values="350;60;350" dur={`${4 + i * 0.5}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${4 + i * 0.5}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* Title */}
          <text x="200" y="340" textAnchor="middle" fontSize="14" fill="#22d3ee">
            Knowledge Discovery
          </text>
        </svg>
      </div>
    </div>
  );
}