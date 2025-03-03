import prisma from "@/lib/prisma/prisma";
import { hashPassword } from "@/utils/bcrypt";
import { isValidCustomURL } from "@/utils/custom-url-validation";
import { randomUrlGenerator } from "@/utils/random-url-generator";
import validUrl from "valid-url";

export async function POST(request: Request) {
  const { longURL, customURL, password } = await request.json();
  let randomURL;
  let hashedPassword;

  if (!longURL) {
    return new Response("Long URL is required", { status: 400 });
  }

  if (!validUrl.isUri(longURL)) {
    return new Response("Are you sure that is a valid URL? Retry with a valid one :D", {
      status: 400,
    });
  }

  if (!customURL) {
    randomURL = randomUrlGenerator();
  } else {
    if (!isValidCustomURL(customURL)) {
      return new Response("Whoops! Special character and space is not allowed...", { status: 400 });
    }
  }

  if (password) hashedPassword = await hashPassword(password);

  const shortURLExist = await prisma.shortener.findFirst({
    select: {
      id: true,
    },
    where: {
      shortURL: {
        equals: "/" + customURL,
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
      password: hashedPassword ? hashedPassword : null,
    },
  });

  return new Response(JSON.stringify(data), { status: 201 });
}
