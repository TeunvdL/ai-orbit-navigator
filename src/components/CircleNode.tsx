import React from 'react';
import { TreeNodeData, NodePosition } from '../types/treeTypes';
import LinearRegressionViz from './LinearRegressionViz';
import MachineLearningViz from './MachineLearningViz';
import NeuralNetworksViz from './NeuralNetworksViz';
import SymbolicAIViz from './SymbolicAIViz';
import SupervisedLearningViz from './SupervisedLearningViz';
import UnsupervisedLearningViz from './UnsupervisedLearningViz';
import ReinforcementLearningViz from './ReinforcementLearningViz';
import RegressionViz from './RegressionViz';
import ClassificationViz from './ClassificationViz';
import ClusteringViz from './ClusteringViz';
import FeatureExtractionViz from './FeatureExtractionViz';
import EnsembleLearningViz from './EnsembleLearningViz';
import MachineLearningCareViz from './MachineLearningCareViz';
import MachineLearningIndustryViz from './MachineLearningIndustryViz';
import SymbolicAICareViz from './SymbolicAICareViz';
import SymbolicAIIndustryViz from './SymbolicAIIndustryViz';

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
    if (isBusinessMode) {
      // Render care or industry visualizations based on businessFocus
      if (node.id === 'machine-learning') {
        VizComponent = businessFocus === 'care' ? MachineLearningCareViz : MachineLearningIndustryViz;
      } else if (node.id === 'symbolic-ai') {
        VizComponent = businessFocus === 'care' ? SymbolicAICareViz : SymbolicAIIndustryViz;
      } else {
        // Default placeholder for other nodes
        VizComponent = () => (
          <div className={`flex items-center justify-center h-full w-full ${businessFocus === 'care' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
            <p>{businessFocus === 'care' ? 'Care-focused Placeholder' : 'Industry-focused Placeholder'}</p>
          </div>
        );
      }
    } else {
      // Render actual visualization in technical mode
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