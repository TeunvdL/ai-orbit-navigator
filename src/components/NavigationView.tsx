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

    // Calculate optimal node size and spacing using geometric formula
    const availableWidth = containerSize.width * 0.8; // Use 80% of screen width
    const availableHeight = containerSize.height * 0.7; // Use 70% of screen height
    
    // Calculate node size based on available space
    let nodeSize: number;
    let radius: number;
    
    if (childCount === 1) {
      // Single node - make it reasonably sized
      nodeSize = Math.min(200, Math.min(availableWidth, availableHeight) * 0.3);
      radius = 0;
    } else {
      // Use geometric formula: r = R * sin(π/n) / (1+k)
      const F = 0.78;
      const minDimension = Math.min(containerSize.width, containerSize.height);
      const k = 1/3; // Ratio constant for spacing
      const n = childCount;
      
      // Solve for R: R = (0.5 * F * minDimension) / (1 + sin(π/n) / (1+k))
      const sinTerm = Math.sin(Math.PI / n);
      const denominator = 1 + sinTerm / (1 + k);
      radius = (0.5 * F * minDimension) / denominator;
      
      // Calculate optimal node radius using the geometric formula
      const nodeRadius = radius * sinTerm / (1 + k);
      nodeSize = nodeRadius * 2;
      
      // Ensure minimum viable sizes
      radius = Math.max(radius, 100);
      nodeSize = Math.max(nodeSize, 60);
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
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full">
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

      {/* Information Cards Section - Below the viewport */}
      <div className="relative z-40 mt-[100vh] bg-gradient-to-b from-transparent to-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            About {currentNode.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Overview Card */}
            {currentNode.overview && (
              <div className="bg-gray-800/60 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-cyan-400">Overview</h3>
                </div>
                <p className="text-gray-200 leading-relaxed">{currentNode.overview}</p>
              </div>
            )}

            {/* How It Works Card */}
            {currentNode.howItWorks && (
              <div className="bg-gray-800/60 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-purple-400">How It Works</h3>
                </div>
                <p className="text-gray-200 leading-relaxed">{currentNode.howItWorks}</p>
              </div>
            )}

            {/* Applications Card */}
            {currentNode.applications && currentNode.applications.length > 0 && (
              <div className="bg-gray-800/60 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-green-400">Applications</h3>
                </div>
                <ul className="space-y-2">
                  {currentNode.applications.slice(0, 3).map((app, index) => (
                    <li key={index} className="text-gray-200 flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {app}
                    </li>
                  ))}
                  {currentNode.applications.length > 3 && (
                    <li className="text-gray-400 italic">
                      +{currentNode.applications.length - 3} more...
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Child Categories Card */}
            {currentNode.children && currentNode.children.length > 0 && (
              <div className="bg-gray-800/60 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-yellow-400">Sub-Categories</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {currentNode.children.slice(0, 6).map((child, index) => (
                    <div key={child.id} className="text-sm text-gray-300 bg-gray-700/40 rounded px-2 py-1">
                      {child.name}
                    </div>
                  ))}
                  {currentNode.children.length > 6 && (
                    <div className="text-sm text-gray-400 italic">
                      +{currentNode.children.length - 6} more
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Statistics Card */}
            <div className="bg-gray-800/60 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-blue-400">Quick Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Sub-categories:</span>
                  <span className="text-white font-medium">
                    {currentNode.children?.length || 0}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Level:</span>
                  <span className="text-white font-medium">{path.length}</span>
                </div>
                {currentNode.applications && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Applications:</span>
                    <span className="text-white font-medium">
                      {currentNode.applications.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};