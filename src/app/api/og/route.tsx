import { ImageResponse } from "next/og";

import { NAME, URL as URL_CONSTANT } from "@/constants";
import { loadFont } from "@/lib";

export const runtime = "edge";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const description = searchParams.get("description") || "";
  const title = searchParams.get("title") || "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            backgroundColor: "white",
            backgroundImage:
              "linear-gradient(180deg, rgba(216,180,254,1) 0%, rgba(254,249,195,1) 50%, white 100%)",
            display: "flex",
            flexDirection: "column-reverse",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(168,85,247,1)",
              borderRadius: "0.5rem",
              display: "flex",
              padding: "0.25rem",
            }}
          >
            <img
              alt={NAME}
              src={`${URL_CONSTANT}/emily.png`}
              style={{ height: "8rem", width: "8rem" }}
            />
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "4rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: 0,
              marginTop: "1rem",
            }}
          >
            <b>{title}</b>
          </h1>
          <p style={{ fontSize: "1.5rem", fontWeight: 400 }}>{description}</p>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          data: await loadFont({ string: description, weight: 400 }),
          name: "Description",
          style: "normal",
        },
        {
          data: await loadFont({ string: title, weight: 800 }),
          name: "Title",
          style: "normal",
        },
      ],
      height: 630,
      width: 1200,
    },
  );
};
