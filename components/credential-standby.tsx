import type { BuilderCredentialValidation } from "@/types/validation";

type CredentialStandbyProps = {
  validation: BuilderCredentialValidation;
};

export function CredentialStandby({ validation }: CredentialStandbyProps) {
  return (
    <div className="preview-empty" role="status">
      <span className="meta-label">CREDENTIAL STANDBY</span>
      <h2>AWAITING BUILDER SIGNAL</h2>
      <ul>
        <li className={validation.photo ? "" : "is-complete"}>PHOTO</li>
        <li className={validation.name ? "" : "is-complete"}>NAME</li>
        <li className={validation.stack ? "" : "is-complete"}>ROLE / STACK</li>
      </ul>
    </div>
  );
}

