import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiHandler } from "next";

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
        if (credentials.email === "juan@test.com" && credentials.password === "password123") {
          return { id: "1", email: "juan@test.com", name: "Juan" };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.id as any;
      }
      return session;
    },
  },
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
