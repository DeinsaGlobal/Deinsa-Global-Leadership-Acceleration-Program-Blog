import { AdminUser } from '@/types/user.type';

export async function verifyCredentials(
  email: string,
  password: string,
): Promise<AdminUser | null> {
  // Check if the email and password match the environment variables
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return null;
  }

  // Return user information if credentials match
  return {
    id: '1',
    email: process.env.ADMIN_EMAIL,
    name: 'Admin',
    role: 'admin',
  };
}

export function isAdmin(user: { role?: string } | null | undefined): boolean {
  return user?.role === 'admin';
}
