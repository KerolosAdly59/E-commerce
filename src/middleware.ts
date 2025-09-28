import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
    
    const token = await getToken({req:request})

    const {pathname}= request.nextUrl


const authPage = ["/login", "/register" ,"/forgetPassword"]
const routes = ["/brands", "/cart", "/categories", "/checkOut" ,"/ProductDetails" , "/products","/wishList","/allorders","/"]

if(!token && routes.includes(pathname)){
      return NextResponse.redirect(new URL('/login', request.url))

}
if(token && authPage.includes(pathname)){
      return NextResponse.redirect(new URL('/', request.url))

}
}
 
export const config = {
  matcher: ["/brands", "/cart", "/categories", "/ProductDetails" , "/products","/wishList","/checkOut" ,"/allorders","/login", "/register" ,"/forgetPassword","/"],
}