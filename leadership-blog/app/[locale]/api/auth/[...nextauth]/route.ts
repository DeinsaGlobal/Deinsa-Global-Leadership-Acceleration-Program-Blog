import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'username' | 'password', string> | undefined,
      ) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // Perform your authentication logic here
        // For example, check against a database or an API

        if (username === 'admin' && password === 'password') {
          return { id: '1', name: 'Admin' };
        } else {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
