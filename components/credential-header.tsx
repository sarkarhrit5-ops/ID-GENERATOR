type CredentialHeaderProps = {
  signalId: string;
};

export function CredentialHeader({ signalId }: CredentialHeaderProps) {
  return (
    <header className="credential__header">
      <div className="credential__branding">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decorations/hackfi-house-logo.png" alt="HACKER HOUSE" className="credential__logo" />
      </div>
      <div className="credential__header-meta">
        <span>BUILDER ID</span>
        <span>{signalId}</span>
      </div>
      <div className="credential__status">
        <span className="status-dot" aria-hidden="true" />
        <span>OFFICIAL</span>
      </div>
    </header>
  );
}
