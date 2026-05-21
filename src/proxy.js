import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const currentPath = request.nextUrl.pathname;
  console.log(currentPath);
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", currentPath);

    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/add-idea", "/ideas/:path", "/my-ideas", "/my-interactions"],
};
