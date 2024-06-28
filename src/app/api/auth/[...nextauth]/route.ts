import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiHandler } from "next";
import { setCookie } from "cookies-next";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null;
        }

        // Tu lógica de autenticación
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_USERS}web/authenticate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        const user = await res.json();

        if (res.ok && user && user.BODY && user.BODY.token) {
          return {
            id: user.BODY.id,
            email: user.BODY.email,
            token: user.BODY.token,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
    updateAge: 60 * 60,
    generateSessionToken: () => {
      return require('crypto').randomBytes(32).toString('hex')
    },

  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.jwt = user.token;

        setCookie("jwt", user.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "none",
          maxAge: 60 * 30,
          path: "/",
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.jwt = token.jwt;
      }
      return session;
    },
  },
  events: {
    signOut: () => {
      setCookie("jwt", "", {
        maxAge: -1,
        path: "/",
      });
    },
  },
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
