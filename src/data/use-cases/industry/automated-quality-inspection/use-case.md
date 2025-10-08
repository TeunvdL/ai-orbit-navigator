# Automated Quality Inspection

—**Short description**
Leverage computer vision to detect defects on production lines, including surface scratches, dents, or assembly deviations. Real-time anomaly detection ensures product quality, reduces manual inspection effort, and enhances throughput.

**Business outcomes & KPIs**
Improved defect detection coverage and product quality consistency.
Reduced rework, scrap, and associated costs.
Higher production efficiency and reliability.

**Example KPIs**
Defect detection rate (%), false positive/negative rates, yield %, scrap %, throughput, inspection coverage.

**Beneficiaries**
Quality control teams (inspection & intervention)
Production managers (line efficiency & throughput)
Operations/Engineering teams (process improvement)
Customers (consistent product quality)

**Typical data & systems (examples)**
Image/video streams from production line cameras.
Sensor metadata: temperature, speed, torque, assembly measurements.
Production logs: batch numbers, operator actions, machine parameters.
Contextual data: lighting, environment, production schedules.

**Process (from data to action)**
Capture and preprocess production images.
Label historical defect data for supervised learning.
Train computer vision models (CNNs) to detect and classify defects.
Apply anomaly detection for rare or unexpected defects.
Trigger alerts or automated sorting on the line.
Aggregate metrics for dashboards to monitor trends and continuous improvement.

**Modeling options**
CNN-based image classification.
Unsupervised anomaly detection for rare defects.
Evaluation: accuracy, precision, recall, F1-score, coverage.
Start with high-volume defect types, then expand to all defect categories.

**Decision & action integration**
Dashboards displaying real-time defect analytics.
Operator alerts on defective units for immediate action.
Integration with production control systems for automated sorting/rejection.

**Governance, privacy & risk**
Access control for image and production data.
Version control and model retraining for new products or design changes.
Human-in-the-loop for edge cases to prevent incorrect rejection.

**Success criteria**
High detection accuracy, reduced scrap/rework, improved OEE, and positive quality team feedback.

**Demo/POC outline**
Sample defective vs. non-defective images for pilot.
Dashboard showing defect classification and detection metrics.
Simulation of operator alerts and production line integration.

**Variants & extensions**
Extend to multiple product lines or defect types.
Combine with root-cause analysis for production process optimization.
Integrate with predictive maintenance for holistic quality + uptime improvement.

**AI Explorer taxonomy mapping**
Primary category: Detect
Tags: computer-vision, quality-control, machine-learning, anomaly-detection