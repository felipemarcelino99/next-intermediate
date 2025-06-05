import { NextRequest, NextResponse } from "next/server";

export default function middlaware(request: NextRequest) {
  const maintenanceMode =
    process.env.MAINTENANCE_MODE === "TRUE" ? true : false;

  if (maintenanceMode && request.nextUrl.pathname !== "/manutencao") {
    const redirectUrl = new URL("/manutencao", request.url).toString();

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
