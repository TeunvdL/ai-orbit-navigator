import React, { useState, useEffect } from 'react';
import { TreeNodeData, NodePosition } from '../types/treeTypes';
import { CircleNode } from './CircleNode';
import { Tooltip } from './Tooltip';
import { Breadcrumb } from './Breadcrumb';

interface NavigationViewProps {
  currentNode: TreeNodeData;
  path: TreeNodeData[];
  onNodeClick: (node: TreeNodeData) => void;
  onNavigate: (index: number) => void;
  onBack: () => void;
}

export const NavigationView: React.FC<NavigationViewProps> = ({
  currentNode,
  path,
  onNodeClick,
  onNavigate,
  onBack
}) => {
  const [hoveredNode, setHoveredNode] = useState<TreeNodeData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateNodePositions = (): NodePosition[] => {
    if (!currentNode.children || currentNode.children.length === 0) return [];

    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const children = currentNode.children;
    const childCount = children.length;

    // Calculate radius based on container size and number of children
    const baseRadius = Math.min(containerSize.width, containerSize.height) * 0.25;
    const radius = Math.max(baseRadius, childCount * 30);

    return children.map((_, index) => {
      const angle = (index * 2 * Math.PI) / childCount;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return {
        x,
        y,
        angle,
        radius
      };
    });
  };

  const positions = calculateNodePositions();
  const childNodeSize = Math.max(80, Math.min(150, containerSize.width / (currentNode.children?.length || 1) * 0.8));
  const parentNodeSize = Math.min(containerSize.width, containerSize.height) * 0.6;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Breadcrumb path={path} onNavigate={onNavigate} onBack={onBack} />
      
      {/* Parent node (current level) */}
      <CircleNode
        node={currentNode}
        position={{
          x: containerSize.width / 2,
          y: containerSize.height / 2,
          angle: 0,
          radius: 0
        }}
        size={parentNodeSize}
        isRoot={path.length === 1}
        onHover={setHoveredNode}
      />

      {/* Child nodes */}
      {currentNode.children?.map((child, index) => (
        <CircleNode
          key={child.id}
          node={child}
          position={positions[index]}
          size={childNodeSize}
          onClick={() => onNodeClick(child)}
          onHover={setHoveredNode}
        />
      ))}

      {/* Tooltip */}
      <Tooltip node={hoveredNode} position={mousePosition} />
    </div>
  );
};