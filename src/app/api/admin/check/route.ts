import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth";

export async function GET(request: Request) {
  const isAuth = await verifyAdminAuth(request);

  if (!isAuth) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true });
}
