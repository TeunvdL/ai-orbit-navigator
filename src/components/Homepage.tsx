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
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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