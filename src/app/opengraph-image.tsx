import { ImageResponse } from "next/og";

export const alt = "Kyreon · Web & Product Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Editorial OG card — warm paper, ink type, one signal-orange accent.
export default async function Image() {
  const paper = "#F8FAFC";
  const ink = "#131722";
  const orange = "#2F6BF6"; // electric blue accent
  const gray = "#63697A";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: wordmark + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                background: orange,
                borderRadius: "4px",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: ink,
                letterSpacing: "-0.02em",
              }}
            >
              Kyreon
            </span>
          </div>
          <span
            style={{
              fontSize: "20px",
              color: gray,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Web &amp; Product Studio
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: ink,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              display: "flex",
            }}
          >
            We design &amp; build
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              display: "flex",
              color: ink,
            }}
          >
            products that{" "}
            <span style={{ color: orange, marginLeft: "20px" }}>convert.</span>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: `1px solid #E2E6EE`,
            paddingTop: "28px",
          }}
        >
          <span style={{ fontSize: "24px", color: gray, display: "flex" }}>
            Next.js · React · UI/UX · Mobile
          </span>
          <span style={{ fontSize: "24px", color: ink, display: "flex", fontWeight: 600 }}>
            kyreon.space
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
