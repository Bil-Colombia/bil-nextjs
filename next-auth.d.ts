// types/next-auth.d.ts
import NextAuth, { DefaultSession, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      jwt: string;
    } & DefaultSession["user"];
  }

  interface User extends NextAuthUser {
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    jwt: string;
  }
}
