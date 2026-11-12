import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
            width: 24,
            height: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 4,
              left: 2,
              width: 20,
              height: 4,
              background: "#3cffe8",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 6,
              width: 4,
              height: 12,
              background: "#3cffe8",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 14,
              width: 4,
              height: 12,
              background: "#3cffe8",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
