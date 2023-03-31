import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const hashed = await PreviousMap.user.create({
    data: {
      email,
      password: hashed,
    },
  });

  return NextResponse.json({
    user: {
      email: user.email,
    },
  });
}
