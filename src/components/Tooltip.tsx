import React from 'react';
import { TreeNodeData } from '../types/treeTypes';

interface TooltipProps {
  node: TreeNodeData | null;
  position: { x: number; y: number };
}

export const Tooltip: React.FC<TooltipProps> = ({ node, position }) => {
  if (!node) return null;

  return (
    <div
      className="fixed z-50 p-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-detail max-w-xs pointer-events-none"
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y - 10}px`,
        transform: 'translateY(-50%)'
      }}
    >
      <h3 className="font-semibold text-foreground mb-1">{node.name}</h3>
      <p className="text-sm text-muted-foreground">{node.description}</p>
    </div>
  );
};