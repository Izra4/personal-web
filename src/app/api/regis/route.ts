import prisma from "@/lib/prisma/prisma";

export async function POST(request: Request) {
  const { nama, nim, origin } = await request.json();

  const data = await prisma.regisDemo.create({
    data: {
      nama,
      nim,
      origin,
    },
  });

  if (!data) {
    return new Response(
      JSON.stringify({
        code: 500,
        status: "Failed",
        message: "User failed to be created",
      }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      code: 201,
      status: "Success",
      message: "New user is created",
      data: data,
    }),
    { status: 201 },
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const nim = searchParams.get("nim");
  const origin = searchParams.get("origin");

  const data = await prisma.regisDemo.findMany({
    where: {
      ...(nim ? { nim: { contains: nim } } : {}),
      ...(name ? { nama: { contains: name } } : {}),
      ...(origin ? { origin: { contains: origin } } : {}),
    },
  });

  if (data.length === 0 || !data) {
    return new Response(
      JSON.stringify({
        status: 404,
        message: "Data is empty",
        data: [],
      }),
      { status: 404 },
    );
  }

  return new Response(
    JSON.stringify({
      status: 200,
      message: "Data is fetched successfully",
      data: data,
    }),
    { status: 200 },
  );
}
