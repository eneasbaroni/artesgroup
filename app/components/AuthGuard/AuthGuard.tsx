import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { ReactNode } from "react";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
      return false;
    }

    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Componente que oculta su contenido si el usuario no está autenticado.
 * Solo funciona en Server Components.
 *
 * @example
 * ```tsx
 * <AuthGuard>
 *   <button>Solo visible para usuarios autenticados</button>
 * </AuthGuard>
 * ```
 */
export default async function AuthGuard({
  children,
  fallback = null,
}: AuthGuardProps) {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
