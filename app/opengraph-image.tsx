import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/images/profile/og-portrait.jpg"),
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  const subtitle = "9+ years shipping React, Node.js, PostgreSQL and .NET products, and leading the remote team behind them.";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle 560px at 0% 0%, rgba(220,38,38,0.42), rgba(7,3,3,0)), #070303",
        color: "white",
        padding: "64px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* portrait, right side, fading into the card */}
      <img
        src={portraitSrc}
        alt=""
        width={560}
        height={630}
        style={{ position: "absolute", right: 0, top: 0, width: 560, height: 630 }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 560,
          height: 630,
          background:
            "linear-gradient(90deg, #070303 0%, rgba(7,3,3,0.55) 38%, rgba(7,3,3,0) 80%)",
        }}
      />
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
        style={{ display: "flex", flexDirection: "column", maxWidth: "700px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 70,
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
            fontSize: 26,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "640px",
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
