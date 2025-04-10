import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your-cool-username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-secure-password',
        },
      },
      async authorize(credentials) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { username, password } = credentials!;

        // Verifica las credenciales aquí usando las variables de entorno
        if (
          username === process.env.USERNAME &&
          password === process.env.PASSWORD
        ) {
          // Devuelve un objeto con la forma correcta: ID como string
          return { id: String(1), name: username }; // Convertir id a string
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login', // Ruta personalizada para la página de login (opcional)
  },
  session: {
    strategy: 'jwt', // Usar JWT para las sesiones
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Guarda el ID del usuario en el token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Pasa el ID al objeto de sesión
      }
      return session;
    },
  },
};
