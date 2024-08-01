import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase-client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // 对密码进行哈希处理
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const { name, email } = body;
  // 插入用户数据，包括加密后的密码
  const { data, error } = await supabase
    .from("user1")
    .insert([{ username: name, email, password: hashedPassword }])
    .select(); // 添加这一行!!!

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// 同样可以添加 PUT 和 DELETE 方法
