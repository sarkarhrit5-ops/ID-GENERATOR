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
        <span>BUILDER PORTRAIT</span>
        <span>ID · {builderId}</span>
      </div>
      <div className="credential-photo__frame">
        <span className="credential-photo__scanline" aria-hidden="true" />
        <svg
          className="credential-photo__wave-art"
          viewBox="0 0 120 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="120" cy="70" r="45" fill="url(#sunGlow)" opacity="0.4" />
          <circle cx="120" cy="70" r="30" fill="url(#sunInner)" opacity="0.6" />
          
          <path
            d="M0 58C30 52 50 64 80 56C95 52 110 46 120 42V70H0V58Z"
            fill="url(#wavePink)"
            opacity="0.6"
          />
          <path
            d="M0 64C40 58 60 68 90 60C105 56 115 50 120 48V70H0V64Z"
            fill="url(#waveGold)"
            opacity="0.8"
          />
          
          <path
            d="M120 35C114 38 106 38 100 37C101 39 103 42 105 45C108 41 114 39 120 35Z"
            fill="var(--color-pink)"
            opacity="0.6"
          />
          <path
            d="M120 28C110 32 98 30 90 28C93 31 96 35 99 38C103 33 111 31 120 28Z"
            fill="var(--color-gold)"
            opacity="0.8"
          />
          <path
            d="M120 20C108 24 94 21 84 18C88 22 92 27 95 30C100 24 110 22 120 20Z"
            fill="var(--color-teal)"
            opacity="0.75"
          />

          <defs>
            <linearGradient id="sunGlow" x1="120" y1="25" x2="120" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-pink)" />
              <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sunInner" x1="120" y1="40" x2="120" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-gold)" />
              <stop offset="100%" stopColor="var(--color-pink)" />
            </linearGradient>
            <linearGradient id="wavePink" x1="0" y1="42" x2="120" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-pink)" />
              <stop offset="100%" stopColor="var(--color-gold)" />
            </linearGradient>
            <linearGradient id="waveGold" x1="0" y1="48" x2="120" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-gold)" />
              <stop offset="100%" stopColor="var(--color-pink)" />
            </linearGradient>
          </defs>
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={`${name} credential photo`} src={photoUrl} />
      </div>
    </section>
  );
}
