# AI Helpdesk/Teams Agent — Itho Daalderop

**One‑liner**  
A **Teams‑native copilot** that grounds on KB articles, tickets, and product docs to **triage**, **auto‑draft** responses with citations, and **auto‑route** cases—following a **Fabric Data Agent** pattern with Maestro integration.

## Business problem
High ticket volumes; slow knowledge retrieval; inconsistent answers; SLA pressure.

## Solution overview
- **User journey:** User asks in Teams → intent detection → **context retrieval (RAG)** → **auto‑draft** reply → human approve/send → feedback loop.  
- **Automation:** Priority **auto‑routing** using metadata; *optional* auto‑close for high‑confidence known issues.  
- **Guardrails:** Role‑based retrieval, prompt governance, approval thresholds, audit logs.

## Data & models
- Fabric semantic model (Gold); vector index; classification for intent/urgency; **sentiment** for escalation; GPT‑family for drafting.

## KPIs & value
First‑contact resolution, mean handle time, deflection rate, SLA adherence, CSAT.

## Risks & controls
PII exposure → RBAC + redaction; wrong routing → confidence thresholds + fallbacks.