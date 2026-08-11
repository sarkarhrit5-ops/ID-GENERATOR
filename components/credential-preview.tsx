"use client";

import { useRef } from "react";
import { CredentialActions } from "@/components/credential-actions";
import { CredentialFooter } from "@/components/credential-footer";
import { CredentialHeader } from "@/components/credential-header";
import { CredentialIdentity } from "@/components/credential-identity";
import { CredentialPhoto } from "@/components/credential-photo";
import { CredentialStandby } from "@/components/credential-standby";
import { createCredentialMeta } from "@/lib/credential-meta";
import type { BuilderCredentialInput } from "@/types/builder-credential";
import type { BuilderCredentialValidation } from "@/types/validation";

type CredentialPreviewProps = {
  builderTitle: string;
  input: BuilderCredentialInput;
  isReady: boolean;
  validation: BuilderCredentialValidation;
};

export function CredentialPreview({
  builderTitle,
  input,
  isReady,
  validation
}: CredentialPreviewProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const displayName = input.name.trim().toUpperCase();
  const displayStack = input.stack.trim().toUpperCase();
  const meta = createCredentialMeta(input.name, input.stack);

  return (
    <section className="panel preview-panel" aria-label="Credential preview">
      <div className="preview-panel__header">
        <span className="meta-label">Live Preview</span>
        <span className={isReady ? "ready-pill" : "ready-pill ready-pill--pending"}>
          {isReady ? "SIGNAL LIVE" : "SIGNAL PENDING"}
        </span>
      </div>

      {isReady && input.photo ? (
        <>
          <div className="credential-frame" ref={cardRef}>
            <article className="credential">
              <div className="credential__grain" aria-hidden="true" />
              <div className="credential__coordinates" aria-hidden="true">
                15.2993N // 74.1240E
              </div>
              <CredentialHeader signalId={meta.signalId} />
              <CredentialPhoto
                builderId={meta.builderId}
                name={displayName}
                photoUrl={input.photo.url}
              />
              <CredentialIdentity
                builderTitle={builderTitle}
                name={displayName}
                stack={displayStack}
              />
              <CredentialFooter stack={input.stack} />
            </article>
          </div>

          <CredentialActions
            builderTitle={builderTitle}
            getCredentialElement={() => cardRef.current}
            isReady={isReady}
            name={input.name}
          />
        </>
      ) : (
        <CredentialStandby validation={validation} />
      )}
    </section>
  );
}

