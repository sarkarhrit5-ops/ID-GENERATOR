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
          <div className="brand-bar">
            <a className="brand" href="#studio-title" aria-label="Hacker House Goa 2026">
              <span className="brand__monogram">
                <img src="/hh-goa-logo.png" alt="HH Goa" />
              </span>
              <span className="brand__copy">
                <strong>HACKER HOUSE</strong>
                <span>GOA 2026</span>
              </span>
            </a>
            <nav className="brand-nav" aria-label="Page navigation">
              <a className="brand-nav__link brand-nav__link--active" href="#builder-details">Make your ID</a>
              <a className="brand-nav__link" href="#credential-preview">Your credential</a>
            </nav>
          </div>
          <div className="studio__intro">
            <span className="studio__kicker">A DIGITAL KHAZAANA FOR BUILDERS</span>
            <h1 className="studio__title" id="studio-title">
              MAKE YOUR<br /><em>BUILDER ID.</em>
            </h1>
            <p className="studio__subtitle">
              Bring your photo, your craft, and your wildest builder energy. We’ll turn it into an HH Goa 2026 credential made to share.
            </p>
          </div>
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
