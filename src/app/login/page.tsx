import { AuthLayout } from '../../widgets/auth/ui/auth-layout'
import { LoginForm } from '../../features/auth/ui/login-form'

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
