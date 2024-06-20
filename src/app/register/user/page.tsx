import UserAuthForm from '@/app/register/user/components/user-auth-form'
import { Card } from '@/components/ui/card'

function RegisterPage() {
  return (
    <div className="flex justify-center py-5">
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 items-center'>
          <h1 className='text-2xl font-semibold -tracking-tight'>Create Account</h1>
          <p className='text-sm text-muted-foreground'>Enter yout Email below to create your account</p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  )
}

export default RegisterPage