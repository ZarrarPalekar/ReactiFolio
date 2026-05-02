import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const subtitle = `9+ years across MERN, PERN, .NET, SaaS, CRM/CMS, team leadership, and AI-assisted SDLC by ${siteConfig.name}.`;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle at top, rgba(220,38,38,0.45), rgba(5,5,5,1) 48%), linear-gradient(180deg, #140707 0%, #050505 100%)",
        color: "white",
        padding: "64px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#f87171",
        }}
      >
        <div>{siteConfig.name}</div>
        <div>Mumbai, India</div>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            lineHeight: 1.02,
            fontWeight: 700,
            letterSpacing: "-0.06em",
          }}
        >
          <span>MERN/PERN Full Stack</span>
          <span>Team Lead + CSM</span>
          <span>AI-Assisted SDLC</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "860px",
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(248,113,113,0.6)",
            borderRadius: 9999,
            padding: "14px 24px",
            fontSize: 22,
            color: "#f87171",
          }}
        >
          zarrarpalekar.com
        </div>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 9999,
            padding: "14px 24px",
            fontSize: 22,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          React • Node.js • PostgreSQL • .NET
        </div>
      </div>
    </div>,
    size,
  );
}
