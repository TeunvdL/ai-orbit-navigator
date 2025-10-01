export const aiTaxonomyDataBusiness = {
  "id": "ai-root",
  "name": "AI",
  "description": "Artificial Intelligence - Technologies that enable machines to simulate human intelligence.",
  "overview": "An umbrella term for techniques and systems that perform tasks which normally require human intelligence, including perception, reasoning, learning and interaction.",
  "howItWorks": "AI systems combine data, models, and compute. They are typically built by collecting and preparing data, training models to learn patterns, and deploying those models into services that make predictions or take actions. Common architectures include rule-based systems, machine learning models, and modern deep learning / transformer-based systems.",
  "applications": [
    "Automation and process optimization",
    "Insight generation from large data sets",
    "Customer-facing assistants and chatbots",
    "Predictive maintenance, forecasting and anomaly detection"
  ],
  "advantages": [
    "Scales human capabilities by processing large volumes of data",
    "Automates repetitive and decision-heavy tasks",
    "Can reveal hidden patterns and foresight from historic data"
  ],
  "limitations": [
    "Requires quality data and ongoing maintenance",
    "Can reproduce biases from training data",
    "Often lacks full explainability for complex models"
  ],
  "children": [
    {
      "id": "machine-learning-business",
      "name": "Machine Learning",
      "description": "AI technologies that work with structured data to predict, decide, and optimize.",
      "overview": "A subset of AI where systems improve their performance on tasks through experience (data) rather than explicit programming.",
      "howItWorks": "Machine learning builds statistical models from labeled or unlabeled data. Common workflows include feature engineering, model selection (e.g., decision trees, gradient boosted trees, neural networks), training, validation and deployment. Monitoring for drift and retraining is part of the lifecycle.",
      "applications": [
        "Predictive maintenance",
        "Demand forecasting",
        "Churn prediction",
        "Pricing and fraud detection"
      ],
      "advantages": [
        "Adapts to new data patterns",
        "Automates predictions and scoring at scale",
        "Often yields measurable ROI in business processes"
      ],
      "limitations": [
        "Performance depends on data quality and quantity",
        "Models may overfit or become stale (data drift)",
        "Requires infrastructure for training and monitoring"
      ],
      "children": [
        {
          "id": "predict",
          "name": "Predict",
          "description": "Methods that forecast future trends or behaviors based on historical data. Applications include predictive maintenance, forecasting demand, and creating digital twins to simulate real-world systems.",
          "overview": "Forecasting future values or outcomes using historical or current data to enable proactive decision making.",
          "howItWorks": "Typically uses supervised learning (regression, time-series models) or probabilistic models. Techniques include ARIMA, exponential smoothing, gradient boosting, and recurrent/transformer models for sequential data.",
          "applications": [
            "Demand and sales forecasting",
            "Predictive maintenance for machinery",
            "Financial forecasting and risk estimation",
            "Capacity and workforce planning"
          ],
          "advantages": [
            "Enables proactive actions and planning",
            "Reduces unexpected downtime and stockouts",
            "Improves resource allocation"
          ],
          "limitations": [
            "Forecasts are probabilistic and can be wrong",
            "Performance degrades under sudden regime changes",
            "Requires representative historical data"
          ],
          "tags": ["forecasting", "predictive-maintenance", "digital-twin", "predict", "machine-learning"],
          "children": []
        },
        {
          "id": "optimize",
          "name": "Optimize",
          "description": "Approaches aimed at improving processes, systems, or decisions. This involves tasks like planning optimization, process mining, and recommendation systems to enhance efficiency and decision-making.",
          "overview": "Optimization applies mathematical and algorithmic techniques to find better solutions for allocation, scheduling, routing and configuration problems.",
          "howItWorks": "Combines operations research (linear/integer programming), heuristics, metaheuristics and sometimes reinforcement learning. Models encode objectives, constraints and use solvers or learned policies to propose optimal or near-optimal actions.",
          "applications": [
            "Route and fleet optimization",
            "Production scheduling and planning",
            "Resource allocation and workforce rostering",
            "Personalized recommendations and offers"
          ],
          "advantages": [
            "Can significantly reduce costs and increase throughput",
            "Produces data-driven, repeatable decisions",
            "Enables complex trade-off analysis"
          ],
          "limitations": [
            "May require heavy compute for large problems",
            "Solutions can be sensitive to modeling assumptions",
            "Real-world constraints may be difficult to capture fully"
          ],
          "tags": ["engineering-optimization", "planning-optimization", "process-mining", "prioritization", "recommendation-systems", "decision-automation", "optimize", "machine-learning"],
          "children": []
        },
        {
          "id": "detect",
          "name": "Detect",
          "description": "Techniques used to identify patterns, anomalies, or specific features in data. This includes tasks like anomaly detection, image segmentation, and classification, which help in recognizing and categorizing data effectively.",
          "overview": "Detection focuses on recognizing items of interest or unusual patterns in data streams or records to trigger alerts or downstream actions.",
          "howItWorks": "Uses supervised classification, unsupervised anomaly detection, clustering and image analysis techniques. Approaches include thresholding, isolation forests, autoencoders and convolutional neural networks for visual data.",
          "applications": [
            "Fraud and abuse detection",
            "Quality inspection in manufacturing",
            "Network and security intrusion detection",
            "Medical image abnormality detection"
          ],
          "advantages": [
            "Provides early warning of issues",
            "Automates monitoring at scale",
            "Reduces manual review workload"
          ],
          "limitations": [
            "Can produce false positives and negatives",
            "Requires labeled data for many approaches",
            "Performance may degrade as patterns evolve"
          ],
          "tags": ["anomaly-detection", "segmentation", "image-recognition", "classification", "scoring", "detect", "machine-learning"],
          "children": []
        }
      ]
    },
    {
      "id": "NLP-business",
      "name": "Natural Language Processing",
      "description": "AI technologies that process and understand textual information.",
      "overview": "Techniques that allow computers to read, interpret, generate and reason over human language at scale.",
      "howItWorks": "Modern NLP combines text preprocessing, tokenization, embeddings and large pretrained models (e.g., transformers). Tasks are often solved via supervised fine-tuning or retrieval-augmented generation for knowledge-grounded responses.",
      "applications": [
        "Customer support automation",
        "Document search and knowledge retrieval",
        "Automated summarization and compliance checks",
        "Text classification for routing and monitoring"
      ],
      "advantages": [
        "Processes large volumes of text quickly",
        "Extracts structured insights from unstructured data",
        "Enables conversational interfaces"
      ],
      "limitations": [
        "Can hallucinate or generate incorrect facts",
        "Quality varies across languages and domains",
        "Privacy and data handling concerns when using external APIs"
      ],
      "children": [
        {
          "id": "information-retrieval",
          "name": "Information Retrieval",
          "description": "Search and retrieve relevant documents or knowledge from text sources.",
          "overview": "Enables finding the most relevant documents or passages from large text collections using indexing and ranking techniques.",
          "howItWorks": "Combines full-text indexing, inverted indices and, increasingly, vector-based semantic search using embeddings and nearest-neighbor search. Ranking layers re-order results using BM25 or learned rankers.",
          "applications": [
            "Enterprise document search",
            "Customer support knowledge bases",
            "Legal and compliance discovery",
            "Research and literature search"
          ],
          "advantages": [
            "Faster access to relevant information",
            "Improves agent and employee productivity",
            "Supports retrieval-augmented generation for more accurate answers"
          ],
          "limitations": [
            "Indexes can become stale if data changes frequently",
            "Semantic search requires well-tuned embeddings",
            "May miss niche or poorly documented knowledge"
          ],
          "tags": ["document-search-drafting", "knowledge-retrieval", "information-retrieval", "natural-language-processing"],
          "children": []
        },
        {
          "id": "smart-assistants",
          "name": "Smart Assistants",
          "description": "Conversational agents that interact with users in natural language.",
          "overview": "Systems that understand user intents, manage dialog state and provide useful, contextual responses via text or voice interfaces.",
          "howItWorks": "Built using intent recognition, dialog management, slot filling, and response generation. Modern assistants often use large language models combined with retrieval or knowledge bases to ground responses.",
          "applications": [
            "Customer service chatbots",
            "Virtual agents for internal support",
            "Voice-operated assistants for field workers",
            "Interactive onboarding and training"
          ],
          "advantages": [
            "Available 24/7 to handle routine queries",
            "Scales support without proportional headcount increases",
            "Enables faster user self-service"
          ],
          "limitations": [
            "May misunderstand user intents or context",
            "Requires careful integration for transactional workflows",
            "Needs guardrails to avoid unsafe or incorrect responses"
          ],
          "tags": ["smart-assistants", "natural-language-processing"],
          "children": []
        },
        {
          "id": "text-analysis",
          "name": "Text Analysis",
          "description": "Summarization & Extraction, Sentiment Analysis, Text Classification.",
          "overview": "Covers extracting structured information from text (entities, topics, sentiments) and generating concise summaries or classifications.",
          "howItWorks": "Uses named entity recognition, relation extraction, classification models and sequence-to-sequence models for summarization. Techniques range from classic NLP pipelines to transformer-based models fine-tuned for specific tasks.",
          "applications": [
            "Customer feedback analysis and NPS tracking",
            "Automated report generation and summarization",
            "Compliance monitoring and contract analysis",
            "Routing and prioritization of incoming requests"
          ],
          "advantages": [
            "Turns unstructured text into actionable insights",
            "Reduces manual reading time at scale",
            "Helps monitor sentiment and reputation in real time"
          ],
          "limitations": [
            "Struggles with sarcasm, figurative language and domain jargon",
            "Model performance needs domain-specific tuning",
            "Privacy considerations when analyzing sensitive text"
          ],
          "tags": ["summarization-extraction", "sentiment-analysis", "text-classification", "text-analysis", "natural-language-processing"],
          "children": []
        }
      ]
    }
  ]
};