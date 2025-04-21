// app/api/auth/[...nextauth]/authConfig.ts
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        //username: { label: 'Username', type: 'text' }, // Uncomment if you want to use username, but we need email, not username.
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (
          email === process.env.AUTH_USER_EMAIL &&
          password === process.env.AUTH_USER_PASSWORD
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
    /*
     Callbacks are used to redirect the user to the correct locale based on the URL
     This is useful for internationalization (i18n) in Next.js applications
    */
    async redirect({ baseUrl, url }) {
      const localeMatch = url.match(/\/([a-z]{2}(-[A-Z]{2})?)(\/|$)/);
      const locale = localeMatch ? localeMatch[1] : 'en'; // Default to 'en' if no locale is found
      return `${baseUrl}/${locale}`;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
