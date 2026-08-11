type CredentialIdentityProps = {
  builderTitle: string;
  name: string;
  stack: string;
};

export function CredentialIdentity({
  builderTitle,
  name,
  stack
}: CredentialIdentityProps) {
  const titleWords = builderTitle.split(" ");

  return (
    <section className="credential-identity" aria-label="Builder identity">
      <div className="credential-identity__person">
        <h2 className="credential-identity__name">{name}</h2>
        <p className="credential-identity__role">{stack}</p>
      </div>

      <div className="credential-title-lockup" aria-label={`Builder title: ${builderTitle}`}>
        {titleWords.map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </section>
  );
}

