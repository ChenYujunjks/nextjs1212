// src/app/api/users/create.ts
import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../lib/supabase-client";
import User from "../../models/sb-user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email }: Partial<User> = req.body;

    const { data, error } = await supabase
      .from<User>("users")
      .insert([{ name, email }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(data);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
