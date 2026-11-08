import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "./lib/locales";

/**
 * Any path without a language prefix (including "/") is redirected to the
 * default language, Indonesian: "/" -> "/id", "/foo" -> "/id/foo".
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any path with a file extension (icon.svg, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
