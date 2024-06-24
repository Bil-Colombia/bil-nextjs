"use client"

import { useEffect, useState } from 'react';
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
import { useRouter } from 'next/navigation'
import { AliadoSelect } from '@/app/register/empresa/components/componentsRegisterEmpresaForm/AliadoSelect'

type Inputs = {
    razon: string
    nit: string
    aliado: string
}

export function RegisterEmpresaForm() {

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<Inputs>()
    const { isLoading, setIsLoading } = useUserAuth()
    const [nitDataExists, setNitDataExists] = useState<boolean>(false);
    const router = useRouter()

    useEffect(() => {
        // Check if empresa data exists in localStorage when component mounts
        const empresaData = localStorage.getItem('empresa');
        if (empresaData) {
            setNitDataExists(true);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    const aliadoValue = watch("aliado")

    function cancelar(){
        const empresaData = JSON.parse(localStorage.getItem('empresa') || '{}');

    if (empresaData && Object.keys(empresaData).length > 0) {
        router.push('/consultar');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>Registro Empresa</CardTitle>
                    <CardDescription>Registra tu empresa</CardDescription>
                </CardHeader>
                <CardContent>
                    {!nitDataExists && (
                        <div className="grid w-full items-center gap-4">
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
                                {errors.nit && <p className='text-red-600'>El NIT es requerido</p>}
                            </div>
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
                                {errors.razon && <p className='text-red-600'>La razón social es requerida</p>}
                            </div>
                        </div>
                    )}

                    {nitDataExists && (
                        <div>
                            <p>NIT: {JSON.parse(localStorage.getItem('empresa') || '{}').nit}</p>
                            <p>Razón Social: {JSON.parse(localStorage.getItem('empresa') || '{}').razon_social}</p>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={cancelar}>Cancel</Button>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {nitDataExists ? 'Continuar' : 'Crear Empresa'}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
