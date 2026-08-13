export function GoaPageBackground() {
  return (
    <div className="goa-page-backdrop" aria-hidden="true">
      {/* Ambient Tropical Radial Glows */}
      <div className="goa-ambient-glow goa-ambient-glow--top-left" />
      <div className="goa-ambient-glow goa-ambient-glow--center" />
      <div className="goa-ambient-glow goa-ambient-glow--bottom-right" />

      {/* Main Vector Artwork positioned across the active workspace */}
      <svg
        className="goa-page-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--color-pink)" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="goaPinkGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-pink)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="goaTealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="var(--color-gold)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-pink)" stopOpacity="0.22" />
          </linearGradient>

          <linearGradient id="goaSunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Tropical Sun & Radiant Arcs in Upper Right behind workspace */}
        <g opacity="0.8">
          <circle cx="1180" cy="160" r="180" fill="url(#goaSunGrad)" />
          <circle cx="1180" cy="160" r="260" stroke="url(#goaGoldGrad)" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.5" />
          <circle cx="1180" cy="160" r="340" stroke="url(#goaPinkGrad)" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4" />
          <circle cx="1180" cy="160" r="420" stroke="url(#goaTealGrad)" strokeWidth="0.6" strokeDasharray="3 9" opacity="0.3" />
        </g>

        {/* 2. Flowing Coastal Waves across the Middle Workspace Area (Visible behind panels) */}
        <g opacity="0.85">
          <path
            d="M-40 280 C240 230, 480 340, 780 290 C1060 240, 1260 310, 1480 270"
            stroke="url(#goaGoldGrad)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M-40 330 C280 280, 520 400, 820 340 C1100 280, 1300 360, 1480 320"
            stroke="url(#goaTealGrad)"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M-40 460 C260 410, 560 520, 880 450 C1140 390, 1340 480, 1480 440"
            stroke="url(#goaPinkGrad)"
            strokeWidth="1.2"
            strokeDasharray="5 7"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M-40 540 C300 480, 620 600, 940 520 C1200 460, 1380 550, 1480 500"
            stroke="url(#goaGoldGrad)"
            strokeWidth="1"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M-40 640 C320 580, 660 700, 980 620 C1240 560, 1400 640, 1480 600"
            stroke="url(#goaTealGrad)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            fill="none"
            opacity="0.3"
          />
        </g>

        {/* 3. Left Flank Goa Palm Trees (Curling gracefully into workspace view) */}
        <g className="goa-palm goa-palm--left" transform="translate(10, 80) scale(1.3)" opacity="0.22">
          {/* Main Trunk */}
          <path
            d="M20 560 C35 410, 75 260, 145 150 C150 142, 160 145, 155 153 C95 265, 55 412, 38 560 Z"
            fill="url(#goaGoldGrad)"
          />
          {/* Detailed Fronds */}
          <path
            d="M150 148 C115 100, 45 90, -10 105 C35 120, 90 130, 145 155 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M152 146 C130 80, 95 35, 30 20 C73 50, 115 95, 148 150 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M154 144 C170 70, 180 25, 150 -20 C165 25, 167 80, 152 145 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M157 147 C210 90, 260 65, 320 60 C270 88, 220 118, 155 150 Z"
            fill="var(--color-pink)"
          />
          <path
            d="M156 150 C220 125, 280 135, 340 165 C280 165, 220 158, 153 153 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M151 153 C185 190, 230 225, 290 250 C240 225, 200 190, 147 155 Z"
            fill="var(--color-teal)"
          />
          <path
            d="M148 155 C165 210, 195 260, 240 295 C205 260, 175 215, 144 158 Z"
            fill="var(--color-gold)"
          />
        </g>

        {/* 4. Right Flank Goa Palm Trees (Curling gracefully into workspace view) */}
        <g className="goa-palm goa-palm--right" transform="translate(1080, 90) scale(1.3)" opacity="0.22">
          {/* Main Trunk */}
          <path
            d="M240 560 C215 410, 160 250, 90 130 C85 122, 75 125, 80 133 C145 255, 198 412, 222 560 Z"
            fill="url(#goaPinkGrad)"
          />
          {/* Detailed Fronds */}
          <path
            d="M85 128 C120 80, 190 70, 245 85 C200 100, 145 110, 90 135 Z"
            fill="var(--color-pink)"
          />
          <path
            d="M83 126 C105 60, 140 15, 205 0 C162 30, 120 75, 87 130 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M81 124 C65 50, 55 5, 85 -40 C70 5, 68 60, 83 125 Z"
            fill="var(--color-pink)"
          />
          <path
            d="M78 127 C25 70, -25 45, -85 40 C-35 68, 15 98, 80 130 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M79 130 C15 105, -45 115, -105 145 C-45 145, 15 138, 82 133 Z"
            fill="var(--color-teal)"
          />
          <path
            d="M84 133 C50 170, 5 205, -55 230 C-5 205, 35 170, 88 135 Z"
            fill="var(--color-gold)"
          />
          <path
            d="M86 135 C65 190, 35 240, -15 275 C25 240, 55 195, 89 138 Z"
            fill="var(--color-pink)"
          />
        </g>

        {/* 5. Layered Beach Waves along the base */}
        <g opacity="0.3">
          <path
            d="M-50 720 Q 240 670, 520 730 T 1080 710 T 1500 720 L 1500 950 L -50 950 Z"
            fill="url(#goaTealGrad)"
          />
          <path
            d="M-50 770 Q 280 720, 600 780 T 1180 760 T 1500 770 L 1500 950 L -50 950 Z"
            fill="url(#goaGoldGrad)"
            opacity="0.7"
          />
          <path
            d="M-50 820 Q 320 770, 680 830 T 1260 810 T 1500 820 L 1500 950 L -50 950 Z"
            fill="url(#goaPinkGrad)"
            opacity="0.6"
          />
        </g>

        {/* 6. Goa Watermark & Coordinates */}
        <text
          x="1380"
          y="560"
          fill="var(--color-gold)"
          opacity="0.32"
          fontSize="14"
          fontWeight="800"
          letterSpacing="0.25em"
          textAnchor="end"
        >
          15.2993° N · 74.1240° E
        </text>
        <text
          x="1380"
          y="584"
          fill="var(--color-cream-muted)"
          opacity="0.25"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.18em"
          textAnchor="end"
        >
          HACKER HOUSE GOA · 2026
        </text>
      </svg>
    </div>
  );
}
