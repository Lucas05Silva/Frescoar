import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "FrescoAR: instalação, manutenção e limpeza de ar-condicionado em Londrina — PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 50% 30%, #F7F5F0 0%, #FFFFFF 75%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "56px 72px",
          borderRadius: 40,
          background: "#F7F5F0",
          boxShadow: "0 2px 80px rgba(11,37,89,0.10)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={260}
          height={260}
          alt=""
          style={{
            borderRadius: 9999,
            border: "8px solid #FFFFFF",
            boxShadow: "0 6px 36px rgba(11,37,89,0.12)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700 }}>
            <span style={{ color: "#0B2559" }}>Fresco</span>
            <span style={{ color: "#6ABF4B", marginLeft: -18 }}>AR</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 22, letterSpacing: 5, color: "#5B6170" }}>
            INSTALAÇÃO · MANUTENÇÃO · LIMPEZA
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              padding: "14px 24px",
              borderRadius: 14,
              background: "#0B2559",
              borderLeft: "5px solid #6ABF4B",
              color: "#FFFFFF",
              fontSize: 26,
            }}
          >
            Londrina — PR · (43) 99608-4754
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
