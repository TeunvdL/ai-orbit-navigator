import React from 'react';

const EnsembleLearningViz: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))' }}
      >
        {/* Background gradient */}
        <defs>
          <radialGradient id="ensembleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
          </radialGradient>
          
          {/* Model glow effect */}
          <filter id="modelGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="400" height="400" fill="url(#ensembleGradient)" />

        {/* Individual models arranged in a circle */}
        {/* Model 1 - Decision Tree */}
        <g transform="translate(120, 100)">
          <circle cx="0" cy="0" r="25" fill="#10b981" fillOpacity="0.8" filter="url(#modelGlow)" />
          <path d="M-10,-10 L0,-5 L10,-10 M0,-5 L0,10 M-8,10 L8,10" stroke="white" strokeWidth="2" fill="none" />
          <text x="0" y="40" fontSize="10" fill="#10b981" textAnchor="middle" fontWeight="bold">Model 1</text>
        </g>

        {/* Model 2 - Neural Network */}
        <g transform="translate(280, 120)">
          <circle cx="0" cy="0" r="25" fill="#f59e0b" fillOpacity="0.8" filter="url(#modelGlow)" />
          <circle cx="-8" cy="-5" r="3" fill="white" />
          <circle cx="8" cy="-5" r="3" fill="white" />
          <circle cx="0" cy="8" r="3" fill="white" />
          <line x1="-8" y1="-5" x2="0" y2="8" stroke="white" strokeWidth="1" />
          <line x1="8" y1="-5" x2="0" y2="8" stroke="white" strokeWidth="1" />
          <text x="0" y="40" fontSize="10" fill="#f59e0b" textAnchor="middle" fontWeight="bold">Model 2</text>
        </g>

        {/* Model 3 - SVM */}
        <g transform="translate(300, 280)">
          <circle cx="0" cy="0" r="25" fill="#ef4444" fillOpacity="0.8" filter="url(#modelGlow)" />
          <rect x="-8" y="-8" width="16" height="16" fill="none" stroke="white" strokeWidth="2" />
          <line x1="-5" y1="-5" x2="5" y2="5" stroke="white" strokeWidth="2" />
          <text x="0" y="40" fontSize="10" fill="#ef4444" textAnchor="middle" fontWeight="bold">Model 3</text>
        </g>

        {/* Model 4 - Random Forest */}
        <g transform="translate(100, 300)">
          <circle cx="0" cy="0" r="25" fill="#8b5cf6" fillOpacity="0.8" filter="url(#modelGlow)" />
          <circle cx="-6" cy="-6" r="4" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="6" cy="-6" r="4" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="0" cy="6" r="4" fill="none" stroke="white" strokeWidth="2" />
          <text x="0" y="40" fontSize="10" fill="#8b5cf6" textAnchor="middle" fontWeight="bold">Model 4</text>
        </g>

        {/* Central ensemble combiner */}
        <g transform="translate(200, 200)">
          <circle cx="0" cy="0" r="35" fill="#6366f1" fillOpacity="0.9" filter="url(#modelGlow)" />
          <polygon points="-15,-10 15,-10 10,0 15,10 -15,10 -10,0" fill="white" />
          <text x="0" y="50" fontSize="12" fill="#6366f1" textAnchor="middle" fontWeight="bold">Ensemble</text>
        </g>

        {/* Connection lines showing data flow */}
        <line x1="135" y1="115" x2="175" y2="185" stroke="#6366f1" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="265" y1="135" x2="225" y2="185" stroke="#6366f1" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2.2s" repeatCount="indefinite" />
        </line>
        <line x1="285" y1="265" x2="225" y2="215" stroke="#6366f1" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;10;0" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="115" y1="285" x2="175" y2="215" stroke="#6366f1" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2.1s" repeatCount="indefinite" />
        </line>

        {/* Output arrow */}
        <g transform="translate(200, 270)">
          <path d="M0,0 L0,40 M-10,30 L0,40 L10,30" stroke="#6366f1" strokeWidth="3" fill="none" />
          <text x="0" y="60" fontSize="11" fill="#6366f1" textAnchor="middle" fontWeight="bold">Final Prediction</text>
        </g>

        {/* Floating labels */}
        <text x="50" y="50" fontSize="12" fill="#6366f1" opacity="0.7" fontWeight="bold">Diverse Models</text>
        <text x="280" y="380" fontSize="12" fill="#6366f1" opacity="0.7" fontWeight="bold">Better Performance</text>

        {/* Animated particles showing combination */}
        <g opacity="0.4">
          <circle cx="150" cy="150" r="2" fill="#10b981">
            <animate attributeName="cy" values="150;200;150" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="160" r="2" fill="#f59e0b">
            <animate attributeName="cx" values="250;200;250" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="250" r="2" fill="#ef4444">
            <animate attributeName="cy" values="250;200;250" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="250" r="2" fill="#8b5cf6">
            <animate attributeName="cx" values="150;200;150" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default EnsembleLearningViz;