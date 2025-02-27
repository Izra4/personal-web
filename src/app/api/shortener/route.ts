import prisma from "@/lib/prisma/prisma";
import { randomUrlGenerator } from "@/utils/random-url-generator";

export async function POST(request: Request) {
  const { longURL, customURL } = await request.json();
  let randomURL;

  if (!longURL) {
    return new Response("Long URL is required", { status: 400 });
  }

  if (!customURL) {
    randomURL = randomUrlGenerator();
  }

  const shortURLExist = await prisma.shortener.findFirst({
    select: {
      id: true,
    },
    where: {
      shortURL: {
        equals: customURL,
      },
    },
  });

  if (shortURLExist) {
    return new Response("Short URL already exists", { status: 400 });
  }

  const data = await prisma.shortener.create({
    data: {
      longURL: longURL,
      shortURL: customURL ? "/" + customURL : "/" + randomURL,
    },
  });

  return new Response(JSON.stringify(data), { status: 201 });
}
