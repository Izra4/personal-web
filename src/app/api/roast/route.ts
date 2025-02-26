import prisma from "@/lib/prisma/prisma";

export async function POST(request: Request) {
  const { name, roast } = await request.json();

  const data = await prisma.roast.create({
    data: {
      name,
      review: roast,
    },
  });

  return new Response(JSON.stringify(data), { status: 201 });
}
