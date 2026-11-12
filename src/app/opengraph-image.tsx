import { ImageResponse } from "next/og";

export const alt = "Tyson Tan — Creative Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070b1c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 12,
              width: 64,
              height: 12,
              background: "#3cffe8",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 24,
              width: 12,
              height: 40,
              background: "#3cffe8",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 52,
              width: 12,
              height: 40,
              background: "#3cffe8",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 500,
            color: "#3cffe8",
            letterSpacing: "-0.03em",
          }}
        >
          Tyson Tan
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            color: "#a8b0c8",
          }}
        >
          Creative Designer
        </div>
      </div>
    ),
    { ...size },
  );
}
