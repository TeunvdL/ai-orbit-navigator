import { TreeNodeData } from '../types/treeTypes';

export const aiTaxonomyDataBusiness: TreeNodeData = {
  id: 'business-mode-root',
  name: 'AI', // Match the name of the technical mode root node
  description: 'Artificial Intelligence - The simulation of human intelligence in machines', // Match the description of the technical mode root node
  overview: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. It encompasses a wide range of technologies and techniques aimed at enabling machines to perform tasks that typically require human intelligence.',
  howItWorks: 'AI systems use algorithms and models to process data, recognize patterns, and make decisions. These systems can be rule-based, data-driven, or a combination of both, and they improve over time through learning and adaptation.',
  applications: ['Natural language processing (e.g., chatbots)', 'Computer vision (e.g., facial recognition)', 'Autonomous vehicles', 'Predictive analytics', 'Healthcare diagnostics'],
  advantages: ['Automates repetitive tasks', 'Enhances decision-making', 'Processes large datasets efficiently', 'Enables innovative applications'],
  limitations: ['Ethical concerns', 'Bias in data', 'High computational costs', 'Lack of transparency in decision-making'],
  children: [
    {
      id: 'llm-ai-agent-nlp',
      name: 'LLM / AI Agent / NLP',
      description: 'AI that understands and generates human language.',
      children: []
    },
    {
      id: 'ml-structured-data',
      name: 'Machine Learning (Structured Data)',
      description: 'AI that learns from data to make predictions and decisions.',
      children: [
        {
          id: 'forecasting',
          name: 'Forecasting',
          description: 'Predict future values (e.g., sales, demand)',
          children: []
        },
        {
          id: 'anomaly-detection',
          name: 'Anomaly Detection',
          description: 'Spot unusual patterns (e.g., fraud, equipment failure)',
          children: []
        },
        {
          id: 'scoring-ranking',
          name: 'Scoring & Ranking',
          description: 'Prioritize or score items (e.g., credit scoring)',
          children: []
        },
        {
          id: 'segmentation',
          name: 'Segmentation',
          description: 'Group similar items (e.g., customer segmentation)',
          children: []
        },
        {
          id: 'decision-automation',
          name: 'Decision Automation',
          description: 'Automate rule-based decisions (e.g., loan approvals)',
          children: []
        }
      ]
    }
  ]
};
