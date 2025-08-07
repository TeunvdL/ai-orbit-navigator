import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
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
  onHome?: () => void;
}

export const NavigationView: React.FC<NavigationViewProps> = ({
  currentNode,
  path,
  onNodeClick,
  onNavigate,
  onBack,
  onHome
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

  const calculateNodePositions = (): { positions: NodePosition[], nodeSize: number } => {
    if (!currentNode.children || currentNode.children.length === 0) return { positions: [], nodeSize: 80 };

    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const children = currentNode.children;
    const childCount = children.length;

    // Calculate optimal node size and spacing
    const availableWidth = containerSize.width * 0.8; // Use 80% of screen width
    const availableHeight = containerSize.height * 0.7; // Use 70% of screen height
    const minSpacing = 20; // Minimum distance between node boundaries
    
    // Calculate node size based on available space
    let nodeSize: number;
    let radius: number;
    
    if (childCount === 1) {
      // Single node - make it reasonably sized
      nodeSize = Math.min(200, Math.min(availableWidth, availableHeight) * 0.3);
      radius = 0;
    } else {
      // Calculate node size first
      const maxNodeSize = Math.min(availableWidth, availableHeight) * 0.2;
      const minNodeSize = 80;
      
      // Calculate circumference needed for all nodes with spacing
      const circumference = childCount * (maxNodeSize + minSpacing);
      const calculatedRadius = circumference / (2 * Math.PI);
      
      // Ensure the circle fits within available space
      const maxRadius = Math.min(availableWidth, availableHeight) / 2 - maxNodeSize / 2;
      const optimalRadius = Math.min(calculatedRadius, maxRadius);
      
      // Recalculate node size based on the optimal radius
      const availableCircumference = 2 * Math.PI * optimalRadius;
      const spacePerNode = availableCircumference / childCount;
      nodeSize = Math.max(minNodeSize, Math.min(maxNodeSize, spacePerNode - minSpacing));
      
      // Apply user's formula: R = 0.5 * F * min(wh, ww) - r
      // Where F = 0.85, R = radius of circle on which node centers lie, r = node radius
      const F = 0.85;
      const minDimension = Math.min(containerSize.width, containerSize.height);
      const nodeRadius = nodeSize / 2;
      radius = 0.5 * F * minDimension - nodeRadius;
      
      // Ensure minimum radius
      radius = Math.max(radius, 100);
    }

    const positions = children.map((_, index) => {
      if (childCount === 1) {
        return {
          x: centerX,
          y: centerY,
          angle: 0,
          radius: 0
        };
      }
      
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

    return { positions, nodeSize };
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

  const { positions, nodeSize: childNodeSize } = calculateNodePositions();
  const parentNodeSize = Math.min(containerSize.width, containerSize.height) * 0.6;

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full h-screen overflow-hidden">
      {/* Radial Color Highlights */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgb(0, 255, 255) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgb(255, 0, 255) 0%, transparent 50%)
          `
        }}>
        </div>
      </div>
      
      <Breadcrumb path={path} onNavigate={onNavigate} onBack={onBack} />
      
      {/* Home button */}
      {onHome && (
        <button
          onClick={onHome}
          className="absolute top-4 left-4 z-50 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          aria-label="Go to homepage"
        >
          <Home size={20} />
        </button>
      )}
      
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