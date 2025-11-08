import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["bg", "en"] as const;
const defaultLocale = "bg";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[\w]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
