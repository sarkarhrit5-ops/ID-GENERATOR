"use client";

import { useEffect, useMemo, useState } from "react";
import { BuilderCredentialForm } from "@/components/builder-credential-form";
import { CredentialPreview } from "@/components/credential-preview";
import { generateBuilderTitle } from "@/lib/builder-title";
import type { BuilderCredentialInput } from "@/types/builder-credential";
import type { BuilderCredentialValidation } from "@/types/validation";

const INITIAL_INPUT: BuilderCredentialInput = {
  name: "",
  stack: ""
};

export function BuilderCredentialStudio() {
  const [input, setInput] = useState<BuilderCredentialInput>(INITIAL_INPUT);
  const builderTitle = useMemo(
    () => generateBuilderTitle(input.stack),
    [input.stack]
  );

  useEffect(() => {
    return () => {
      if (input.photo?.url) {
        URL.revokeObjectURL(input.photo.url);
      }
    };
  }, [input.photo?.url]);

  const validation: BuilderCredentialValidation = {
    name: input.name.trim() ? undefined : "Enter your name.",
    stack: input.stack.trim() ? undefined : "Enter your role or stack.",
    photo: input.photo ? undefined : "Upload a valid photo to preview the credential."
  };

  const isCredentialReady = !validation.name && !validation.stack && !validation.photo;

  return (
    <main className="page-shell">
      <section className="studio" aria-labelledby="studio-title">
        <header className="studio__header">
          <span className="studio__kicker">BUILDER TRANSMISSION // HH GOA 2026</span>
          <h1 className="studio__title" id="studio-title">
            BUILD YOUR CREDENTIAL.
          </h1>
          <p className="studio__subtitle">
            Turn your builder signal into an HH Goa 2026 access pass. Less noise. More signal.
          </p>
        </header>

        <div className="studio__workspace">
          <BuilderCredentialForm
            builderTitle={builderTitle}
            input={input}
            onChange={setInput}
            validation={validation}
          />
          <CredentialPreview
            builderTitle={builderTitle.title}
            input={input}
            isReady={isCredentialReady}
            validation={validation}
          />
        </div>
      </section>
    </main>
  );
}
