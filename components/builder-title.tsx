import type { BuilderTitleResult } from "@/types/builder-credential";

type BuilderTitleProps = {
  result: BuilderTitleResult;
};

export function BuilderTitle({ result }: BuilderTitleProps) {
  return (
    <div className="generated-title" aria-live="polite">
      <span className="meta-label">Generated Builder Title</span>
      <strong>{result.title}</strong>
      {result.isFallback ? (
        <p className="hint">Mapped locally from your custom role.</p>
      ) : null}
    </div>
  );
}
