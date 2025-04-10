import { AuthTemplate } from '@/components/templates/authtemplate';
import { LoginForm } from '@/components/organisms/loginform';

export default function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
