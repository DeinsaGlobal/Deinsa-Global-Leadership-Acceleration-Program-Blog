import { AuthTemplate } from '@/components/template/authtemplate';
import { LoginForm } from '@/components/organisms/loginform';

export default function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
