# Occupancy & Bed Capacity Forecasting

**Short description**  
Predict patient/clinician **occupancy and bed capacity** per unit/department to proactively steer staffing, admissions and transfers. The model produces daily/weekly forecasts with confidence bands and simple allocation guidance (traffic‑light), so operations can prevent over/under‑capacity.

---

## Business outcomes & KPIs
- **Shorter waiting and throughput times** (SEH/ward/transfer).  
- **Fewer overflows and cancellations**; better **bed utilization**.
- **Lower PNIL/flex costs** by aligning schedules with predicted demand.  
- **Improved quality & safety** through more stable workloads.

**Example KPIs**  
Bed occupancy %, variance vs. plan, # overflow hours, # cancelled procedures/admissions, average LOS, staffing gap hours, PNIL spend, forecast MAPE/MAE.

---

## Beneficiaries
- **Operations/Capacity management** (daily/weekly planning)
- **Nurse managers & Bed management** (allocation & transfers)
- **HR/Workforce planning** (link to roster optimization)
- **Finance/Control** (cost, PNIL, productivity)

---

## Typical data & systems (examples)
- **Clinical/ECD/EHR**: admissions, ward movements, discharges, LOS, case mix (e.g., ONS, Ysis, HiX/Epic, Kepler).  
- **Planning/roster**: shifts, skills/qualifications (e.g., Ortec).  
- **HR/Contracts**: availability, contract types (e.g., AFAS).  
- **Medication/workflow**: activity intensity proxies (e.g., Medimo).  
- **Context**: calendar/seasonality, holidays, epidemiological signals.

Data is aggregated at the appropriate **unit/ward/day** grain; PII is minimized and access is role‑based.

---

## Process (from data to action)
1. **Ingest & clean** historical admissions/bed‑states and contextual drivers.  
2. **Feature engineering**: moving averages, seasonality, day‑of‑week, holiday flags, lead/lag, case‑mix proxies.  
3. **Forecasting** per unit/ward (hierarchical): baseline statistical model + ML uplift where beneficial.  
4. **Uncertainty bands** and **capacity thresholds** (min/max beds, staffing envelope).  
5. **Allocation hints**: simple rules suggest transfers/opens/closes; hand‑off to workforce optimizer.  
6. **Publish** to dashboard & alerting; store predictions for backtesting.

---

## Modeling options
- **Classical**: Exponential smoothing (ETS), ARIMA/SARIMA, Prophet for strong seasonality.  
- **ML**: Gradient boosting (XGBoost/LightGBM) with exogenous drivers; quantile regression for prediction intervals.  
- **Hierarchical reconciliation** across hospital → department → ward levels to keep totals consistent.  
- **Evaluation**: rolling‑origin backtests, MAPE/MAE, coverage of prediction intervals, bias by unit.

> Start simple with an interpretable baseline, then add ML features if they deliver consistent uplift.

---

## Decision & action integration
- **Dashboards** (Power BI/Fabric) with next 14–28 days forecast, bands, and traffic‑light status.  
- **Alerts** when predicted occupancy crosses thresholds; suggested **actions**: open/close beds, redirect elective admissions, pre‑arrange step‑down beds.  
- **API/Connector** to **roster optimization** (e.g., Ortec) to convert expected demand into schedules.

---

## Governance, privacy & risk
- **Lawful basis** and DPIA where required; minimize personal data (aggregate to unit/day).  
- **Access control** via care roles; audit trail of forecasts & decisions.  
- **Model governance**: versioning, drift monitoring, recalibration cadence, explainability (feature importance).  
- **Operational risk**: don’t auto‑close beds—keep a **human‑in‑the‑loop** for approvals.

---

## Success criteria
- Sustained **forecast accuracy** (MAPE target per unit), improved **bed utilization** and **reduced PNIL** vs. baseline, and positive feedback from bed managers on usability.

---

## Demo/POC outline
- **Data slice**: last 12–24 months of admissions/bed‑states for 2–3 wards.  
- **Baseline** vs. **ML uplift** comparison in a Fabric/Power BI report.  
- **What‑if** toggles: elective volume changes, bed closures, seasonal spikes.  
- **Hand‑off** mock to roster optimization (CSV/API) to show end‑to‑end value.

---

## Variants & extensions
- Add **bed placement recommendation** (scoring‑prioritization) for admissions.  
- Link to **patient flow** models (ED → ward → step‑down) for bottleneck analysis.  
- Combine with **Segmentation** to tailor thresholds by cohort (e.g., high‑care vs. step‑down).

---

## AI Explorer taxonomy mapping
- Primary category: **Forecasting**  
  - Tags: `forecasting`, `predict-plan`, `machine-learning`
- Secondary linkage (implementation phase): Planning optimization (separate use case)
