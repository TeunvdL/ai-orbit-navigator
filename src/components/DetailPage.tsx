import React from 'react';
import { ArrowLeft, Lightbulb, Cog, Target, TrendingUp, AlertTriangle, Check, AlertCircle } from 'lucide-react';
import { TreeNodeData } from '../types/treeTypes';
import { Button } from './ui/button';

interface DetailPageProps {
  node: TreeNodeData;
  parentName?: string;
  onBack: () => void;
  showBackButton?: boolean;
}

export const DetailPage: React.FC<DetailPageProps> = ({ node, parentName, onBack, showBackButton = true }) => {
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
          {showBackButton && (
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
          )}

          {/* Card Container */}
          <div className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm shadow-2xl rounded-lg border mb-6">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg p-8">
              <h1 className="text-3xl font-semibold tracking-tight flex items-center space-x-3">
                <Lightbulb className="w-8 h-8" />
                <span>{node.name}</span>
              </h1>
              {parentName && (
                <p className="text-cyan-100 text-lg mt-2">Category: {parentName}</p>
              )}
            </div>

            {/* Card Content */}
            <div className="p-8 text-gray-100">
              <div className="grid gap-8">
                {/* Overview */}
                {node.overview && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Overview
                    </h2>
                    <p className="text-lg leading-relaxed">{node.overview}</p>
                  </div>
                )}

                {/* How It Works */}
                {node.howItWorks && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <Cog className="w-5 h-5 mr-2" />
                      How It Works
                    </h2>
                    <p className="text-lg leading-relaxed">{node.howItWorks}</p>
                  </div>
                )}

                {/* Applications */}
                {node.applications && node.applications.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <Target className="w-5 h-5 mr-2" />
                      Applications
                    </h2>
                    <ul className="space-y-2">
                      {node.applications.map((app, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                          <span className="text-lg leading-relaxed">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advantages */}
                {node.advantages && node.advantages.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Advantages
                    </h2>
                    <ul className="space-y-2">
                      {node.advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                          <span className="text-lg leading-relaxed">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limitations */}
                {node.limitations && node.limitations.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Limitations
                    </h2>
                    <ul className="space-y-2">
                      {node.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertCircle className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0" />
                          <span className="text-lg leading-relaxed">{limitation}</span>
                        </li>
                      ))}
                    </ul>
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