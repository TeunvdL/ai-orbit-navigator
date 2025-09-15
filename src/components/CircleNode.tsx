import React from 'react';
import { TreeNodeData, NodePosition } from '../types/treeTypes';
import LinearRegressionViz from './Visualizations/technical/LinearRegressionViz';
import MachineLearningViz from './Visualizations/technical/MachineLearningViz';
import NeuralNetworksViz from './Visualizations/technical/NeuralNetworksViz';
import SymbolicAIViz from './Visualizations/technical/SymbolicAIViz';
import SupervisedLearningViz from './Visualizations/technical/SupervisedLearningViz';
import UnsupervisedLearningViz from './Visualizations/technical/UnsupervisedLearningViz';
import ReinforcementLearningViz from './Visualizations/technical/ReinforcementLearningViz';
import RegressionViz from './Visualizations/technical/RegressionViz';
import ClassificationViz from './Visualizations/technical/ClassificationViz';
import ClusteringViz from './Visualizations/technical/ClusteringViz';
import FeatureExtractionViz from './Visualizations/technical/FeatureExtractionViz';
import EnsembleLearningViz from './Visualizations/technical/EnsembleLearningViz';

interface CircleNodeProps {
  node: TreeNodeData;
  position: NodePosition;
  size: number;
  isRoot?: boolean;
  isBusinessMode?: boolean; // Added prop for business mode
  businessFocus?: 'care' | 'industry'; // Added prop for business focus
  onClick?: () => void;
  onHover?: (node: TreeNodeData | null) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const CircleNode: React.FC<CircleNodeProps> = ({
  node,
  position,
  size,
  isRoot = false,
  isBusinessMode = false, // Default to false
  businessFocus, // Get businessFocus prop
  onClick,
  onHover,
  className = '',
  style = {}
}) => {
  const handleMouseEnter = () => {
    onHover?.(node);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
  };

  console.log('CircleNode businessFocus:', businessFocus); // Debug log for businessFocus

  // Business guidance text for different nodes
  const getBusinessGuidance = (nodeId: string): string | null => {
    if (!isBusinessMode || isRoot) return null;
    
    const guidanceMap: { [key: string]: string } = {
      'machine-learning-business': 'Do you work with structured data like spreadsheets, databases, or need predictions?',
      'AI-agents': 'Do you work with text, documents, or need conversational interfaces?',
      'predict-plan': 'Need forecasting, demand planning, or risk assessment?',
      'decision-making': 'Want to automate decisions or personalize recommendations?', 
      'optimize': 'Looking to improve efficiency, reduce costs, or enhance performance?',
      'image-recognition': 'Work with visual content, photos, or video analysis?',
      'information-retrieval': 'Need to search through documents or knowledge bases?',
      'smart-assistants': 'Want chatbots, virtual assistants, or customer service automation?',
      'text-analysis': 'Need to analyze feedback, extract insights, or summarize content?'
    };
    
    return guidanceMap[nodeId] || null;
  };

  const guidanceText = getBusinessGuidance(node.id);

  // Check for special visualization nodes
  const visualizationNodes = [
    'linear-regression', 'machine-learning', 'neural-networks', 'symbolic-ai',
    'supervised-learning', 'unsupervised-learning', 'reinforcement-learning',
    'regression', 'classification', 'clustering', 'feature-extraction', 'ensemble-learning'
  ];

  if (visualizationNodes.includes(node.id)) {
    let VizComponent;
    switch (node.id) {
      case 'linear-regression': VizComponent = LinearRegressionViz; break;
      case 'machine-learning': VizComponent = MachineLearningViz; break;
      case 'neural-networks': VizComponent = NeuralNetworksViz; break;
      case 'symbolic-ai': VizComponent = SymbolicAIViz; break;
      case 'supervised-learning': VizComponent = SupervisedLearningViz; break;
      case 'unsupervised-learning': VizComponent = UnsupervisedLearningViz; break;
      case 'reinforcement-learning': VizComponent = ReinforcementLearningViz; break;
      case 'regression': VizComponent = RegressionViz; break;
      case 'classification': VizComponent = ClassificationViz; break;
      case 'clustering': VizComponent = ClusteringViz; break;
      case 'feature-extraction': VizComponent = FeatureExtractionViz; break;
      case 'ensemble-learning': VizComponent = EnsembleLearningViz; break;
    }

    return (
      <div className="relative">
      {/* Business Guidance Text Box */}
      {guidanceText && (
        <div 
          className="absolute z-30 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg shadow-lg border border-white/20"
          style={{
            top: `${position.y - size / 2 - 60}px`,
            left: `${position.x}px`,
            width: `${size * 1.1}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="text-center font-medium leading-tight">
            {guidanceText}
          </div>
          {/* Arrow pointing down */}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-600/90"
          />
        </div>
      )}
        
        <div
          className={`cosmic-node absolute flex items-center justify-center text-white font-semibold select-none ${
            isRoot ? 'pulse-glow' : ''
          } ${className}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${position.x - size / 2}px`,
            top: `${position.y - size / 2}px`,
            fontSize: `${Math.max(12, size / 8)}px`,
            lineHeight: '1.2',
            ...style
          }}
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cosmic-node-glow" />
          
          {/* Visualization within circular boundary */}
          <div 
            className="absolute inset-2 rounded-full overflow-hidden z-10"
            style={{
              clipPath: 'circle(50%)'
            }}
          >
            {VizComponent && <VizComponent businessFocus={businessFocus} />} {/* Render VizComponent correctly */}
          </div>
          
          {/* Node label */}
          <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center px-1 bg-black/70 rounded z-20">
            {node.name}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Business Guidance Text Box */}
      {guidanceText && (
        <div 
          className="absolute z-30 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg shadow-lg border border-white/20"
          style={{
            top: `${position.y - size / 2 - 60}px`,
            left: `${position.x}px`,
            width: `${Math.max(280, size * 1.8)}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="text-center font-medium leading-tight">
            {guidanceText}
          </div>
          {/* Arrow pointing down */}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-600/90"
          />
        </div>
      )}

      <div
        className={`cosmic-node absolute flex items-center justify-center text-white font-semibold select-none ${
          isRoot ? 'pulse-glow' : ''
        } ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${position.x - size / 2}px`,
          top: `${position.y - size / 2}px`,
          fontSize: `${Math.max(12, size / 8)}px`,
          lineHeight: '1.2',
          ...style
        }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cosmic-node-glow" />
        <span className="text-center px-2 z-10 relative">
          {node.name}
        </span>
      </div>
    </div>
  );
};