type CredentialHeaderProps = {
  signalId: string;
};

export function CredentialHeader({ signalId }: CredentialHeaderProps) {
  return (
    <header className="credential__header">
      <div>
        <p className="credential__eyebrow">HH GOA 2026</p>
        <p className="credential__subhead">HACKER HOUSE</p>
      </div>
      <div className="credential__header-meta">
        <span>BUILDER CREDENTIAL</span>
        <span>{signalId}</span>
      </div>
      <div className="credential__status">
        <span className="status-dot" aria-hidden="true" />
        <span>BUILD MODE // ACTIVE</span>
      </div>
    </header>
  );
}
