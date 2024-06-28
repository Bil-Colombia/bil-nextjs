import UserAuthForm from '@/app/register/user/components/user-auth-form'
import { Card } from '@/components/ui/card'

function RegisterPage() {
  return (
    <div className="flex justify-center py-5">
        <UserAuthForm />
    </div>
  )
}

export default RegisterPage