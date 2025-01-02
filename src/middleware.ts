import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/pt-BR", request.url));

  return NextResponse.next();
};

export const config = {
  // Aplica o middleware para todas as requisições que começam com "/"
  matcher: "/",
};
