import prisma from "@/lib/prisma/prisma";

export async function POST(request: Request) {
  try {
    const { address } = await request.json();

    if (!address || typeof address !== "string" || !address.trim()) {
      return new Response("Address is required", { status: 400 });
    }

    const data = await prisma.addressSubmission.create({
      data: {
        address: address.trim(),
      },
    });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.error("Failed to save address", error);
    return new Response("Failed to save address", { status: 500 });
  }
}
