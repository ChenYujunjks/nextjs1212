// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import supabase from "../../../lib/supabase-client";

export async function GET() {
  const { data, error } = await supabase.from("newtry").select("*");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
