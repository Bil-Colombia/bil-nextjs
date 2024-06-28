'use client'

import { signIn, useSession } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setToken } from '@/lib/features/auth/authSlice'
import { useState } from 'react'

type Inputs = {
  email: string
  password: string
}

function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const [loginError, setLoginError] = useState<string | null>(null)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password
    })

    if (result?.ok) {
      const token = session?.user?.jwt
      dispatch(setToken(token || ""))
      router.push('/client')
    }
    else {
      setLoginError(result?.error || 'Login Failed')
      setTimeout(() => {
        setLoginError(null)
      }, 5000)
    }
  };

  return (
    /*     <div className="min-h-screen flex items-center justify-center">
          
        </div> */
    <div className='flex justify-center'>
      <Card className="p-4 max-w-md w-full">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {loginError && <div className='text-red-600'>{loginError}</div>}
          <div>
            <Label htmlFor="email" className="block text-sm font-medium">
              Email
            </Label>
            <Input
              type="text"
              id="email"
              autoComplete="email"
              placeholder='email@text.com'
              className="mt-1 block w-full rounded-md shadow-sm focus:border-slate-500 focus:ring focus:ring-slate-500 focus:ring-opacity-50"
              {...register('email', { required: true })}
            />
            {errors.email && <p className='text-red-600'>Email is required</p>}
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-medium ">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder='********'
              className="mt-1 block w-full rounded-md shadow-sm focus:border-slate-500 focus:ring focus:ring-slate-500 focus:ring-opacity-50"
              {...register('password', { required: true })}
            />
            {errors.password && <p className='text-red-600'>Password is required</p>}
          </div>
          <Button
            type="submit"
            className="w-full py-2 px-4 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;