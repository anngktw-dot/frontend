import { AuthLayout } from '../../widgets/auth/ui/auth-layout'
import { RegisterForm } from '../../features/auth/ui/register-form'

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  )
}
