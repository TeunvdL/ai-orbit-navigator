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
  const [animatingNode, setAnimatingNode] = useState<TreeNodeData | null>(null);
  const [animatingNodePosition, setAnimatingNodePosition] = useState<NodePosition | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleNodeClick = (node: TreeNodeData, position: NodePosition) => {
    if (isAnimating) return; // Prevent clicks during animation
    
    if (node.children && node.children.length > 0) {
      // Start zoom animation at the original child position
      setIsAnimating(true);
      setAnimatingNode(node);
      setAnimatingNodePosition(position);
      
      // Trigger navigation after a short delay to allow animation to start
      setTimeout(() => {
        onNodeClick(node);
        setAnimatingNode(null);
        setAnimatingNodePosition(null);
        setIsAnimating(false);
      }, 600);
    } else {
      onNodeClick(node);
    }
  };

  const positions = calculateNodePositions();
  const childNodeSize = Math.max(80, Math.min(150, containerSize.width / (currentNode.children?.length || 1) * 0.8));
  const parentNodeSize = Math.min(containerSize.width, containerSize.height) * 0.6;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Breadcrumb path={path} onNavigate={onNavigate} onBack={onBack} />
      
      {/* Title centered at top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
        <h1 className="text-2xl font-bold text-white">{currentNode.name}</h1>
      </div>
      
      {/* Parent node (current level) - transparent and unclickable */}
      <div className="z-10 pointer-events-none">
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
          className="opacity-0"
        />
      </div>

      {/* Child nodes */}
      <div className="z-20">
        {currentNode.children?.map((child, index) => {
          // Hide the node that's currently animating to prevent duplication
          if (animatingNode && child.id === animatingNode.id) {
            return null;
          }
          
          return (
            <CircleNode
              key={child.id}
              node={child}
              position={positions[index]}
              size={childNodeSize}
              onClick={() => handleNodeClick(child, positions[index])}
              onHover={setHoveredNode}
            />
          );
        })}
      </div>

      {/* Animating node */}
      {animatingNode && animatingNodePosition && (
        <div className="z-30">
          <CircleNode
            node={animatingNode}
            position={animatingNodePosition}
            size={childNodeSize}
            isRoot={false}
            onHover={() => {}}
            className="animate-zoom-to-center"
            style={{
              '--start-x': `${animatingNodePosition.x}px`,
              '--start-y': `${animatingNodePosition.y}px`,
              '--center-x': `${containerSize.width / 2}px`,
              '--center-y': `${containerSize.height / 2}px`
            } as React.CSSProperties}
          />
        </div>
      )}

      {/* Tooltip */}
      <Tooltip node={hoveredNode} position={mousePosition} />
    </div>
  );
};