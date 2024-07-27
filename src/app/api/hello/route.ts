import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello from API route" });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}
