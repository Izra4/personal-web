import prisma from "@/lib/prisma/prisma";
import { comparePassword } from "@/utils/bcrypt";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const customURL = url.searchParams.get("url");

  const shortURLExist = await prisma.shortener.findFirst({
    select: {
      id: true,
      password: true,
    },
    where: {
      shortURL: customURL,
    },
  });

  if (!shortURLExist)
    return new Response(JSON.stringify({ error: "Short URL not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });

  if (shortURLExist?.password !== null)
    return new Response(JSON.stringify({ password: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const customURL = url.searchParams.get("url");
  const { password } = await request.json();

  const shortURLExist = await prisma.shortener.findFirst({
    select: {
      id: true,
      password: true,
    },
    where: {
      shortURL: customURL,
    },
  });

  if (!shortURLExist)
    return new Response(JSON.stringify({ error: "Short URL not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });

  const isPasswordValid = await comparePassword(password, shortURLExist.password || "");

  const result = isPasswordValid
    ? { isValid: true }
    : { isValid: false, error: "password invalid" };

  return new Response(JSON.stringify(result), {
    status: isPasswordValid ? 200 : 400,
    headers: { "Content-Type": "application/json" },
  });
}
