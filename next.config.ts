import type { NextConfig } from "next";

// This generator is entirely client-side: photos and personal details never
// leave the visitor's device. A static export keeps that privacy model intact
// and lets the project deploy to Vercel, Netlify, Cloudflare Pages, or any
// basic static host without a backend.
const nextConfig: NextConfig = {
  output: "export"
};

export default nextConfig;
