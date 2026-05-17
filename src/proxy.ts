import { NextResponse, type NextRequest } from "next/server";
import { injectMarkdownAlternateLink } from "@dualmark/core";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const htmlUrl = request.nextUrl.toString();
  const mdUrl = new URL("/llms.txt", request.nextUrl.origin).toString();
  return injectMarkdownAlternateLink(response, htmlUrl, mdUrl);
}

export const config = {
  matcher: [
    "/((?!_next/|favicon.ico|icon.png|llms.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|mp4|webm|css|js|woff|woff2|ttf|otf|map)$).*)",
  ],
};
