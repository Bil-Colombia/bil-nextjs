import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default withAuth({
  pages: {
    signIn: "/client",
    signOut: "/login",
  },
  callbacks: {
    authorized: async ({ req }) => {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      console.log(token);

      if (!token) {
        return false;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_USERS}web/authenticate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.jwt}`,
          },
        }
      );

      return res.ok;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/client:path*", "/api:path*"],
};
