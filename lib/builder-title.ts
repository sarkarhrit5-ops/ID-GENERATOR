import type {
  BuilderTitleCategory,
  BuilderTitleResult
} from "@/types/builder-credential";

const TITLE_BY_CATEGORY: Record<BuilderTitleCategory, string> = {
  "full-stack-ai": "THE SYSTEM BREAKER",
  frontend: "PIXEL ARCHITECT",
  backend: "PIPELINE WIZARD",
  "ai-ml": "MODEL WHISPERER",
  blockchain: "CHAIN ARCHITECT",
  designer: "INTERFACE ALCHEMIST",
  product: "IDEA ENGINEER",
  hardware: "CIRCUIT FORGER",
  cybersecurity: "THE GATEKEEPER",
  "no-code": "THE SHIPPER",
  general: "SIGNAL BUILDER"
};

export function generateBuilderTitle(stack: string): BuilderTitleResult {
  const normalized = normalizeRoleInput(stack);

  if (!normalized) {
    return {
      category: "general",
      title: TITLE_BY_CATEGORY.general,
      isFallback: true
    };
  }

  // 1. Check Full Stack + AI compound match first
  const isFullStack = normalized.includes("fullstack") || normalized.includes("full stack");
  const isAi = /\bai\b/.test(normalized) || /\bml\b/.test(normalized) || normalized.includes("machine learning") || normalized.includes("llm");

  if (isFullStack && isAi) {
    return {
      category: "full-stack-ai",
      title: TITLE_BY_CATEGORY["full-stack-ai"],
      isFallback: false
    };
  }

  // 2. Check individual categories in priority order
  if (/\b(cybersecurity|security|cyber|infosec|appsec|pentest|hacker)\b/.test(normalized)) {
    return { category: "cybersecurity", title: TITLE_BY_CATEGORY.cybersecurity, isFallback: false };
  }

  if (/\b(blockchain|web3|crypto|solidity|chain)\b/.test(normalized)) {
    return { category: "blockchain", title: TITLE_BY_CATEGORY.blockchain, isFallback: false };
  }

  if (/\b(hardware|iot|embedded|robotics|circuit)\b/.test(normalized)) {
    return { category: "hardware", title: TITLE_BY_CATEGORY.hardware, isFallback: false };
  }

  if (/\b(designer|design|ux|ui|brand|visual|interface)\b/.test(normalized)) {
    return { category: "designer", title: TITLE_BY_CATEGORY.designer, isFallback: false };
  }

  if (/\b(product|pm|founder|strategy|growth|idea)\b/.test(normalized)) {
    return { category: "product", title: TITLE_BY_CATEGORY.product, isFallback: false };
  }

  if (/\b(no\s*code|nocode|low\s*code|lowcode|automation|shipper)\b/.test(normalized)) {
    return { category: "no-code", title: TITLE_BY_CATEGORY["no-code"], isFallback: false };
  }

  if (isAi) {
    return { category: "ai-ml", title: TITLE_BY_CATEGORY["ai-ml"], isFallback: false };
  }

  if (/\b(frontend|front\s*end|react|next|css|pixel|vue|web)\b/.test(normalized)) {
    return { category: "frontend", title: TITLE_BY_CATEGORY.frontend, isFallback: false };
  }

  if (/\b(backend|back\s*end|api|server|database|infra|pipeline|node|python|go)\b/.test(normalized)) {
    return { category: "backend", title: TITLE_BY_CATEGORY.backend, isFallback: false };
  }

  // Unknown / custom role -> SIGNAL BUILDER
  return {
    category: "general",
    title: TITLE_BY_CATEGORY.general,
    isFallback: true
  };
}

export function normalizeRoleInput(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[+/_|\-,&]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

