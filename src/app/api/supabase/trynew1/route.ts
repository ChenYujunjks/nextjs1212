import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase-client";

export async function GET(request: NextRequest) {
  const { data, error } = await supabase.from("trynew1").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("trynew1")
    .insert([body])
    .select(); // 添加这一行!!!;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // console.log("Inserted Data:  ", data);
  return NextResponse.json(data);
}

// 同样可以添加 PUT 方法
