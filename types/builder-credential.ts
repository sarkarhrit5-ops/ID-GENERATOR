export type BuilderCredentialInput = {
  name: string;
  stack: string;
  photo?: BuilderPhoto;
};

export type BuilderPhoto = {
  url: string;
  name: string;
  type: string;
  size: number;
};

export type BuilderTitleCategory =
  | "full-stack-ai"
  | "frontend"
  | "backend"
  | "ai-ml"
  | "blockchain"
  | "designer"
  | "product"
  | "hardware"
  | "cybersecurity"
  | "no-code"
  | "general";

export type BuilderTitleResult = {
  category: BuilderTitleCategory;
  title: string;
  isFallback: boolean;
};

export type CredentialExportSpec = {
  width: 1080;
  height: 1350;
  aspectRatio: "4:5";
};
