import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pandu Utomo – Web & App Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.25) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "radial-gradient(circle at 70% 50%, rgba(79,70,229,0.15) 0%, transparent 60%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.4)",
            borderRadius: "999px",
            padding: "8px 24px",
            color: "#a5b4fc",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          Web & App Developer · Indonesia
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
            display: "flex",
            marginBottom: "24px",
          }}
        >
          Pandu Utomo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "700px",
            display: "flex",
            lineHeight: 1.5,
          }}
        >
          Crafting high-performance web & mobile experiences
        </div>

        {/* Contact line */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "32px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          <span>pandu.utomo.2002@gmail.com</span>
          <span>·</span>
          <span>+62 821 3713 8687</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
