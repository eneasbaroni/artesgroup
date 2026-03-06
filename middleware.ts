// middleware.ts  ← en la raíz del proyecto
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function middleware(req: NextRequest) {
  const isApiRoute = req.nextUrl.pathname.startsWith("/api/");
  const method = req.method;

  // Para rutas API, solo proteger POST, PUT, DELETE (GET es público)
  if (isApiRoute && method === "GET") {
    return NextResponse.next();
  }

  const token = req.cookies.get("auth-token")?.value;

  if (!token) {
    // Para rutas API, retornar JSON 401
    if (isApiRoute) {
      return NextResponse.json(
        { message: "No autorizado. Debes iniciar sesión." },
        { status: 401 },
      );
    }
    // Para páginas, redirigir al login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    // Token inválido o expirado
    if (isApiRoute) {
      return NextResponse.json(
        { message: "Sesión expirada o inválida." },
        { status: 401 },
      );
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Define qué rutas proteger (páginas y APIs)
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/api/artists/:path*",
    "/api/events/:path*",
    // Agrega aquí otras rutas API que necesiten protección
  ],
};
