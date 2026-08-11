import { BuildSignal } from "@/components/build-signal";

type CredentialFooterProps = {
  stack: string;
};

export function CredentialFooter({ stack }: CredentialFooterProps) {
  return (
    <footer className="credential-footer">
      <div>
        <p className="credential-footer__label">BUILD SIGNAL</p>
        <BuildSignal seed={stack} />
      </div>
      <div className="credential-footer__copy">
        <span>GOA // INDIA</span>
        <span>HH GOA 2026</span>
        <strong>
          LESS NOISE.
          <br />
          MORE SIGNAL.
        </strong>
      </div>
    </footer>
  );
}
