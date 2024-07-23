import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const user = new User(data);
  await user.save();
  return NextResponse.json(user, { status: 201 });
}
