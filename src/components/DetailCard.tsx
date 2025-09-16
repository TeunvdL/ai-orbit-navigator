import React from 'react';
import { Lightbulb, Cog, Target, TrendingUp, AlertTriangle, Check, AlertCircle, Building2 } from 'lucide-react';
import { TreeNodeData } from '../types/treeTypes';
import { getUseCasesForNode } from '../utils/useCases';

interface DetailCardProps {
  node: TreeNodeData;
  parentName?: string;
  className?: string;
  isBusinessMode?: boolean;
}

export const DetailCard: React.FC<DetailCardProps> = ({ node, parentName, className = '', isBusinessMode = false }) => {
  const useCases = isBusinessMode ? getUseCasesForNode(node.name) : [];
  const isLeafNode = !node.children || node.children.length === 0;
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

          {/* Use Cases - only shown in business mode for leaf nodes */}
          {isBusinessMode && isLeafNode && useCases.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-cyan-400">
                <Building2 className="w-4 h-4 mr-2" />
                Real-World Use Cases
              </h3>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={useCase.metadata.id} className="border border-gray-600/30 rounded-lg p-4 bg-gray-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-base font-semibold text-white">{useCase.metadata.title}</h4>
                      <span className="text-sm text-gray-400">— {useCase.metadata.company}</span>
                    </div>
                    <div className="text-sm text-gray-300 prose prose-sm prose-invert max-w-none">
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: useCase.content
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            .replace(/^## (.*$)/gm, '<h3 class="text-cyan-400 font-semibold mt-4 mb-2">$1</h3>')
                            .replace(/^# (.*$)/gm, '<h2 class="text-white font-bold text-lg mb-3">$1</h2>')
                            .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
                            .replace(/\n\n/g, '</p><p class="mb-2">')
                            .replace(/^(.+)$/gm, '<p class="mb-2">$1</p>')
                        }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
