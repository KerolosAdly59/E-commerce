
import { AuthOptions } from "next-auth"
import { jwtDecode } from "jwt-decode";

import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions: AuthOptions = {



    pages: {
        signIn: "/login"
    },

    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                email: { label: "email", type: "email", placeholder: "email@gmail.com" },
                password: { label: "Password", type: "password" }
            },

            authorize: async function (credentials) {

                const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    method: 'post',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: { "content-Type": "application/json" }
                })
                const payload = await response.json()
                console.log(payload);


                if (payload.message === 'success') {

                    const { id }: { id: string } = jwtDecode(payload.token)
                    return {
                        id: id,
                        user: payload.user,
                        token: payload.token,
                    }
                }

                throw new Error(payload.message || "faild to login")

            }
        })
    ],

   
    callbacks:{
        async jwt({ token, user }) {

        if (user) {
            token.user = user?.user
            token.token = user?.token
        }
        return token
    },


      async session({ session, token }) {
        if(token){
            session.user =token?.user
            session.token = token?.token
        }
        return session
    },
    }


}