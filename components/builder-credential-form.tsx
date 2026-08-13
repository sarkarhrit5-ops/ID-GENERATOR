"use client";

import { BuilderTitle } from "@/components/builder-title";
import { PhotoUploader } from "@/components/photo-uploader";
import type {
  BuilderCredentialInput,
  BuilderTitleResult
} from "@/types/builder-credential";
import type { BuilderCredentialValidation } from "@/types/validation";

type BuilderCredentialFormProps = {
  builderTitle: BuilderTitleResult;
  input: BuilderCredentialInput;
  onChange: (input: BuilderCredentialInput) => void;
  validation: BuilderCredentialValidation;
};

const ROLE_SUGGESTIONS = [
  "Full Stack + AI",
  "Frontend",
  "Backend",
  "AI / ML",
  "Designer",
  "Product",
  "Hardware",
  "Cybersecurity",
  "Blockchain",
  "No-code"
];

export function BuilderCredentialForm({
  builderTitle,
  input,
  onChange,
  validation
}: BuilderCredentialFormProps) {
  function updateField(field: keyof BuilderCredentialInput, value: string) {
    onChange({
      ...input,
      [field]: value
    });
  }

  return (
    <section className="panel form-panel" id="builder-details" aria-label="Builder details">
      <div className="panel__header">
        <span className="meta-label">Your HH Goa profile</span>
        <h2>Builder Details</h2>
      </div>

      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <PhotoUploader
          error={validation.photo}
          onChange={(photo) => onChange({ ...input, photo })}
          photo={input.photo}
        />

        <div className="field">
          <label htmlFor="builder-name">Name</label>
          <input
            autoComplete="name"
            aria-describedby={validation.name ? "builder-name-error" : undefined}
            aria-invalid={Boolean(validation.name)}
            id="builder-name"
            name="builder-name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            type="text"
            value={input.name}
          />
          {validation.name ? (
            <p className="field-error" id="builder-name-error">
              {validation.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="builder-stack">Stack / Role</label>
          <input
            aria-describedby={validation.stack ? "builder-stack-error" : undefined}
            aria-invalid={Boolean(validation.stack)}
            list="builder-role-options"
            id="builder-stack"
            name="builder-stack"
            onChange={(event) => updateField("stack", event.target.value)}
            placeholder="Full Stack + AI"
            type="text"
            value={input.stack}
          />
          <datalist id="builder-role-options">
            {ROLE_SUGGESTIONS.map((role) => (
              <option key={role} value={role} />
            ))}
          </datalist>
          {validation.stack ? (
            <p className="field-error" id="builder-stack-error">
              {validation.stack}
            </p>
          ) : null}
        </div>

        <BuilderTitle result={builderTitle} />
      </form>
    </section>
  );
}
