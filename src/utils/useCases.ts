export interface UseCaseMetadata {
  id: string;
  title: string;
  company: string;
  sector: string;
  tags: string[];
}

export interface UseCase {
  metadata: UseCaseMetadata;
  content: string;
}

// Static use cases data - in a real app this would be loaded dynamically
const USE_CASES: UseCase[] = [
  {
    metadata: {
      id: "itho-teams-helpdesk-agent",
      title: "AI Helpdesk/Teams Agent",
      company: "Itho Daalderop",
      sector: "Industry",
      tags: ["knowledge-retrieval", "document-search-drafting", "smart-assistants", "text-analysis", "summarization-extraction", "text-classification", "sentiment-analysis"]
    },
    content: `# AI Helpdesk/Teams Agent — Itho Daalderop

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
PII exposure → RBAC + redaction; wrong routing → confidence thresholds + fallbacks.`
  },
  {
    metadata: {
      id: "metaalunie-slimme-zoekmachine",
      title: "Smart RAG Search for the Metaalunie Website",
      company: "Metaalunie",
      sector: "Industry",
      tags: ["knowledge-retrieval", "document-search-drafting", "summarization-extraction", "text-classification"]
    },
    content: ` # Smart RAG Search for Members — Metaalunie

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
- Drift → scheduled re‑indexing and evaluation sets`
  }
];

// Mapping from node names to tag equivalents
const NODE_TAG_MAPPING: Record<string, string> = {
  'Information Retrieval': 'knowledge-retrieval',
  'Smart Assistants': 'smart-assistants',
  'Text Analysis': 'text-analysis',
  'Predict & Plan': 'prediction',
  'Decision Making': 'decision-making',
  'Optimize': 'optimization',
  'Image Recognition': 'image-recognition'
};

export function getUseCasesForNode(nodeName: string): UseCase[] {
  const tag = NODE_TAG_MAPPING[nodeName];
  if (!tag) return [];
  
  return USE_CASES.filter(useCase => 
    useCase.metadata.tags.includes(tag)
  );
}

export function getAllUseCases(): UseCase[] {
  return USE_CASES;
}