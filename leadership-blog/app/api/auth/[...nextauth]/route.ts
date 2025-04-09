import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
      ) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Check if the credentials are provided
        const envEmail = process.env.ADMIN_EMAIL;
        const envPassword = process.env.ADMIN_PASSWORD;

        // Perform your authentication logic here
        // For example, check against a database or an API

        if (email === envEmail && password === envPassword) {
          return { id: '1', name: 'Admin', email: 'admin@email.com' }; //this is an example
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Use JWT for session management without DB
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async redirect({ baseUrl, url }) {
      const localeMatch = url.match(/\/([a-z]{2}(-[A-Z]{2})?)(\/|$)/);
      const locale = localeMatch ? localeMatch[1] : 'en'; // Default to 'en' if no locale is found
      return `${baseUrl}/${locale}`;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
