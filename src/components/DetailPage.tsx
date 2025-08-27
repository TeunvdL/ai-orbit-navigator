import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { TreeNodeData } from '../types/treeTypes';
import { Button } from './ui/button';
import { DetailCard } from './DetailCard';

interface DetailPageProps {
  node: TreeNodeData;
  parentName?: string;
  onBack: () => void;
  getParentName?: (node: TreeNodeData) => string | undefined;
}

export const DetailPage: React.FC<DetailPageProps> = ({ node, parentName, onBack }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-y-auto">
      {/* Radial Color Highlights */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgb(0, 255, 255) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgb(255, 0, 255) 0%, transparent 50%)
          `
        }}>
        </div>
      </div>

      <div className="relative min-h-full p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Taxonomy
            </Button>
          </div>

          {/* Card Container */}
          <DetailCard node={node} parentName={parentName} className="mb-6" />
        </div>
      </div>
    </div>
  );
};