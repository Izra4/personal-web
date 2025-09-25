import { NextRequest } from "next/server";
import prisma from "@/lib/prisma/prisma";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ nim: string }> }) {
  const nim = (await params).nim;

  const data = await prisma.regisDemo.findMany({
    where: { nim },
  });

  if (!data || data.length === 0) {
    return Response.json(
      {
        code: 404,
        status: "Failed to fetch data",
        message: "NIM nya bener?",
      },
      { status: 404 },
    );
  }

  return Response.json(data, { status: 200 });
}
