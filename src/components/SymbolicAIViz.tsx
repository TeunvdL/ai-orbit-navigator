import React from 'react';

export default function SymbolicAIViz() {
  // Knowledge graph structure
  const nodes = [
    { id: 'A', x: 200, y: 120, label: 'A', type: 'concept' },
    { id: 'B', x: 120, y: 180, label: 'B', type: 'concept' },
    { id: 'C', x: 280, y: 180, label: 'C', type: 'concept' },
    { id: 'D', x: 200, y: 240, label: 'D', type: 'rule' },
    { id: 'E', x: 160, y: 300, label: 'E', type: 'fact' },
    { id: 'F', x: 240, y: 300, label: 'F', type: 'fact' },
  ];

  const edges = [
    { from: 'A', to: 'B', label: 'is-a' },
    { from: 'A', to: 'C', label: 'has' },
    { from: 'B', to: 'D', label: 'implies' },
    { from: 'C', to: 'D', label: 'implies' },
    { from: 'D', to: 'E', label: 'derives' },
    { from: 'D', to: 'F', label: 'derives' },
  ];

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

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
            <radialGradient id="symbolicBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#2d1b69" />
              <stop offset="50%" stopColor="#1a1a3a" />
              <stop offset="100%" stopColor="#0d0d1a" />
            </radialGradient>

            {/* Edge gradient */}
            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9c27b0" />
              <stop offset="50%" stopColor="#673ab7" />
              <stop offset="100%" stopColor="#3f51b5" />
            </linearGradient>

            {/* Logic glow */}
            <filter id="logicGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Reasoning pulse */}
            <filter id="reasoningPulse" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#symbolicBgGradient)" />

          {/* Logic grid pattern */}
          <g opacity="0.2">
            <defs>
              <pattern id="logicGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#9c27b0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#logicGrid)" />
          </g>

          {/* Knowledge graph edges */}
          {edges.map((edge, index) => {
            const fromNode = getNodeById(edge.from);
            const toNode = getNodeById(edge.to);
            if (!fromNode || !toNode) return null;

            return (
              <g key={index}>
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="url(#edgeGradient)"
                  strokeWidth="2"
                  opacity="0.7"
                  filter="url(#logicGlow)"
                  markerEnd="url(#arrowhead)"
                />
                {/* Edge label */}
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2 - 5}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#ffffff"
                  opacity="0.6"
                >
                  {edge.label}
                </text>
              </g>
            );
          })}

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="url(#edgeGradient)"
                opacity="0.8"
              />
            </marker>
          </defs>

          {/* Knowledge graph nodes */}
          {nodes.map((node, index) => {
            const colors = {
              concept: '#e91e63',
              rule: '#ff9800', 
              fact: '#4caf50'
            };
            
            return (
              <g key={node.id}>
                {/* Node glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="18"
                  fill={colors[node.type as keyof typeof colors]}
                  opacity="0.3"
                  filter="url(#reasoningPulse)"
                />
                {/* Main node */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill={colors[node.type as keyof typeof colors]}
                  stroke="#ffffff"
                  strokeWidth="1"
                  opacity="0.9"
                />
                {/* Node highlight */}
                <circle
                  cx={node.x - 3}
                  cy={node.y - 3}
                  r="4"
                  fill="#ffffff"
                  opacity="0.6"
                />
                {/* Node label */}
                <text
                  x={node.x}
                  y={node.y + 2}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#ffffff"
                  fontWeight="bold"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Reasoning particles */}
          <g opacity="0.6">
            <circle cx="100" cy="100" r="1.5" fill="#9c27b0">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                values="0 100 100;360 100 100" 
                dur="8s" 
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="300" cy="120" r="1.2" fill="#673ab7">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                values="0 300 120;-360 300 120" 
                dur="10s" 
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="150" cy="350" r="1.8" fill="#3f51b5">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                values="0 150 350;360 150 350" 
                dur="6s" 
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Logic symbols overlay */}
          <g opacity="0.3">
            <text x="350" y="50" fontSize="20" fill="#9c27b0">∀</text>
            <text x="50" y="80" fontSize="18" fill="#673ab7">∃</text>
            <text x="320" y="350" fontSize="16" fill="#3f51b5">→</text>
            <text x="80" y="380" fontSize="17" fill="#9c27b0">∧</text>
          </g>
        </svg>
      </div>
    </div>
  );
}