import React, { useState } from 'react';
import { TreeNodeData } from '../types/treeTypes';
import { aiTaxonomyData } from '../data/aiTaxonomyData';
import { Homepage } from './Homepage';
import { NavigationView } from './NavigationView';
import { DetailPage } from './DetailPage';

type ViewMode = 'homepage' | 'navigation' | 'detail';

export const AIExplorer: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('homepage');
  const [currentPath, setCurrentPath] = useState<TreeNodeData[]>([aiTaxonomyData]);
  const [detailNode, setDetailNode] = useState<TreeNodeData | null>(null);

  const currentNode = currentPath[currentPath.length - 1];

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

  const handleBackToTaxonomy = () => {
    setViewMode('navigation');
    setDetailNode(null);
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
        <Homepage
          rootNode={aiTaxonomyData}
          onEnterTaxonomy={handleEnterTaxonomy}
        />
      );

    case 'navigation':
      return (
        <NavigationView
          currentNode={currentNode}
          path={currentPath}
          onNodeClick={handleNodeClick}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      );

    case 'detail':
      return detailNode ? (
        <DetailPage
          node={detailNode}
          parentName={getParentName(detailNode)}
          onBack={handleBackToTaxonomy}
        />
      ) : null;

    default:
      return null;
  }
};