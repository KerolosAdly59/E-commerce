import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultSession["user"] & {
      id?: string;
    };
    token?: string; // 🟢 أضفنا الـ token هنا
  }

  interface JWT {
    user?: any;
    token?: string;
  }
}
