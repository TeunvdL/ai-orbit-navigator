 # Smart RAG Search for Members — Metaalunie

**One‑liner**  
Prompt Flow–orchestrated **RAG** with **semantic vector search** (Azure AI Search), **dense reranking**, and **Azure OpenAI** to deliver grounded, citation‑rich answers on the Metaalunie website. Includes **policy overrule** responses and **MAT** operations.

## Business problem
Members need instant, reliable answers across policy pages and handbooks without navigating silos.

## Solution overview
- **Architecture:** Fabric Lakehouse → chunking → **embeddings** → vector index + semantic reranker → **grounded generation**.  
- **Prompting:** System prompt, tone, few‑shots, and **overrule** for sensitive topics (policy‑compliant canned responses).  
- **Ops:** Ingestion from Maestro to search index, health telemetry, guardrail monitoring (content safety, PII redaction).

## Data & models
- **Sources:** Website corpus in Fabric (gold)  
- **Models:** Text‑embedding for vectors; GPT‑family for answer synthesis  
- **Indexing:** Azure AI Search (vector + hybrid)

## KPIs & value
Self‑service rate, p95 answer latency, citation coverage %, deflection vs. service desk.

## Risks & controls
- Hallucination → strict grounding, citation thresholds  
- Policy topics → overrule responses  
- Drift → scheduled re‑indexing and evaluation sets