import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "FrescoAR — Instalação, manutenção e limpeza de ar-condicionado em Londrina — PR";
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
        gap: 64,
        padding: "0 96px",
        color: "#E8EDF5",
        background:
          "radial-gradient(circle at 90% 0%, rgba(0,180,216,0.28), transparent 45%), radial-gradient(circle at 0% 100%, rgba(106,191,75,0.16), transparent 40%), linear-gradient(180deg, #061434 0%, #0B2559 100%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        width={320}
        height={320}
        alt=""
        style={{
          borderRadius: 9999,
          border: "6px solid #00B4D8",
          boxShadow: "0 0 60px rgba(0,180,216,0.35)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 112, fontWeight: 800, letterSpacing: 4 }}>
          <span style={{ color: "#FFFFFF" }}>FRESCO</span>
          <span style={{ color: "#6ABF4B" }}>AR</span>
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 24,
            letterSpacing: 3,
            color: "#64D2F0",
            textTransform: "uppercase",
          }}
        >
          Instalação · Manutenção · Limpeza
        </div>
        <div style={{ marginTop: 36, fontSize: 28, color: "#8B9CC0" }}>
          Londrina — PR · (43) 99608-4754
        </div>
      </div>
    </div>,
    size,
  );
}
