import React from 'react';
import { TreeNodeData } from '../types/treeTypes';
import { CircleNode } from './CircleNode';

interface HomepageProps {
  rootNode: TreeNodeData;
  onEnterTaxonomy: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({ rootNode, onEnterTaxonomy }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Main AI circle */}
        <div className="relative mb-8 float-animation">
          <CircleNode
            node={rootNode}
            position={{ x: 200, y: 200, angle: 0, radius: 0 }}
            size={400}
            isRoot={true}
            onClick={onEnterTaxonomy}
          />
        </div>

        {/* Tagline */}
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-light text-foreground/90 tracking-wide">
            Navigate the frontier of artificial intelligence
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Explore AI techniques and guide clients to the right solutions through an interactive taxonomy
          </p>
        </div>

        {/* Subtle interaction hint */}
        <div className="mt-8 text-sm text-muted-foreground/70 animate-pulse">
          Click the circle to begin exploration
        </div>
      </div>
    </div>
  );
};