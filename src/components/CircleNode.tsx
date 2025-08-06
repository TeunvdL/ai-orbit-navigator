import React from 'react';
import { TreeNodeData, NodePosition } from '../types/treeTypes';
import LinearRegressionViz from './LinearRegressionViz';
import MachineLearningViz from './MachineLearningViz';
import NeuralNetworksViz from './NeuralNetworksViz';
import SymbolicAIViz from './SymbolicAIViz';

interface CircleNodeProps {
  node: TreeNodeData;
  position: NodePosition;
  size: number;
  isRoot?: boolean;
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

  // Check for special visualization nodes
  if (node.id === 'linear-regression' || node.id === 'machine-learning' || node.id === 'neural-networks' || node.id === 'symbolic-ai') {
    let VizComponent;
    if (node.id === 'linear-regression') {
      VizComponent = LinearRegressionViz;
    } else if (node.id === 'machine-learning') {
      VizComponent = MachineLearningViz;
    } else if (node.id === 'neural-networks') {
      VizComponent = NeuralNetworksViz;
    } else if (node.id === 'symbolic-ai') {
      VizComponent = SymbolicAIViz;
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
          <VizComponent />
        </div>
        
        {/* Node label */}
        <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center px-1 bg-black/70 rounded z-20">
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