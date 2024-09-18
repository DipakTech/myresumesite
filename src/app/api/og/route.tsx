import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Default Title";
    const description =
      searchParams.get("description") ||
      "Default description goes here. Customize this with your own content.";
    const date =
      searchParams.get("date") || new Date().toISOString().split("T")[0];
    const isDarkMode = searchParams.get("dark") === "true";
    const isTwitter = searchParams.get("twitter") === "true";

    // Twitter requires a 2:1 aspect ratio
    const width = isTwitter ? 1200 : 1200;
    const height = isTwitter ? 600 : 630;

    return new ImageResponse(
      (
        <div
          style={{
            background: isDarkMode
              ? "linear-gradient(to bottom right, #1e293b, #0f172a)"
              : "linear-gradient(to bottom right, #f1f5f9, #e2e8f0)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px",
              borderRadius: "16px",
              border: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
              background: isDarkMode
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.05)",
              boxShadow: isDarkMode
                ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "80%",
            }}
          >
            <h1
              style={{
                fontSize: isTwitter ? "48px" : "64px",
                fontWeight: "bold",
                color: isDarkMode ? "#f8fafc" : "#0f172a",
                marginBottom: "20px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: isTwitter ? "24px" : "32px",
                color: isDarkMode ? "#cbd5e1" : "#334155",
                marginBottom: "40px",
                maxWidth: "80%",
              }}
            >
              {description}
            </p>
            <div
              style={{
                fontSize: isTwitter ? "18px" : "24px",
                color: isDarkMode ? "#94a3b8" : "#64748b",
              }}
            >
              {date}
            </div>
          </div>
        </div>
      ),
      {
        width,
        height,
      },
    );
  } catch (error) {
    console.error("Error generating image response:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
