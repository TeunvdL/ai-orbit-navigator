import React from 'react';
import { Lightbulb, Cog, Target, TrendingUp, AlertTriangle, Check, AlertCircle } from 'lucide-react';
import { TreeNodeData } from '../types/treeTypes';

interface DetailCardProps {
  node: TreeNodeData;
  parentName?: string;
  className?: string;
}

export const DetailCard: React.FC<DetailCardProps> = ({ node, parentName, className = '' }) => {
  return (
    <div className={`bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm shadow-2xl rounded-lg border ${className}`}>
      {/* Card Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg p-6">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center space-x-3">
          <Lightbulb className="w-6 h-6" />
          <span>{node.name}</span>
        </h2>
        {parentName && (
          <p className="text-cyan-100 text-base mt-2">Category: {parentName}</p>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 text-gray-100">
        <div className="grid gap-6">
          {/* Overview */}
          {node.overview && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                <Lightbulb className="w-4 h-4 mr-2" />
                Overview
              </h3>
              <p className="text-base leading-relaxed">{node.overview}</p>
            </div>
          )}

          {/* How It Works */}
          {node.howItWorks && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                <Cog className="w-4 h-4 mr-2" />
                How It Works
              </h3>
              <p className="text-base leading-relaxed">{node.howItWorks}</p>
            </div>
          )}

          {/* Applications */}
          {node.applications && node.applications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                <Target className="w-4 h-4 mr-2" />
                Applications
              </h3>
              <ul className="space-y-2">
                {node.applications.map((app, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="text-green-400 mt-1 w-4 h-4 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Advantages */}
          {node.advantages && node.advantages.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                <TrendingUp className="w-4 h-4 mr-2" />
                Advantages
              </h3>
              <ul className="space-y-2">
                {node.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="text-green-400 mt-1 w-4 h-4 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Limitations */}
          {node.limitations && node.limitations.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Limitations
              </h3>
              <ul className="space-y-2">
                {node.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <AlertCircle className="text-yellow-400 mt-1 w-4 h-4 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
