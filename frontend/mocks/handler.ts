import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/login", async ({ request }) => {
    const body = await request.json();

    const { email } = body as any;

    if (email === "test@example.com") {
      return HttpResponse.json({
        message: "Login success",
        token: "abc123",
      });
    }

    return new HttpResponse(
      JSON.stringify({ message: "Invalid credentials" }),
      { status: 401 }
    );
  }),
];