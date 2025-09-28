"use server"

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getMyToken() {


  const cookieToken =await cookies();
  const authToken = cookieToken.get('next-auth.session-token')?.value||cookieToken.get('__Secure-next-auth.session-token')?.value;
  const decodedToken = await decode({token:authToken,secret:process.env.NEXTAUTH_SECRET!})

  

    return decodedToken?.token
}