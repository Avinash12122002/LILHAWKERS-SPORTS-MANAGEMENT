import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const AUTH_COOKIE_NAME = "lh_admin_session";
const SECRET_TOKEN = "authenticated_admin_session_valid";

export async function verifyAdminAuth(request?: Request): Promise<boolean> {
  // Check Request Cookie Header or Authorization Header
  if (request) {
    const authHeader = request.headers.get("authorization");
    if (authHeader && authHeader === `Bearer ${SECRET_TOKEN}`) {
      return true;
    }

    const cookieHeader = request.headers.get("cookie");
    if (cookieHeader && cookieHeader.includes(`${AUTH_COOKIE_NAME}=${SECRET_TOKEN}`)) {
      return true;
    }
  }

  // Check Next.js Cookie Store
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(AUTH_COOKIE_NAME);
    if (sessionCookie && sessionCookie.value === SECRET_TOKEN) {
      return true;
    }
  } catch {
    // If outside cookies context
  }

  return false;
}

export function validateAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export { AUTH_COOKIE_NAME, SECRET_TOKEN };
