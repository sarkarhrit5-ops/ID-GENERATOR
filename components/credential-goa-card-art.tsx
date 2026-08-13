export function CredentialGoaCardArt() {
  return (
    <div className="credential__goa-card-art" aria-hidden="true">
      <svg
        className="credential__goa-card-svg"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Rich Goa Color Gradients */}
          <linearGradient id="cardGoaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFDE00" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#FFD700" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="cardGoaPink" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFDE00" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="cardGoaTeal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#20B2AA" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FFDE00" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="cardGoaSunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFDE00" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#FF69B4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="cardGoaWaveDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B5E3F" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#20B2AA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFDE00" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 1. Goa Sunset Radial Sun & Light Rays (Top Right) */}
        <circle cx="340" cy="110" r="85" fill="url(#cardGoaSunGlow)" />
        <circle cx="340" cy="110" r="120" stroke="#FFDE00" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
        <circle cx="340" cy="110" r="160" stroke="#FF69B4" strokeWidth="0.8" strokeDasharray="3 7" opacity="0.35" />
        
        {/* Sun Beams */}
        <line x1="340" y1="15" x2="340" y2="0" stroke="#FFDE00" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="275" y1="45" x2="260" y2="30" stroke="#FFDE00" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="245" y1="110" x2="230" y2="110" stroke="#FFDE00" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="275" y1="175" x2="260" y2="190" stroke="#FFDE00" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />

        {/* 2. Topographical Coastal Contour Waves (Behind photo & identity) */}
        <path
          d="M-20 200 C80 170, 160 250, 260 210 C340 180, 380 220, 430 190"
          stroke="url(#cardGoaGold)"
          strokeWidth="1.2"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M-20 235 C90 205, 170 285, 270 245 C350 215, 390 255, 430 225"
          stroke="url(#cardGoaTeal)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          opacity="0.45"
        />
        <path
          d="M-20 270 C100 240, 180 320, 280 280 C360 250, 400 290, 430 260"
          stroke="url(#cardGoaPink)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          fill="none"
          opacity="0.4"
        />

        {/* 3. Left Coconut Palm Tree (Vibrant & Stylized) */}
        <g opacity="0.55" transform="translate(-10, 210) scale(0.95)">
          {/* Palm Trunk with Rings */}
          <path
            d="M20 300 C28 220, 52 140, 92 80 C95 75, 102 77, 98 83 C60 142, 38 221, 30 300 Z"
            fill="url(#cardGoaGold)"
          />
          {/* Main Leaf Clusters */}
          <path
            d="M95 78 C70 42, 28 35, -5 45 C25 55, 65 62, 92 80 Z"
            fill="#FFDE00"
          />
          <path
            d="M96 76 C82 30, 60 2, 20 -10 C48 15, 75 45, 94 78 Z"
            fill="#FFD700"
          />
          <path
            d="M98 75 C115 25, 125 -15, 100 -45 C112 -5, 112 35, 96 75 Z"
            fill="#FFDE00"
          />
          <path
            d="M101 77 C140 32, 178 12, 222 8 C182 30, 142 54, 99 80 Z"
            fill="#FF69B4"
          />
          <path
            d="M100 80 C150 58, 195 68, 240 92 C195 92, 150 86, 98 83 Z"
            fill="#FFDE00"
          />
          <path
            d="M96 82 C125 110, 160 138, 205 158 C165 138, 135 110, 94 84 Z"
            fill="#20B2AA"
          />
          <path
            d="M93 84 C108 130, 135 172, 172 202 C142 172, 118 132, 90 87 Z"
            fill="#FFDE00"
          />
        </g>

        {/* 4. Right Coconut Palm Fronds (Framing top-right of identity) */}
        <g opacity="0.45" transform="translate(260, 40) scale(0.85)">
          <path
            d="M140 20 C100 25, 50 50, 15 95 C55 78, 100 58, 140 45 Z"
            fill="#FF69B4"
          />
          <path
            d="M145 35 C95 60, 45 105, 5 160 C48 130, 95 95, 145 62 Z"
            fill="#FFDE00"
          />
          <path
            d="M148 55 C108 100, 70 155, 35 225 C72 180, 115 135, 148 85 Z"
            fill="#FF69B4"
          />
          <path
            d="M150 78 C120 130, 95 190, 75 265 C102 210, 135 160, 150 110 Z"
            fill="#FFDE00"
          />
          <path
            d="M152 105 C132 165, 118 230, 110 300 C128 240, 145 185, 152 135 Z"
            fill="#20B2AA"
          />
        </g>

        {/* 5. Layered Arabian Sea Coastal Waves along the lower section */}
        <path
          d="M-20 400 Q 80 375, 180 405 T 380 395 T 440 400 L 440 520 L -20 520 Z"
          fill="url(#cardGoaWaveDeep)"
          opacity="0.35"
        />
        <path
          d="M-20 425 Q 100 395, 220 430 T 400 415 T 440 425 L 440 520 L -20 520 Z"
          fill="url(#cardGoaTeal)"
          opacity="0.45"
        />
        <path
          d="M-20 455 Q 110 430, 240 460 T 420 445 T 440 455 L 440 520 L -20 520 Z"
          fill="url(#cardGoaGold)"
          opacity="0.4"
        />

        {/* 6. Goa Geo Stamp & Decorative Badge */}
        <text
          x="385"
          y="350"
          fill="#FFDE00"
          opacity="0.45"
          fontSize="7"
          fontWeight="800"
          letterSpacing="0.22em"
          textAnchor="end"
        >
          15.2993° N · 74.1240° E
        </text>
        <text
          x="385"
          y="363"
          fill="#FFB6D9"
          opacity="0.38"
          fontSize="5.8"
          fontWeight="700"
          letterSpacing="0.16em"
          textAnchor="end"
        >
          ARABIAN SEA · GOA COAST
        </text>
      </svg>
    </div>
  );
}
