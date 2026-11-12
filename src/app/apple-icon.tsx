import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070b1c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 16,
              width: 88,
              height: 16,
              background: "#3cffe8",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 38,
              left: 32,
              width: 16,
              height: 60,
              background: "#3cffe8",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 38,
              left: 72,
              width: 16,
              height: 60,
              background: "#3cffe8",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
