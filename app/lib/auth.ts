import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function verifyAuth(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get("auth-token")?.value;

  if (!token) {
    return false;
  }

  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}
