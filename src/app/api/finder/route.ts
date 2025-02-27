import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const customURL = url.searchParams.get("url");

  const longURL = await prisma.shortener.findFirst({ where: { shortURL: customURL } });

  if (!longURL) {
    return NextResponse.json({ error: "Short URL not found" }, { status: 404 });
  }

  return new Response(JSON.stringify({ longURL: longURL.longURL }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
