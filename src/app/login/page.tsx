import { Card } from '@/components/ui/card'
import Layout from '@/app/layout';
import LoginForm from './components/loginForm';

function LoginPage() {
  return (
    <div>
        <h1 className='text-2xl font-semibold justify-center py-2' style = {{textAlign: 'center'}}>Inicio de sesión</h1>
        <LoginForm />
    </div>
  )
}

export default LoginPage