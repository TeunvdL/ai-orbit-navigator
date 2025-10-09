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
          "gettingStarted": [
            "Define your prediction target clearly: what specific outcome are you forecasting (equipment failure, demand levels, customer churn)?",
            "Gather historical data with sufficient temporal coverage - typically 2-3 years for seasonal patterns, longer for trend analysis",
            "Start with a simple baseline model (moving average, last-year-same-period) to establish benchmark performance",
            "Identify and engineer relevant leading indicators - external factors that influence your target before it changes",
            "Implement continuous validation using out-of-sample testing and monitor prediction accuracy in production",
            "Build feedback loops to capture actual outcomes and systematically retrain models as new data becomes available"
          ],
          "pitfalls": [
            "Overfitting to historical patterns that won't repeat - validate models on truly held-out data from different time periods",
            "Ignoring domain knowledge in favor of purely statistical approaches - subject matter experts often know crucial seasonal or business factors",
            "Treating predictions as certainties rather than probabilities - always communicate confidence intervals and prediction uncertainty",
            "Failing to account for regime changes (market shifts, new competitors, regulatory changes) - implement drift detection and human review triggers",
            "Not planning for actionability - ensure predictions arrive with enough lead time for business teams to act on them",
            "Underestimating data quality requirements - missing values, delayed reporting, and measurement errors significantly degrade forecast accuracy"
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
          "gettingStarted": [
            "Clearly define your optimization objective: cost reduction, time savings, resource utilization, or a combination with weighted priorities",
            "Map all real-world constraints systematically - capacity limits, business rules, regulatory requirements, and operational dependencies",
            "Establish a baseline using your current manual or rule-based approach to quantify potential improvement opportunities",
            "Start with a simplified problem scope to prove value quickly, then gradually add complexity and constraints",
            "Build stakeholder trust by making optimization recommendations transparent and allow overrides when business judgment requires it",
            "Plan for continuous refinement as business conditions change - optimization models need regular updates to constraint definitions and objectives"
          ],
          "pitfalls": [
            "Over-constraining the problem eliminates all improvement opportunities - work with business teams to identify which constraints are truly hard vs. preferred",
            "Optimizing for a single metric creates unintended consequences elsewhere - use multi-objective optimization or add penalty terms for side effects",
            "Ignoring practical implementation challenges - ensure optimized plans are actionable within your operational systems and processes",
            "Treating optimization as a one-time project - markets change, resources shift, and models must adapt or become obsolete",
            "Not investing in solution quality when heuristics suffice - sometimes 'good enough' solutions found quickly outperform perfect solutions that arrive too late",
            "Underestimating the change management required - optimized plans often differ significantly from historical practices and require explanation and training"
          ],
          "tags": ["engineering-optimization", "planning-optimization", "process-mining", "prioritization", "recommendation-systems", "decision-automation", "optimize", "machine-learning"],
          "children": []
        },
        {
          "id": "detect",
          "name": "Detect",
          "description": "Techniques used to identify patterns, anomalies, or specific features in data. This includes tasks like anomaly detection, image segmentation, and classification, which help in recognizing and categorizing data effectively.",
          "overview": "Detection technologies enable businesses to automatically identify quality issues, anomalies, security threats, and other patterns of interest across visual data, sensor streams, and transactional records. From manufacturing defect detection to fraud monitoring, these AI-powered systems provide real-time insights that help prevent problems before they escalate.",
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
          "gettingStarted": [
            "Identify your detection use case: quality control, anomaly detection, fraud monitoring, or pattern recognition",
            "Collect and label representative examples of normal and anomalous cases from your operations",
            "Start with a focused pilot on high-impact detection scenarios where manual inspection is costly or error-prone",
            "Establish baseline performance metrics and define acceptable false positive/negative rates for your business context",
            "Build integration points for real-time alerts and automated responses to detected issues",
            "Plan for continuous model retraining as new patterns emerge and your processes evolve"
          ],
          "pitfalls": [
            "Insufficient training data diversity leads to models that miss edge cases - ensure your dataset represents the full range of real-world conditions",
            "Setting detection thresholds too sensitively creates alert fatigue from false positives - calibrate based on actual business impact",
            "Failing to account for data drift as processes change - implement monitoring to detect when model performance degrades",
            "Neglecting the human-in-the-loop workflow - design clear escalation paths for ambiguous detections",
            "Underestimating integration complexity with existing systems - plan for how detected issues flow into your current workflows",
            "Not establishing clear ROI metrics upfront - define success criteria beyond technical accuracy (cost savings, quality improvements, etc.)"
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
          "gettingStarted": [
            "Audit your organization's knowledge landscape: identify high-value document repositories, FAQs, wikis, and tribal knowledge currently trapped in email",
            "Start with a focused collection of critical documents (product manuals, policies, procedures) rather than trying to index everything at once",
            "Implement robust document preprocessing: clean PDFs, extract structured data from tables, maintain document metadata and version history",
            "Choose between keyword-based, semantic, or hybrid search depending on query complexity and whether users know exact terminology",
            "Establish content governance processes - assign ownership for keeping information current and removing outdated documents",
            "Monitor search analytics to identify gaps: queries with poor results reveal missing documentation or areas needing better indexing"
          ],
          "pitfalls": [
            "Indexing everything without curation creates information overload - prioritize high-quality, authoritative sources over volume",
            "Neglecting document freshness - implement automated alerts when indexed content becomes outdated or contradictory",
            "Poor chunking strategies for semantic search lead to fragmented answers - test chunk sizes and overlap to preserve context",
            "Ignoring access control and security - ensure retrieval systems respect existing document permissions and data sensitivity",
            "Not testing with real user queries - what works for structured keyword searches often fails for conversational, exploratory questions",
            "Treating search as purely technical - engage information architects and content owners to structure knowledge for discoverability"
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
          "gettingStarted": [
            "Define the assistant's scope narrowly at first: focus on the top 10-20 most common user requests or questions",
            "Design conversation flows with clear fallback paths - when the assistant doesn't understand, gracefully hand off to humans with context",
            "Ground responses in verified knowledge sources or structured data - use retrieval-augmented generation to prevent hallucinations",
            "Build comprehensive intent recognition using real user queries - analyze support tickets and chat logs to capture actual language patterns",
            "Implement robust testing with diverse phrasing, edge cases, and adversarial inputs before production launch",
            "Plan monitoring for conversation quality: track resolution rates, escalation frequency, user satisfaction, and identify gaps in coverage"
          ],
          "pitfalls": [
            "Trying to handle too many use cases at launch - start narrow, nail the core experience, then expand based on usage patterns",
            "Overconfident responses when uncertain - design assistants to explicitly indicate confidence levels and offer alternatives",
            "Poor handoff experiences when escalating to humans - preserve conversation context and explain why escalation occurred",
            "Ignoring multi-turn conversation complexity - users change topics mid-conversation and reference prior exchanges implicitly",
            "Not maintaining dialog state properly leads to repetitive questions - remember user preferences, previous answers, and context",
            "Insufficient guardrails for sensitive topics - implement content filters, bias detection, and policy-compliant overrule responses"
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
          "gettingStarted": [
            "Identify your text analysis goals: sentiment tracking, topic extraction, automated categorization, or information extraction",
            "Collect representative text samples covering different sources, time periods, and edge cases (short messages, technical language, multilingual content)",
            "Establish ground truth by having domain experts label a sample dataset - this guides model selection and validates accuracy",
            "Choose analysis techniques appropriate to your data: rule-based approaches for well-defined patterns, ML models for complex nuanced language",
            "Build human review workflows for ambiguous cases and to continuously improve model performance with corrected examples",
            "Connect insights to action - ensure analysis results integrate with dashboards, alerting systems, or operational workflows"
          ],
          "pitfalls": [
            "Applying sentiment analysis without domain context - 'sick' means negative in healthcare but positive in youth slang",
            "Over-relying on out-of-the-box models for specialized domains - general-purpose models struggle with industry jargon and acronyms",
            "Ignoring class imbalance in training data - rare but critical categories (compliance violations, safety issues) get missed",
            "Not accounting for evolving language - slang, new terminology, and shifting sentiment cues require periodic retraining",
            "Summarization that loses critical details - validate that automated summaries preserve key facts, numbers, and qualifications",
            "Privacy risks when processing user-generated or employee text - implement PII redaction, access controls, and retention policies"
          ],
          "tags": ["summarization-extraction", "sentiment-analysis", "text-classification", "text-analysis", "natural-language-processing"],
          "children": []
        }
      ]
    }
  ]
};