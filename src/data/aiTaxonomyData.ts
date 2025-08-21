import { TreeNodeData } from '../types/treeTypes';

export const aiTaxonomyData: TreeNodeData = {
  id: 'root',
  name: 'AI',
  description: 'Artificial Intelligence - The simulation of human intelligence in machines',
  children: [
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Algorithms that improve automatically through experience',
      overview: 'Machine Learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed for every task.',
      howItWorks: 'ML algorithms identify patterns in data to make predictions or decisions, improving their performance over time through training on examples.',
      applications: ['Predictive analytics', 'Image and speech recognition', 'Recommendation systems', 'Autonomous vehicles', 'Fraud detection'],
      advantages: ['Automates complex tasks', 'Improves with more data', 'Can handle large-scale problems', 'Discovers hidden patterns'],
      limitations: ['Requires quality training data', 'Can be biased', 'Black box problem', 'Computationally intensive'],
      children: [
        {
          id: 'supervised-learning',
          name: 'Supervised Learning',
          description: 'Learning with labeled training data',
          overview: 'Supervised learning uses labeled training data to learn a mapping from inputs to outputs, enabling predictions on new, unseen data.',
          howItWorks: 'Algorithms learn from input-output pairs in training data to generalize patterns and make accurate predictions on new examples.',
          applications: ['Email spam detection', 'Medical diagnosis', 'Credit scoring', 'Image recognition', 'Speech recognition'],
          advantages: ['Clear performance metrics', 'Well-established techniques', 'Direct feedback from labels', 'High accuracy when sufficient data available'],
          limitations: ['Requires labeled data', 'May not generalize to different distributions', 'Can overfit to training data', 'Limited by quality of labels'],
          children: [
            {
              id: 'regression',
              name: 'Regression',
              description: 'Predicting continuous numerical values',
              overview: 'Regression analysis models relationships between variables to predict continuous numerical outcomes.',
              howItWorks: 'Finds mathematical relationships between input features and continuous target variables using various fitting techniques.',
              applications: ['Stock price prediction', 'Sales forecasting', 'Weather prediction', 'Property valuation', 'Resource planning'],
              advantages: ['Provides confidence intervals', 'Interpretable relationships', 'Can handle multiple variables', 'Well-understood statistical foundation'],
              limitations: ['Assumes specific relationships', 'Sensitive to outliers', 'May require feature engineering', 'Performance degrades with noise'],
              children: [
                { 
                  id: 'polynomial-regression', 
                  name: 'Polynomial Regression', 
                  description: 'Fitting polynomial relationships between variables',
                  overview: 'Polynomial regression extends linear regression by modeling the relationship between variables using polynomial functions.',
                  howItWorks: 'Fits curves by adding polynomial terms (x², x³, etc.) to capture non-linear relationships in data.',
                  applications: ['Curve fitting', 'Growth modeling', 'Price prediction with non-linear trends'],
                  advantages: ['Captures non-linear relationships', 'Flexible model complexity', 'Interpretable coefficients'],
                  limitations: ['Risk of overfitting', 'Sensitive to outliers', 'Extrapolation issues'],
                  children: [
                    {
                      id: 'linear-regression', 
                      name: 'Linear Regression', 
                      description: 'Fitting linear relationships between variables',
                      overview: 'Linear regression models the relationship between a dependent variable and independent variables using a linear equation.',
                      howItWorks: 'Finds the best-fitting line through data points using least squares optimization.',
                      applications: ['Sales forecasting', 'Risk assessment', 'Economic modeling', 'Scientific research'],
                      advantages: ['Simple and interpretable', 'Fast computation', 'Well-understood theory'],
                      limitations: ['Assumes linear relationships', 'Sensitive to outliers', 'May underfit complex data'],
                      children: [
                        { 
                          id: 'ridge-lasso', 
                          name: 'Ridge / Lasso Regression', 
                          description: 'Regularized regression techniques',
                          overview: 'Regularized regression methods that add penalty terms to prevent overfitting and improve model generalization.',
                          howItWorks: 'Ridge adds L2 penalty (sum of squared coefficients), Lasso adds L1 penalty (sum of absolute coefficients).',
                          applications: ['High-dimensional data analysis', 'Feature selection', 'Genomics', 'Finance modeling'],
                          advantages: ['Prevents overfitting', 'Handles multicollinearity', 'Lasso performs feature selection'],
                          limitations: ['Requires hyperparameter tuning', 'May overshrink coefficients', 'Less interpretable'],
                        }
                      ]
                    }
                  ] 
                },
                { 
                  id: 'decision-tree-regressor', 
                  name: 'Decision Tree Regressor', 
                  description: 'Tree-based regression model',
                  overview: 'Decision trees for regression split data into regions and predict the average value within each region.',
                  howItWorks: 'Recursively splits data based on feature values to minimize prediction error within each leaf node.',
                  applications: ['Real estate valuation', 'Medical diagnosis scoring', 'Financial risk assessment'],
                  advantages: ['Non-parametric', 'Handles non-linear relationships', 'Easy to interpret'],
                  limitations: ['Prone to overfitting', 'Unstable to small data changes', 'Biased toward features with many levels'],
                },
                { 
                  id: 'knn-regressor', 
                  name: 'K-Nearest Neighbors Regressor', 
                  description: 'Non-parametric regression method',
                  overview: 'KNN regression predicts values by averaging the target values of the k nearest neighbors in feature space.',
                  howItWorks: 'For each prediction, finds k most similar data points and returns their average target value.',
                  applications: ['Recommendation systems', 'Image processing', 'Collaborative filtering'],
                  advantages: ['Simple and intuitive', 'No assumptions about data distribution', 'Adapts to local patterns'],
                  limitations: ['Computationally expensive', 'Sensitive to irrelevant features', 'Poor performance in high dimensions'],
                }
              ]
            },
            {
              id: 'classification',
              name: 'Classification',
              description: 'Predicting discrete class labels',
              overview: 'Classification assigns discrete categories or classes to data points based on their features and learned patterns.',
              howItWorks: 'Analyzes training examples with known class labels to learn decision boundaries that separate different categories.',
              applications: ['Fraud detection', 'Disease diagnosis', 'Document categorization', 'Quality control', 'Customer segmentation'],
              advantages: ['Clear discrete outputs', 'Probability estimates available', 'Works with categorical data', 'Wide variety of algorithms'],
              limitations: ['Class imbalance issues', 'May struggle with new categories', 'Requires sufficient examples per class', 'Decision boundaries may be complex'],
              children: [
                { 
                  id: 'logistic-regression', 
                  name: 'Logistic Regression', 
                  description: 'Statistical method for binary and multiclass classification',
                  overview: 'Logistic regression uses the logistic function to model the probability of class membership.',
                  howItWorks: 'Applies logistic function to linear combination of features to output probabilities between 0 and 1.',
                  applications: ['Medical diagnosis', 'Marketing response prediction', 'Quality control', 'Credit scoring'],
                  advantages: ['Probabilistic output', 'No tuning of hyperparameters', 'Less prone to overfitting', 'Fast and efficient'],
                  limitations: ['Assumes linear relationship between features and log-odds', 'Sensitive to outliers', 'Requires large sample sizes'],
                },
                { 
                  id: 'naive-bayes', 
                  name: 'Naive Bayes', 
                  description: 'Probabilistic classifier based on Bayes theorem',
                  overview: 'Naive Bayes applies Bayes theorem with the naive assumption of feature independence.',
                  howItWorks: 'Calculates posterior probabilities using prior probabilities and likelihood, assuming features are independent.',
                  applications: ['Spam filtering', 'Text classification', 'Sentiment analysis', 'Medical diagnosis'],
                  advantages: ['Fast and simple', 'Works well with small datasets', 'Handles multiple classes naturally'],
                  limitations: ['Strong independence assumption', 'Can be outperformed by more sophisticated methods', 'Sensitive to skewed data'],
                },
                { 
                  id: 'decision-tree-classifier', 
                  name: 'Decision Tree Classifier', 
                  description: 'Tree-based classification model',
                  overview: 'Decision trees classify data by creating a tree-like model of decisions based on feature values.',
                  howItWorks: 'Recursively splits data using feature thresholds to maximize information gain or minimize impurity.',
                  applications: ['Medical diagnosis', 'Credit approval', 'Customer segmentation', 'Rule extraction'],
                  advantages: ['Highly interpretable', 'Handles both numerical and categorical data', 'No need for feature scaling'],
                  limitations: ['Prone to overfitting', 'Unstable', 'Biased toward features with more levels'],
                },
                { 
                  id: 'svm', 
                  name: 'Support Vector Machine (SVM)', 
                  description: 'Maximum margin classifier',
                  overview: 'SVM finds the optimal hyperplane that maximally separates different classes in feature space.',
                  howItWorks: 'Identifies support vectors and constructs decision boundary with maximum margin between classes.',
                  applications: ['Text classification', 'Image recognition', 'Gene classification', 'Handwriting recognition'],
                  advantages: ['Effective in high dimensions', 'Memory efficient', 'Versatile with different kernel functions'],
                  limitations: ['Poor performance on large datasets', 'Sensitive to feature scaling', 'No probabilistic output'],
                },
                { 
                  id: 'knn', 
                  name: 'K-Nearest Neighbors (KNN)', 
                  description: 'Classification based on nearest neighbors',
                  overview: 'KNN classifies data points based on the majority class among their k nearest neighbors.',
                  howItWorks: 'For each prediction, finds k most similar training examples and assigns the most common class.',
                  applications: ['Recommendation systems', 'Pattern recognition', 'Outlier detection', 'Image classification'],
                  advantages: ['Simple and intuitive', 'No assumptions about data', 'Naturally handles multi-class problems'],
                  limitations: ['Computationally expensive', 'Sensitive to irrelevant features', 'Poor performance with high-dimensional data'],
                }
              ]
            }
          ]
        }, 
        {
          id: 'unsupervised-learning',
          name: 'Unsupervised Learning',
          description: 'Learning patterns from unlabeled data',
          overview: 'Unsupervised learning discovers hidden patterns and structures in data without explicit target labels or supervision.',
          howItWorks: 'Algorithms analyze data distributions, relationships, and structures to identify meaningful patterns, groups, or representations.',
          applications: ['Market segmentation', 'Anomaly detection', 'Data exploration', 'Dimensionality reduction', 'Pattern discovery'],
          advantages: ['No need for labeled data', 'Discovers unknown patterns', 'Exploratory analysis', 'Can work with any data'],
          limitations: ['Difficult to evaluate results', 'May find spurious patterns', 'Requires domain knowledge for interpretation', 'Less predictable outcomes'],
          children: [
            {
              id: 'clustering',
              name: 'Clustering',
              description: 'Grouping similar data points together',
              overview: 'Clustering partitions data into groups where similar items are grouped together and dissimilar items are separated.',
              howItWorks: 'Uses distance metrics and similarity measures to identify natural groupings in data without predefined categories.',
              applications: ['Customer segmentation', 'Gene sequencing', 'Image segmentation', 'Social network analysis', 'Data organization'],
              advantages: ['Reveals data structure', 'No prior knowledge needed', 'Scalable to large datasets', 'Multiple algorithms available'],
              limitations: ['Subjective cluster definitions', 'Sensitive to initialization', 'Difficulty choosing optimal number of clusters', 'May not work with all data types'],
              children: [
                { 
                  id: 'k-means', 
                  name: 'K-Means', 
                  description: 'Partitioning data into k clusters',
                  overview: 'K-means clustering partitions data into k clusters by minimizing within-cluster sum of squares.',
                  howItWorks: 'Iteratively assigns points to nearest centroid and updates centroids until convergence.',
                  applications: ['Customer segmentation', 'Image segmentation', 'Market research', 'Data compression'],
                  advantages: ['Simple and fast', 'Works well with globular clusters', 'Guaranteed convergence'],
                  limitations: ['Requires specifying k', 'Sensitive to initialization', 'Assumes spherical clusters'],
                },
                { 
                  id: 'gmm', 
                  name: 'Gaussian Mixture Models (GMM)', 
                  description: 'Probabilistic clustering with Gaussian distributions',
                  overview: 'GMM assumes data comes from a mixture of Gaussian distributions and estimates their parameters.',
                  howItWorks: 'Uses Expectation-Maximization algorithm to estimate mixture components and assignment probabilities.',
                  applications: ['Speech recognition', 'Computer vision', 'Density estimation', 'Anomaly detection'],
                  advantages: ['Probabilistic output', 'Flexible cluster shapes', 'Handles overlapping clusters'],
                  limitations: ['Computationally intensive', 'Sensitive to initialization', 'Requires choosing number of components'],
                },
                { 
                  id: 'dbscan', 
                  name: 'DBSCAN', 
                  description: 'Density-based clustering algorithm',
                  overview: 'DBSCAN groups together points in high-density areas and marks points in low-density areas as outliers.',
                  howItWorks: 'Identifies core points with sufficient neighbors and expands clusters by connecting density-reachable points.',
                  applications: ['Anomaly detection', 'Image processing', 'Social network analysis', 'Spatial data analysis'],
                  advantages: ['Finds arbitrary shaped clusters', 'Automatically determines outliers', 'Robust to noise'],
                  limitations: ['Sensitive to hyperparameters', 'Struggles with varying densities', 'Memory intensive'],
                }
              ] 
            },
            {
              id: 'feature-extraction',
              name: 'Feature Extraction',
              description: 'Reducing dimensionality while preserving important information',
              overview: 'Feature extraction transforms high-dimensional data into lower-dimensional representations while retaining essential information.',
              howItWorks: 'Applies mathematical transformations to identify and extract the most important features or patterns from complex data.',
              applications: ['Data visualization', 'Noise reduction', 'Data compression', 'Preprocessing for ML', 'Pattern recognition'],
              advantages: ['Reduces computational complexity', 'Eliminates noise', 'Enables visualization', 'Improves algorithm performance'],
              limitations: ['May lose important information', 'Requires choosing number of dimensions', 'Interpretation challenges', 'Method selection complexity'],
              children: [
                { 
                  id: 'pca', 
                  name: 'Principal Component Analysis (PCA)', 
                  description: 'Linear dimensionality reduction technique',
                  overview: 'PCA reduces dimensionality by projecting data onto principal components that capture maximum variance.',
                  howItWorks: 'Computes eigenvectors of covariance matrix and projects data onto top eigenvectors.',
                  applications: ['Data visualization', 'Feature reduction', 'Data compression', 'Noise reduction'],
                  advantages: ['Reduces overfitting', 'Removes correlation', 'Computational efficiency'],
                  limitations: ['Linear transformation only', 'Components may not be interpretable', 'Sensitive to scaling'],
                },
                { 
                  id: 't-sne', 
                  name: 't-SNE', 
                  description: 'Non-linear dimensionality reduction technique for visualization',
                  overview: 't-SNE preserves local structure by modeling pairwise similarities in high and low dimensions.',
                  howItWorks: 'Minimizes divergence between probability distributions of pairwise similarities in original and reduced space.',
                  applications: ['Data visualization', 'Exploratory data analysis', 'Cluster visualization', 'Image analysis'],
                  advantages: ['Preserves local structure', 'Reveals clusters', 'Non-linear mapping'],
                  limitations: ['Computationally expensive', 'Non-deterministic', 'Hyperparameter sensitive'],
                }
              ]
            }
          ]
        }, 
        {
          id: 'reinforcement-learning',
          name: 'Reinforcement Learning',
          description: 'Learning through interaction with environment via rewards and penalties',
          overview: 'Reinforcement learning enables agents to learn optimal behavior through trial-and-error interactions with an environment.',
          howItWorks: 'Agent takes actions in an environment, receives rewards or penalties, and learns to maximize cumulative reward over time.',
          applications: ['Game playing (Chess, Go)', 'Robotics control', 'Autonomous vehicles', 'Trading algorithms', 'Resource allocation'],
          advantages: ['Learns without supervision', 'Adapts to dynamic environments', 'Optimizes long-term objectives', 'Handles sequential decisions'],
          limitations: ['Requires extensive exploration', 'Sample inefficient', 'Difficult reward design', 'May converge to local optima'],
          children: [
            { 
              id: 'q-learning', 
              name: 'Q-Learning', 
              description: 'Model-free reinforcement learning algorithm',
              overview: 'Q-learning learns optimal action-value function without requiring a model of the environment.',
              howItWorks: 'Updates Q-values using Bellman equation based on rewards received from actions in states.',
              applications: ['Game playing', 'Robot navigation', 'Trading strategies', 'Resource allocation'],
              advantages: ['Model-free', 'Guaranteed convergence', 'Off-policy learning'],
              limitations: ['Requires discrete state/action spaces', 'Slow convergence', 'Memory intensive for large state spaces'],
            },
            { 
              id: 'dqn', 
              name: 'Deep Q-Networks (DQN)', 
              description: 'Deep learning approach to Q-learning',
              overview: 'DQN uses deep neural networks to approximate Q-values for high-dimensional state spaces.',
              howItWorks: 'Combines Q-learning with deep networks, using experience replay and target networks for stability.',
              applications: ['Video game AI', 'Robotics', 'Autonomous vehicles', 'Strategic planning'],
              advantages: ['Handles high-dimensional states', 'End-to-end learning', 'Scales to complex problems'],
              limitations: ['Sample inefficient', 'Unstable training', 'Requires careful hyperparameter tuning'],
            },
            { 
              id: 'policy-gradient', 
              name: 'Policy Gradient Methods', 
              description: 'Directly optimizing policy parameters',
              overview: 'Policy gradient methods directly optimize policy parameters using gradient ascent on expected returns.',
              howItWorks: 'Estimates gradient of expected return with respect to policy parameters and updates parameters accordingly.',
              applications: ['Continuous control', 'Natural language generation', 'Multi-agent systems', 'Portfolio optimization'],
              advantages: ['Handles continuous actions', 'Direct policy optimization', 'Stochastic policies'],
              limitations: ['High variance gradients', 'Sample inefficient', 'Local optima'],
            }
          ]
        },
        {
          id: 'neural-networks',
          name: 'Neural Networks',
          description: 'Computing systems inspired by biological neural networks',
          overview: 'Neural networks are computational models inspired by biological brain networks, capable of learning complex patterns through interconnected nodes.',
          howItWorks: 'Networks of artificial neurons process information through weighted connections, using activation functions and backpropagation for learning.',
          applications: ['Image recognition', 'Natural language processing', 'Speech recognition', 'Medical diagnosis', 'Autonomous systems'],
          advantages: ['Universal function approximation', 'Automatic feature learning', 'Handles non-linear relationships', 'Scalable to large problems'],
          limitations: ['Black box nature', 'Requires large datasets', 'Computationally intensive', 'Many hyperparameters to tune'],
          children: [
            { 
              id: 'mlp', 
              name: 'Multi-layer Perceptron', 
              description: 'Feedforward artificial neural network',
              overview: 'MLPs consist of multiple layers of neurons with non-linear activation functions for learning complex patterns.',
              howItWorks: 'Forward propagates input through hidden layers and uses backpropagation to update weights.',
              applications: ['Pattern recognition', 'Function approximation', 'Classification', 'Regression'],
              advantages: ['Universal function approximator', 'Non-linear modeling', 'Flexible architecture'],
              limitations: ['Requires large amounts of data', 'Prone to overfitting', 'Black box nature'],
            },
            { 
              id: 'cnn', 
              name: 'Convolutional Neural Network', 
              description: 'Deep learning architecture for processing grid-like data',
              overview: 'CNNs use convolutional layers to detect local features and pooling layers to reduce dimensionality.',
              howItWorks: 'Applies learnable filters across input to detect features, followed by pooling for translation invariance.',
              applications: ['Image classification', 'Object detection', 'Medical imaging', 'Computer vision'],
              advantages: ['Translation invariant', 'Parameter sharing', 'Hierarchical feature learning'],
              limitations: ['Requires large datasets', 'Computationally intensive', 'Not suitable for non-grid data'],
            },
            { 
              id: 'transformers', 
              name: 'Transformers', 
              description: 'Attention-based architecture for sequence modeling and generation',
              overview: 'Transformers use self-attention mechanisms to process sequences in parallel and capture long-range dependencies.',
              howItWorks: 'Attention mechanism computes weighted representations based on similarity between sequence elements.',
              applications: ['Machine translation', 'Text generation', 'Question answering', 'Code generation'],
              advantages: ['Parallel processing', 'Long-range dependencies', 'Transfer learning'],
              limitations: ['Memory intensive', 'Requires large datasets', 'Quadratic complexity with sequence length'],
              children: [
                { 
                  id: 'nlp', 
                  name: 'Natural Language Processing (NLP)', 
                  description: 'AI for understanding and generating human language',
                  overview: 'NLP combines computational linguistics with machine learning to process and understand human language.',
                  howItWorks: 'Uses various techniques from tokenization to deep learning for language understanding and generation.',
                  applications: ['Chatbots', 'Machine translation', 'Sentiment analysis', 'Document summarization'],
                  advantages: ['Versatile applications', 'Improving rapidly', 'Transfer learning'],
                  limitations: ['Context understanding', 'Ambiguity handling', 'Cultural and linguistic biases'],
                }
              ]
            },
            { 
              id: 'rnn', 
              name: 'Recurrent Neural Network (RNN)', 
              description: 'Neural network architecture for sequential data using temporal dependencies',
              overview: 'RNNs process sequential data by maintaining hidden states that capture information from previous time steps.',
              howItWorks: 'Uses recurrent connections to maintain memory of previous inputs while processing sequences.',
              applications: ['Time series prediction', 'Speech recognition', 'Language modeling', 'Sequence generation'],
              advantages: ['Handles variable-length sequences', 'Memory of past information', 'Parameter sharing across time'],
              limitations: ['Vanishing gradient problem', 'Sequential processing', 'Difficulty with long sequences'],
            },
            { 
              id: 'gan', 
              name: 'Generative Adversarial Network (GAN)', 
              description: 'Neural network architecture for generating realistic data through adversarial training',
              overview: 'GANs consist of generator and discriminator networks competing against each other to generate realistic data.',
              howItWorks: 'Generator creates fake data while discriminator learns to distinguish real from fake data.',
              applications: ['Image generation', 'Data augmentation', 'Style transfer', 'Super resolution'],
              advantages: ['High-quality generation', 'Unsupervised learning', 'Flexible data types'],
              limitations: ['Training instability', 'Mode collapse', 'Difficult to evaluate'],
            },
            { 
              id: 'diffusion', 
              name: 'Diffusion Models', 
              description: 'Generative models that learn to reverse a noise process to synthesize data',
              overview: 'Diffusion models learn to denoise data by reversing a gradual noise addition process.',
              howItWorks: 'Trains neural network to predict noise added at each step of forward diffusion process.',
              applications: ['Image generation', 'Audio synthesis', 'Video generation', 'Molecular design'],
              advantages: ['High-quality samples', 'Stable training', 'Controllable generation'],
              limitations: ['Slow sampling', 'Computationally expensive', 'Many sampling steps required'],
            },
            { 
              id: 'autoencoders', 
              name: 'Autoencoders', 
              description: 'Neural networks for feature learning',
              overview: 'Autoencoders learn efficient data representations by encoding input to lower dimension and reconstructing it.',
              howItWorks: 'Encoder compresses input to latent representation, decoder reconstructs original input from latent code.',
              applications: ['Dimensionality reduction', 'Anomaly detection', 'Denoising', 'Data compression'],
              advantages: ['Unsupervised learning', 'Learns meaningful representations', 'Flexible architecture'],
              limitations: ['May lose important information', 'Requires careful architecture design', 'Prone to overfitting'],
            }
          ]
        },
        {
          id: 'ensemble-learning',
          name: 'Ensemble Learning',
          description: 'Combining multiple models to improve performance and robustness',
          overview: 'Ensemble learning combines predictions from multiple models to achieve better performance than any individual model alone.',
          howItWorks: 'Trains multiple diverse models and combines their predictions using various strategies like voting, averaging, or stacking.',
          applications: ['Kaggle competitions', 'Financial modeling', 'Medical diagnosis', 'Computer vision', 'Natural language processing'],
          advantages: ['Improved accuracy', 'Reduced overfitting', 'Increased robustness', 'Better generalization'],
          limitations: ['Increased complexity', 'Higher computational cost', 'More difficult to interpret', 'Requires model diversity'],
          children: [
            {
              id: 'bagging',
              name: 'Bagging',
              description: 'Bootstrap aggregation to reduce variance',
              overview: 'Bagging trains multiple models on different bootstrap samples of training data and averages their predictions.',
              howItWorks: 'Creates multiple datasets by sampling with replacement, trains separate models, and combines predictions to reduce variance.',
              applications: ['Random Forest', 'Extra Trees', 'Parallel ensemble learning', 'Reducing model variance'],
              advantages: ['Reduces overfitting', 'Parallel training', 'Works with any base model', 'Provides uncertainty estimates'],
              limitations: ['May not reduce bias', 'Computationally expensive', 'Less effective with stable models', 'Requires diverse samples'],
              children: [
                { 
                  id: 'random-forest', 
                  name: 'Random Forest', 
                  description: 'Ensemble of decision trees using bagging',
                  overview: 'Random Forest combines multiple decision trees trained on random subsets of data and features.',
                  howItWorks: 'Trains multiple trees on bootstrap samples with random feature selection and averages predictions.',
                  applications: ['Feature importance', 'Classification', 'Regression', 'Bioinformatics'],
                  advantages: ['Reduces overfitting', 'Handles missing values', 'Provides feature importance'],
                  limitations: ['Less interpretable than single tree', 'Can overfit with very noisy data', 'Memory intensive'],
                }
              ]
            },
            {
              id: 'boosting',
              name: 'Boosting',
              description: 'Sequentially combining weak learners to reduce bias',
              overview: 'Boosting sequentially trains weak learners, with each subsequent model focusing on correcting errors of previous models.',
              howItWorks: 'Iteratively trains models on weighted datasets, emphasizing misclassified examples to create strong ensemble classifier.',
              applications: ['AdaBoost', 'Gradient Boosting', 'XGBoost', 'Competitive machine learning', 'High-stakes prediction'],
              advantages: ['Reduces bias and variance', 'High predictive accuracy', 'Automatic feature selection', 'Works with weak learners'],
              limitations: ['Sequential training', 'Sensitive to noise', 'Prone to overfitting', 'Computationally intensive'],
              children: [
                { 
                  id: 'gradient-boosting', 
                  name: 'Gradient Boosting', 
                  description: 'Boosting method for regression and classification',
                  overview: 'Gradient boosting builds models sequentially, with each model correcting errors of previous models.',
                  howItWorks: 'Fits new models to residual errors of ensemble, using gradient descent to minimize loss function.',
                  applications: ['Tabular data prediction', 'Ranking', 'Regression', 'Feature selection'],
                  advantages: ['High predictive accuracy', 'Handles different data types', 'Built-in feature selection'],
                  limitations: ['Prone to overfitting', 'Sensitive to hyperparameters', 'Sequential training'],
                  children: [
                    { 
                      id: 'xgboost', 
                      name: 'XGBoost', 
                      description: 'Optimized gradient boosting library for performance and scalability',
                      overview: 'XGBoost is an optimized gradient boosting framework designed for speed and performance.',
                      howItWorks: 'Uses second-order gradients, regularization, and optimized data structures for efficient training.',
                      applications: ['Machine learning competitions', 'Click-through rate prediction', 'Risk modeling', 'Ranking systems'],
                      advantages: ['State-of-the-art performance', 'Fast training', 'Built-in regularization'],
                      limitations: ['Many hyperparameters', 'Memory intensive', 'Requires feature engineering'],
                    }
                  ] 
                },
                {
                  id: 'adaboost', 
                  name: 'AdaBoost', 
                  description: 'Adaptive boosting method using weighted weak learners',
                  overview: 'AdaBoost adaptively adjusts weights of training examples based on previous classifier errors.',
                  howItWorks: 'Sequentially trains weak learners on weighted datasets, increasing weights of misclassified examples.',
                  applications: ['Face detection', 'Object recognition', 'Text classification', 'Medical diagnosis'],
                  advantages: ['Simple and effective', 'Automatic feature selection', 'Good generalization'],
                  limitations: ['Sensitive to noise and outliers', 'Can overfit', 'Performance depends on weak learner choice'],
                }
              ]
            },
            { 
              id: 'stacking', 
              name: 'Stacking', 
              description: 'Combining multiple models using a meta-learner',
              overview: 'Stacking trains a meta-model to optimally combine predictions from multiple base models.',
              howItWorks: 'Base models make predictions, then meta-learner is trained on these predictions to make final prediction.',
              applications: ['Machine learning competitions', 'Complex prediction tasks', 'Model combination'],
              advantages: ['Can improve upon best individual model', 'Flexible combination strategy', 'Leverages model diversity'],
              limitations: ['Increased complexity', 'Risk of overfitting', 'Computationally expensive'],
            },
            { 
              id: 'voting', 
              name: 'Voting', 
              description: 'Combining predictions by majority',
              overview: 'Voting ensembles combine multiple models by taking majority vote (hard) or average (soft) of predictions.',
              howItWorks: 'Each model makes prediction, final prediction is determined by majority vote or weighted average.',
              applications: ['Classification tasks', 'Model combination', 'Reducing prediction variance'],
              advantages: ['Simple and effective', 'Reduces overfitting', 'Improves robustness'],
              limitations: ['All models weighted equally', 'May not be optimal', 'Requires diverse models'],
            },
            { 
              id: 'averaging', 
              name: 'Averaging', 
              description: 'Combining predictions by averaging outputs from multiple models, typically used in regression',
              overview: 'Model averaging combines predictions from multiple models by computing their weighted or simple average.',
              howItWorks: 'Trains multiple models independently and combines their predictions through averaging.',
              applications: ['Regression tasks', 'Time series forecasting', 'Risk modeling', 'Ensemble learning'],
              advantages: ['Reduces variance', 'Simple to implement', 'Often improves accuracy'],
              limitations: ['May not capture model interactions', 'Equal weighting may be suboptimal', 'Requires model diversity'],
            }
          ]
        }
      ]
    },
    {
      id: 'symbolic-ai',
      name: 'Symbolic AI',
      description: 'AI based on symbolic representation and logical reasoning',
      overview: 'Symbolic AI represents knowledge using symbols and manipulates them according to logical rules to solve problems and make decisions.',
      howItWorks: 'Uses formal logic, knowledge graphs, and rule-based systems to represent and process information symbolically.',
      applications: ['Expert systems', 'Knowledge graphs', 'Automated theorem proving', 'Semantic web technologies'],
      advantages: ['Interpretable reasoning', 'Explicit knowledge representation', 'Logical consistency'],
      limitations: ['Difficulty handling uncertainty', 'Brittle to exceptions', 'Limited learning capabilities'],
      children: []
    }
  ]
};