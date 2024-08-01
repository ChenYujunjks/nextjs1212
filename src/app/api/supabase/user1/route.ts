import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase-client";

export async function GET(request: NextRequest) {
  const { data, error } = await supabase.from("user1").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  console.log("i got all the tiem!@@!@$");
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { data, error } = await supabase.from("user1").insert([body]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// 同样可以添加 PUT 和 DELETE 方法
