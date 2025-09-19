import React, { useState, useEffect } from 'react';
import { TreeNodeData } from '../types/treeTypes';
import { aiTaxonomyData } from '../data/aiTaxonomyData';
import { aiTaxonomyDataBusiness } from '../data/aiTaxonomyDataBusiness';
import { Homepage } from './Homepage';
import { NavigationView } from './NavigationView';
import { DetailPage } from './DetailPage';
import { Switch } from './ui/switch';
import { Code, Briefcase, Heart, Factory } from 'lucide-react';

type ViewMode = 'homepage' | 'navigation' | 'detail';

export const AIExplorer: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('homepage');
  const [currentPath, setCurrentPath] = useState<TreeNodeData[]>([aiTaxonomyData]);
  const [detailNode, setDetailNode] = useState<TreeNodeData | null>(null);
  const [isBusinessMode, setIsBusinessMode] = useState<boolean>(false);
  const [businessFocus, setBusinessFocus] = useState<'care' | 'industry'>('care'); // New state for business focus

  // Load business mode from localStorage on mount and sync path
  useEffect(() => {
    const savedBusinessMode = localStorage.getItem('businessMode');
    if (savedBusinessMode !== null) {
      const businessMode = JSON.parse(savedBusinessMode);
      setIsBusinessMode(businessMode);
      setCurrentPath([businessMode ? aiTaxonomyDataBusiness : aiTaxonomyData]);
    }
  }, []);

  // Save business mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('businessMode', JSON.stringify(isBusinessMode));
  }, [isBusinessMode]);

  // Load business focus from localStorage on mount
  useEffect(() => {
    const savedBusinessFocus = localStorage.getItem('businessFocus');
    if (savedBusinessFocus !== null) {
      setBusinessFocus(savedBusinessFocus as 'care' | 'industry');
    }
  }, []);

  // Save business focus to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('businessFocus', businessFocus);
  }, [businessFocus]);

  const currentNode = currentPath[currentPath.length - 1];

  const handleBusinessModeToggle = (checked: boolean) => {
    setIsBusinessMode(checked);
    setViewMode('homepage'); // Redirect to homepage on mode switch
    setCurrentPath([checked ? aiTaxonomyDataBusiness : aiTaxonomyData]); // Set the correct tree structure
    setDetailNode(null); // Clear any detail node
  };

  const handleBusinessFocusToggle = (focus: 'care' | 'industry') => {
    setBusinessFocus(focus);
  };

  const handleEnterTaxonomy = () => {
    setViewMode('navigation');
  };

  const handleNodeClick = (node: TreeNodeData) => {
    if (!node.children || node.children.length === 0) {
      // Leaf node - show detail page
      setDetailNode(node);
      setViewMode('detail');
    } else {
      // Has children - navigate deeper
      setCurrentPath([...currentPath, node]);
    }
  };

  const handleNavigate = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  const handleBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1));
    } else {
      setViewMode('homepage');
    }
  };

  const handleHome = () => {
    setViewMode('homepage');
    setCurrentPath([isBusinessMode ? aiTaxonomyDataBusiness : aiTaxonomyData]);
  };

  const handleBackToTaxonomy = () => {
    setViewMode('navigation');
    setDetailNode(null);
    // Keep current path to return to the same navigation level
  };

  const getParentName = (node: TreeNodeData): string | undefined => {
    // Find the parent of the detail node in the current path
    for (let i = currentPath.length - 1; i >= 0; i--) {
      const pathNode = currentPath[i];
      if (pathNode.children?.some(child => child.id === node.id)) {
        return pathNode.name;
      }
    }
    return undefined;
  };

  switch (viewMode) {
    case 'homepage':
      return (
        <div className="relative min-h-screen">
          {/* Business Mode Toggle */}
          <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border">
            <Code className="w-4 h-4 text-muted-foreground" />
            <Switch
              id="business-mode"
              checked={isBusinessMode}
              onCheckedChange={handleBusinessModeToggle}
            />
            <Briefcase className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Business Focus Toggle with Icons */}
          {isBusinessMode && (
            <div className="fixed top-16 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border">
              <Heart className="w-4 h-4 text-muted-foreground" /> {/* Care Icon */}
              <Switch
                id="business-focus"
                checked={businessFocus === 'industry'}
                onCheckedChange={(checked) => handleBusinessFocusToggle(checked ? 'industry' : 'care')}
              />
              <Factory className="w-4 h-4 text-muted-foreground" /> {/* Industry Icon */}
            </div>
          )}

          <Homepage
            rootNode={isBusinessMode ? aiTaxonomyDataBusiness : aiTaxonomyData}
            onEnterTaxonomy={handleEnterTaxonomy}
            isBusinessMode={isBusinessMode} // Pass the state to Homepage
          />
        </div>
      );

    case 'navigation':
      return (
        <div className="relative min-h-screen">
          {/* Business Mode Toggle */}
          <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border">
            <Code className="w-4 h-4 text-muted-foreground" />
            <Switch
              id="business-mode"
              checked={isBusinessMode}
              onCheckedChange={handleBusinessModeToggle}
            />
            <Briefcase className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Business Focus Toggle with Icons */}
          {isBusinessMode && (
            <div className="fixed top-16 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border">
              <Heart className="w-4 h-4 text-muted-foreground" /> {/* Care Icon */}
              <Switch
                id="business-focus"
                checked={businessFocus === 'industry'}
                onCheckedChange={(checked) => handleBusinessFocusToggle(checked ? 'industry' : 'care')}
              />
              <Factory className="w-4 h-4 text-muted-foreground" /> {/* Industry Icon */}
            </div>
          )}

          <NavigationView
            currentNode={currentNode}
            path={currentPath}
            onNodeClick={handleNodeClick}
            onNavigate={handleNavigate}
            onBack={handleBack}
            onHome={handleHome}
            isBusinessMode={isBusinessMode} // Pass isBusinessMode
            businessFocus={businessFocus} // Pass businessFocus
          />
        </div>
      );

    case 'detail':
      return detailNode ? (
        <div className="relative min-h-screen">
          {/* Business Mode Toggle */}
          <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border">
            <Code className="w-4 h-4 text-muted-foreground" />
            <Switch
              id="business-mode"
              checked={isBusinessMode}
              onCheckedChange={handleBusinessModeToggle}
            />
            <Briefcase className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Business Focus Toggle with Icons */}
          {isBusinessMode && (
            <div className="fixed top-16 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 border">
              <Heart className="w-4 h-4 text-muted-foreground" /> {/* Care Icon */}
              <Switch
                id="business-focus"
                checked={businessFocus === 'industry'}
                onCheckedChange={(checked) => handleBusinessFocusToggle(checked ? 'industry' : 'care')}
              />
              <Factory className="w-4 h-4 text-muted-foreground" /> {/* Industry Icon */}
            </div>
          )}

          <DetailPage
            node={detailNode}
            getParentName={getParentName}
            onBack={handleBackToTaxonomy}
            isBusinessMode={isBusinessMode}
            businessFocus={businessFocus}
          />
        </div>
      ) : null;

    default:
      return null;
  }
};