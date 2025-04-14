// app/api/auth/[...nextauth]/authConfig.ts
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials ?? {};

        if (
          username === process.env.AUTH_USERNAME &&
          password === process.env.AUTH_PASSWORD
        ) {
          return {
            id: process.env.AUTH_USER_ID,
            name: process.env.AUTH_USER_NAME,
            email: process.env.AUTH_USER_EMAIL,
            role: 'admin',
          } as { id: string; name: string; role: string };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
