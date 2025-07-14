import React from 'react';
import { ArrowLeft, Lightbulb, Cog, Target, TrendingUp, AlertTriangle } from 'lucide-react';
import { TreeNodeData } from '../types/treeTypes';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface DetailPageProps {
  node: TreeNodeData;
  parentName?: string;
  onBack: () => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ node, parentName, onBack }) => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Taxonomy
          </Button>
        </div>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">{node.name}</h1>
          {parentName && (
            <p className="text-xl text-muted-foreground">Category: {parentName}</p>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overview */}
          {node.overview && (
            <Card className="cosmic-node border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{node.overview}</p>
              </CardContent>
            </Card>
          )}

          {/* How It Works */}
          {node.howItWorks && (
            <Card className="cosmic-node border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Cog className="w-5 h-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{node.howItWorks}</p>
              </CardContent>
            </Card>
          )}

          {/* Applications */}
          {node.applications && node.applications.length > 0 && (
            <Card className="cosmic-node border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Target className="w-5 h-5" />
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {node.applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Advantages */}
          {node.advantages && node.advantages.length > 0 && (
            <Card className="cosmic-node border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <TrendingUp className="w-5 h-5" />
                  Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {node.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Limitations */}
          {node.limitations && node.limitations.length > 0 && (
            <Card className="cosmic-node border-border/50 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400">
                  <AlertTriangle className="w-5 h-5" />
                  Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {node.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};