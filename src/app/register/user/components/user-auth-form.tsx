"use client"

import { useUserAuth } from "@/context/UserAuthContext"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
import { Icons } from '@/components/Icons'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"

type Inputs = {
    email: string
    password: string
    nit: string
}

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> { }

function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const { isLoading, setIsLoading } = useUserAuth()
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        handelButtonclick()
    }

    const handelButtonclick = async () => {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 5000))
        router.push('/register/empresa')
        setIsLoading(false)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="**********"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="new-password"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register('password', { required: true })}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="nit">Nit Empresa</Label>
                        <Input
                            id="nit"
                            placeholder="22222222"
                            type="test"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register('nit', { required: true })}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute insert-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    )
}

export default UserAuthForm