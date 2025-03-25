import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    request.nextUrl.pathname = `/b2b${request.nextUrl.pathname}`;

    return NextResponse.rewrite(request.nextUrl);
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}
