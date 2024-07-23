import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { num1, num2 } = await req.json();

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const result = num1 + num2;
  return NextResponse.json({ result });
}
