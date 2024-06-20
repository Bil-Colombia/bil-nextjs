"use client"

import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserAuth } from '@/context/UserAuthContext'
import { Icons } from '@/components/Icons'
import {useRouter} from 'next/navigation'
import { AliadoSelect } from '@/app/register/empresa/components/componentsRegisterEmpresaForm/AliadoSelect'

type Inputs = {
    razon: string
    nit: string
    aliado: string
}

export function RegisterEmpresaForm() {

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<Inputs>()
    const { isLoading, setIsLoading } = useUserAuth()
    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

        handeButtonClick()
    }

    async function handeButtonClick() {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 5000))
        router.push('/register/suscripciones')
        setIsLoading(false)
    }

    const aliadoValue = watch("aliado")

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>Registro Empresa</CardTitle>
                    <CardDescription>Registra tu empresa</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="razon">Razón Social</Label>
                            <Input
                                id="razon"
                                placeholder="Razón social"
                                type='text'
                                autoCapitalize='none'
                                autoCorrect='off'
                                disabled={isLoading}
                                {...register('razon', { required: true })}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nit">Nit</Label>
                            <Input
                                id="nit"
                                placeholder="NIT de la empresa"
                                type='text'
                                autoCapitalize='none'
                                autoCorrect='off'
                                disabled={isLoading}
                                {...register('nit', { required: true })}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="aliado">Aliado</Label>
                            <AliadoSelect 
                                value={aliadoValue}
                                onChange={(value) => setValue("aliado", value)}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Crear Empresa
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}