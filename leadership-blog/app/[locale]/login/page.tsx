import { AuthTemplate } from '@/components/template/authtemplate';
import { LoginForm } from '@/components/organisms/loginform';
import Header from '@/components/organisms/header';

export default function LoginPage() {
  return (
    <AuthTemplate>
      <Header />
      <LoginForm />
    </AuthTemplate>
  );
}
