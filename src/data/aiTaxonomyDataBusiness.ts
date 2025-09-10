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
          id: 'prediction-forecasting',
          name: 'Prediction & Forecasting',
          description: 'Use historical data to predict future outcomes or recommend actions.',
          children: [
            {
              id: 'forecasting',
              name: 'Forecasting',
              description: 'Predict future values (e.g., sales, demand)',
              children: []
            },
            {
              id: 'recommendation-systems',
              name: 'Recommendation Systems',
              description: 'Suggest relevant items or actions (e.g., products, content)',
              children: []
            }
          ]
        },
        {
          id: 'detection-monitoring',
          name: 'Detection & Monitoring',
          description: 'Identify patterns, anomalies, or groupings in data.',
          children: [
            {
              id: 'anomaly-detection',
              name: 'Anomaly Detection',
              description: 'Spot unusual patterns (e.g., fraud, equipment failure)',
              children: []
            },
            {
              id: 'segmentation',
              name: 'Segmentation',
              description: 'Group similar items (e.g., customer segmentation)',
              children: []
            }
          ]
        },
        {
          id: 'decision-support-automation',
          name: 'Decision Support & Automation',
          description: 'Automate or assist decision-making based on learned patterns.',
          children: [
            {
              id: 'scoring-prioritization',
              name: 'Scoring & Prioritization',
              description: 'Assign scores or priorities (e.g., lead scoring, risk scoring)',
              children: []
            },
            {
              id: 'decision-automation',
              name: 'Decision Automation',
              description: 'Automate rule-based decisions (e.g., loan approvals, expense claims)',
              children: []
            },
            {
              id: 'optimization',
              name: 'Optimization',
              description: 'Optimize resources or processes (e.g., scheduling, route planning)',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 'ai-agent',
      name: 'AI Agents',
      description: 'AI that understands and generates human language.',
      children: [
        {
          id: 'document-search-drafting',
          name: 'Document Search & Drafting',
          description: 'Generate or retrieve documents (e.g., policies, contracts)',
          children: []
        },
        {
          id: 'conversational-agents',
          name: 'Conversational Agents',
          description: 'Chatbots and virtual assistants for customer or internal support',
          children: []
        },
        {
          id: 'knowledge-retrieval',
          name: 'Knowledge Retrieval',
          description: 'Answer questions using internal knowledge bases (e.g., Copilot-style search)',
          children: []
        },
        {
          id: 'text-classification',
          name: 'Text Classification',
          description: 'Categorize text (e.g., spam detection, sentiment analysis)',
          children: []
        },
        {
          id: 'summarization-extraction',
          name: 'Summarization & Extraction',
          description: 'Extract key points or summaries from documents or conversations',
          children: []
        }
      ]
    }
  ]
};
