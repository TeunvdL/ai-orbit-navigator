import React from 'react';

export default function ClusteringViz() {
  // Three natural clusters
  const clusters = [
    { 
      points: [{ x: 120, y: 140 }, { x: 140, y: 160 }, { x: 110, y: 170 }, { x: 130, y: 150 }],
      color: '#4fc3f7',
      center: { x: 125, y: 155 }
    },
    { 
      points: [{ x: 250, y: 120 }, { x: 270, y: 140 }, { x: 240, y: 130 }, { x: 260, y: 125 }],
      color: '#ff6b35',
      center: { x: 255, y: 129 }
    },
    { 
      points: [{ x: 180, y: 250 }, { x: 200, y: 270 }, { x: 160, y: 260 }, { x: 190, y: 240 }],
      color: '#4caf50',
      center: { x: 182, y: 255 }
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 relative">
        <svg width="320" height="320" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="clusteringBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="400" height="400" fill="url(#clusteringBg)" />

          {/* Cluster boundaries and points */}
          {clusters.map((cluster, clusterIndex) => (
            <g key={clusterIndex}>
              {/* Cluster boundary */}
              <circle 
                cx={cluster.center.x} 
                cy={cluster.center.y} 
                r="40" 
                fill="none" 
                stroke={cluster.color} 
                strokeWidth="2" 
                opacity="0.4" 
                strokeDasharray="5,5" 
              />
              
              {/* Cluster center */}
              <circle 
                cx={cluster.center.x} 
                cy={cluster.center.y} 
                r="4" 
                fill={cluster.color} 
                opacity="0.8" 
              />
              
              {/* Data points */}
              {cluster.points.map((point, pointIndex) => (
                <circle 
                  key={pointIndex} 
                  cx={point.x} 
                  cy={point.y} 
                  r="6" 
                  fill={cluster.color} 
                  filter="url(#glow)" 
                />
              ))}
            </g>
          ))}

          <text x="200" y="380" textAnchor="middle" fontSize="12" fill="#fff" opacity="0.7">
            Grouping Similar Data
          </text>
        </svg>
      </div>
    </div>
  );
}