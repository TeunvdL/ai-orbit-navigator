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
    );
  }

  return (
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
  );
};