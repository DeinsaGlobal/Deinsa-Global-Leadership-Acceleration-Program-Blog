/*
  We create a custom type for the user object that will be returned from the API.
  This will represent the Admin user object.
*/

export type AdminUser = {
  id: string;
  email: string | undefined;
  name: string;
  role: 'admin';
};
