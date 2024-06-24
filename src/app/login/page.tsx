import { Card } from '@/components/ui/card'
import Layout from '@/app/layout';
import LoginForm from './components/loginForm';

function LoginPage() {
  return (
    <div>
        <h1 className='text-2xl font-semibold flex justify-center py-2'>Login</h1>
        <LoginForm />
    </div>
  )
}

export default LoginPage