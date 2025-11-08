import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["bg","en"];
const defaultLocale = "bg";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // игнорирай Next вътрешни и статични ресурси
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.[\w]+$/)
  ) return NextResponse.next();

  // ако вече има локал в пътя → не редиректваме
  if (locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  // иначе добавяме дефолтния локал
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
