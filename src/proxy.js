import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const privateRoutes = ["/private", "/user-dashboard", "/admin-dashboard"];
const adminRoutes = ["/admin-dashboard"];
export const proxy = async (req) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const reqPath = req.nextUrl.pathname;
  const isAuthenticated = Boolean(token);

  const isUser = token?.role === "user";
  const isAdmin = token?.role === "admin";

  const isPrivate = privateRoutes.some((route) => reqPath.startsWith(route))

  const isAdminRoute = adminRoutes.some((route) => reqPath.startsWith(route));

    // Logged in na kintu private route e dhukhte chacche, user-dashboard / admin-dashboard
  if(!isAuthenticated && isPrivate)   {
    const loginUrl = new URL('/api/auth/signin', req.url)

    // Login er por user jekhane jaite chaise oikhane redirect korbo


    loginUrl.searchParams.set('callbackUrl', reqPath);
    return NextResponse.redirect(loginUrl)
  }
  
//   Logged in kintu admin na abar admin route e jaite chaitase
  if(isAuthenticated && !isAdmin && isAdminRoute) return NextResponse.rewrite(new URL('/forbidden', req.url))

 // NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url))

  console.log(reqPath); 
  console.log(token);
  return NextResponse.next();
};


export const config = {
  matcher: [
    "/private/:path*",
    "/admin-dashboard/:path*",
    "/user-dashboard/:path*",
    "/admin-dashboard",
    "/user-dashboard",
    '/private'
  ],
};

/**
 * await getToken diye token niye ashbo
 * {
    name: 'Jamal',
    email: 'user1@gmail.com',
    picture: 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGPWN9mzxhh6PvASEhZtGDnh0XpZ9rXdmAKgSnoq3pw&s=10',
    role: 'user',
    iat: 1790407803,
    exp: 1792999803,
    jti: '63b8df8a-8adf-470f-9db9-b59d7a258446'
  }
  *  
*/
