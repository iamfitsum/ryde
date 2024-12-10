import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, clerkId } = body;

    if (!name || !email || !clerkId) {
      return Response.json({ error: "Missing required fields", status: 400 });
    }
    const response = await sql`
      INSERT INTO users (name, email, clerk_id)
      VALUES (${name}, ${email}, ${clerkId})
    `;

    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    } else {
      return new Response("An unknown error occurred", { status: 500 });
    }
  }
}
