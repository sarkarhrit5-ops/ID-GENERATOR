type CredentialPhotoProps = {
  builderId: string;
  name: string;
  photoUrl: string;
};

export function CredentialPhoto({
  builderId,
  name,
  photoUrl
}: CredentialPhotoProps) {
  return (
    <section className="credential-photo" aria-label="Builder photo">
      <div className="credential-photo__meta credential-photo__meta--top">
        <span>VISUAL SIGNAL // LIVE</span>
        <span>BUILDER ID // {builderId}</span>
      </div>
      <div className="credential-photo__frame">
        <span className="credential-photo__scanline" aria-hidden="true" />
        <span className="credential-photo__coastline" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={`${name} credential photo`} src={photoUrl} />
      </div>
    </section>
  );
}

