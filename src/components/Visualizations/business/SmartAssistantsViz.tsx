import React from 'react';

export default function SmartAssistantsViz() {
  // Conversation flow
  const messages = [
    { x: 120, y: 160, width: 80, height: 25, isUser: true, delay: 0 },
    { x: 200, y: 200, width: 90, height: 30, isUser: false, delay: 1 },
    { x: 110, y: 250, width: 85, height: 28, isUser: true, delay: 2 },
    { x: 210, y: 290, width: 95, height: 32, isUser: false, delay: 3 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Background gradient */}
            <radialGradient id="assistantBgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#5b21b6" />
            </radialGradient>

            {/* User message gradient */}
            <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            {/* Assistant message gradient */}
            <linearGradient id="assistantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="assistantGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="400" height="400" fill="url(#assistantBgGradient)" />

          {/* Assistant avatar */}
          <g>
            <circle
              cx="200"
              cy="80"
              r="25"
              fill="url(#assistantGradient)"
              filter="url(#assistantGlow)"
              opacity="0.9"
            />
            <circle
              cx="195"
              cy="75"
              r="8"
              fill="#ffffff"
              opacity="0.7"
            />
            <text
              x="200"
              y="85"
              textAnchor="middle"
              fontSize="14"
              fill="#ffffff"
              opacity="0.9"
            >
              AI
            </text>
          </g>

          {/* Conversation messages */}
          {messages.map((message, index) => (
            <g key={index} opacity="0">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,20;0,0"
                dur="0.5s"
                begin={`${message.delay * 0.8}s`}
                fill="freeze"
              />
              <animate
                attributeName="opacity"
                values="0;1"
                dur="0.5s"
                begin={`${message.delay * 0.8}s`}
                fill="freeze"
              />
              
              {/* Message bubble */}
              <rect
                x={message.x}
                y={message.y}
                width={message.width}
                height={message.height}
                rx="15"
                fill={message.isUser ? "url(#userGradient)" : "url(#assistantGradient)"}
                filter="url(#assistantGlow)"
                opacity="0.8"
              />
              
              {/* Message tail */}
              <path
                d={message.isUser 
                  ? `M ${message.x} ${message.y + message.height/2} L ${message.x - 8} ${message.y + message.height/2 + 5} L ${message.x} ${message.y + message.height/2 + 10}`
                  : `M ${message.x + message.width} ${message.y + message.height/2} L ${message.x + message.width + 8} ${message.y + message.height/2 + 5} L ${message.x + message.width} ${message.y + message.height/2 + 10}`
                }
                fill={message.isUser ? "url(#userGradient)" : "url(#assistantGradient)"}
                opacity="0.8"
              />

              {/* Message dots */}
              {[1, 2, 3].map(dot => (
                <circle
                  key={dot}
                  cx={message.x + message.width/2 - 10 + dot * 10}
                  cy={message.y + message.height/2}
                  r="2"
                  fill="#ffffff"
                  opacity="0.7"
                />
              ))}
            </g>
          ))}

          {/* Thinking animation */}
          <g opacity="0.5">
            <circle cx="300" cy="120" r="2" fill="#a855f7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="310" cy="125" r="1.5" fill="#a855f7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="130" r="2" fill="#a855f7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Connection lines showing conversation flow */}
          <g opacity="0.3">
            <path
              d="M 200 105 Q 160 130 150 160"
              stroke="#06b6d4"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,4"
            />
            <path
              d="M 200 105 Q 240 150 240 200"
              stroke="#a855f7"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,4"
            />
          </g>

          {/* Status indicator */}
          <text x="200" y="360" textAnchor="middle" fontSize="14" fill="#e2e8f0">
            Interactive Assistant
          </text>
        </svg>
      </div>
    </div>
  );
}