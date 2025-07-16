import React, { useState } from 'react';
import { TreeNodeData } from '../types/treeTypes';
import { CircleNode } from './CircleNode';

interface HomepageProps {
  rootNode: TreeNodeData;
  onEnterTaxonomy: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({ rootNode, onEnterTaxonomy }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnterTaxonomy = () => {
    setIsAnimating(true);
    // Trigger navigation after animation completes
    setTimeout(() => {
      onEnterTaxonomy();
    }, 800);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
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

      {/* Top centered content */}
      <div className="absolute top-16 left-0 right-0 z-10 text-center">
        <h2 className="text-2xl font-light text-foreground/90 tracking-wide">
          Navigate the frontier of artificial intelligence
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mt-4">
          Explore AI techniques and guide clients to the right solutions through an interactive taxonomy
        </p>
      </div>

      {/* Main AI circle in center */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className={`relative ${isAnimating ? '' : 'float-animation'}`}>
          <CircleNode
            node={rootNode}
            position={{ x: 0, y: 0, angle: 0, radius: 0 }}
            size={400}
            isRoot={true}
            onClick={handleEnterTaxonomy}
            className={isAnimating ? 'animate-zoom-homepage' : ''}
          />
        </div>
      </div>

      {/* Bottom right hint - positioned relative to screen center where AI node is */}
      <div className="absolute top-1/2 left-1/2 transform translate-x-52 translate-y-52 text-sm text-muted-foreground/70 animate-pulse z-20">
        Click the circle to begin exploration
      </div>
    </div>
  );
};