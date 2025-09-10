import { TreeNodeData } from '../types/treeTypes';

export const aiTaxonomyDataBusiness: TreeNodeData = {
  id: 'business-mode-root',
  name: 'AI',
  description: 'Artificial Intelligence - The simulation of human intelligence in machines',
  overview: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. It encompasses a wide range of technologies and techniques aimed at enabling machines to perform tasks that typically require human intelligence.',
  howItWorks: 'AI systems use algorithms and models to process data, recognize patterns, and make decisions. These systems can be rule-based, data-driven, or a combination of both, and they improve over time through learning and adaptation.',
  applications: ['Natural language processing (e.g., chatbots)', 'Computer vision (e.g., facial recognition)', 'Autonomous vehicles', 'Predictive analytics', 'Healthcare diagnostics'],
  advantages: ['Automates repetitive tasks', 'Enhances decision-making', 'Processes large datasets efficiently', 'Enables innovative applications'],
  limitations: ['Ethical concerns', 'Bias in data', 'High computational costs', 'Lack of transparency in decision-making'],
  children: [
    {
      id: 'ml-structured-data',
      name: 'Machine Learning',
      description: 'AI that learns from structured data to make predictions and decisions.',
      children: [
        {
          id: 'predicting-planning',
          name: 'Predicting & Planning',
          description: 'Techniques for forecasting and planning.',
          children: [
            { id: 'forecasting', name: 'Forecasting', description: 'Predict future values (e.g., sales, demand)', children: [] },
            { id: 'predictive-maintenance', name: 'Predictive Maintenance', description: 'Anticipate equipment failures.', children: [] },
            { id: 'digital-twin', name: 'Digital Twin', description: 'Create virtual replicas of physical systems.', children: [] }
          ]
        },
        {
          id: 'decision-automation',
          name: 'Decision Automation',
          description: 'Automate decisions and prioritize tasks.',
          children: [
            { id: 'decision-automation', name: 'Decision Automation', description: 'Automate rule-based decisions.', children: [] },
            { id: 'scoring-prioritization', name: 'Scoring & Prioritization', description: 'Assign scores or priorities.', children: [] },
            { id: 'anomaly-detection', name: 'Anomaly Detection', description: 'Spot unusual patterns.', children: [] },
            { id: 'segmentation', name: 'Segmentation', description: 'Group similar items.', children: [] },
            { id: 'recommendation-systems', name: 'Recommendation Systems', description: 'Suggest relevant items.', children: [] }
          ]
        },
        {
          id: 'operations-optimization',
          name: 'Operations Optimization',
          description: 'Optimize resources and processes.',
          children: [
            { id: 'engineering-optimization', name: 'Engineering Optimization', description: 'Optimize engineering designs.', children: [] },
            { id: 'planning-optimization', name: 'Planning Optimization', description: 'Optimize planning processes.', children: [] },
            { id: 'process-mining', name: 'Process Mining', description: 'Analyze and optimize workflows.', children: [] }
          ]
        },
        {
          id: 'image-recognition',
          name: 'Image Recognition',
          description: 'Analyze and interpret images.',
          children: []
        }
      ]
    },
    {
      id: 'ai-agents',
      name: 'AI Agents',
      description: 'AI that understands and generates human language.',
      children: [
        {
          id: 'information-retrieval',
          name: 'Information Retrieval',
          description: 'Retrieve and generate information.',
          children: [
            { id: 'document-search-drafting', name: 'Document Search & Drafting', description: 'Generate or retrieve documents.', children: [] },
            { id: 'knowledge-retrieval', name: 'Knowledge Retrieval', description: 'Answer questions using knowledge bases.', children: [] }
          ]
        },
        {
          id: 'conversational-agents',
          name: 'Conversational Agents',
          description: 'Chatbots and virtual assistants.',
          children: []
        },
        {
          id: 'text-analysis',
          name: 'Text Analysis',
          description: 'Analyze and process text.',
          children: [
            { id: 'summarization-extraction', name: 'Summarization & Extraction', description: 'Extract key points or summaries.', children: [] },
            { id: 'sentiment-analysis', name: 'Sentiment Analysis', description: 'Analyze sentiment in text.', children: [] },
            { id: 'text-classification', name: 'Text Classification', description: 'Categorize text.', children: [] }
          ]
        }
      ]
    }
  ]
};
