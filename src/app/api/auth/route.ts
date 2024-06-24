import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { email, password } = data;

  if (email === "juan@test.com" && password === "password123") {
    const token = jwt.sign(
      {
        email: "juan@test.com",
        username: "admin",
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      },
      "secret123"
    );
    const serialized = serialize("myToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    const headers = new Headers();
    headers.set("Set-Cookie", serialized);

    return new NextResponse(JSON.stringify({ id: 1, email, name:'Juan', token }), {
      status: 200,
      headers: headers,
    });
  }

  return new NextResponse(JSON.stringify({ error: "Invalid credentials" }), {
    status: 401,
  });
}
