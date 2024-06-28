"use client"

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';

type Inputs = {
    razon: string;
    nit: string;
}

export function RegisterEmpresaForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [nitDataExists, setNitDataExists] = useState<boolean>(false);
    const [nitNotExists, setNitNotExists] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const empresaData = localStorage.getItem('empresa');
        const nitData = localStorage.getItem('nit');
        const suscripcion = localStorage.getItem('selectedSuscripcion');

        if (empresaData) {
            setNitDataExists(true);
        } else if (nitData) {
            setNitNotExists(true);
        } else {
            router.push('/consultar');
        }

        if (!suscripcion) {
            router.push('/suscripciones');
        } 
    }, [router]);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        submit(data);
    }

    const submit = async (formData: Inputs) => {
        const { razon, nit } = formData;
        if (nitNotExists) {
            const bodyEmpresa = {
                'razon_social': razon,
                'nom_comercial': null,
                'imagen': null,
                'pais': 1,
                'nit': nit,
                'dig_ver': 0,
                'rut': null,
                'auditoria_objeto_creacion': 0,
                'auditoria_origen_creacion': 'C',
                'auditoria_estado': 'A'
            }
        
            localStorage.setItem('infoEmpresa', JSON.stringify(bodyEmpresa));
            router.push('/register/user');
        }
        else{
            const url = process.env.NEXT_PUBLIC_USERS+`web/existsClient?id_empresa=${JSON.parse(localStorage.getItem('empresa')||'{}').id_empresa}`;
            const response = await fetch(url);
            const responseJson = await response.json();
            if(responseJson.MEN_ERRO === 'El cliente no existe'){
                router.push('/register/user');
            }
            else{
                localStorage.removeItem('empresa');
                localStorage.removeItem('selectedSuscripcion');
                localStorage.setItem('clientExists', 'true');
                router.push('/login');
            }
        }
                
    }

    const cancelar = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (nitDataExists) {
            localStorage.removeItem('empresa');
            localStorage.removeItem('selectedSuscripcion');
        }
        if (nitNotExists) {
            localStorage.removeItem('nit');
            localStorage.removeItem('selectedSuscripcion');
        }
        router.push('/consultar');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>{nitDataExists ? 'Información Empresa' : 'Registro Empresa'}</CardTitle>
                    {!nitDataExists && <CardDescription style={{marginTop:"30px"}}>{nitDataExists ? '' : 'Ingresa la infromacion de tu empresa'}</CardDescription> }
                </CardHeader>
                <CardContent>
                    {nitNotExists && (
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="nit">Nit</Label>
                                <Input
                                    id="nit"
                                    placeholder="NIT de la empresa"
                                    type='number'
                                    autoCapitalize='none'
                                    autoCorrect='off'
                                    defaultValue={JSON.parse(localStorage.getItem('nit') || '{}')}
                                    readOnly
                                    {...register('nit', { required: true })}
                                />
                                {errors.nit && <p className='text-red-600'>El NIT es requerido</p>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="razon">Razón Social</Label>
                                <Input
                                    id="razon"
                                    placeholder="Ingrese la razón social"
                                    type='text'
                                    autoCapitalize='none'
                                    autoCorrect='off'
                                    {...register('razon', { required: true })}
                                />
                                {errors.razon && <p className='text-red-600'>La razón social es requerida</p>}
                            </div>
                        </div>
                    )}

                    {nitDataExists && (
                        <div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="nit">Nit</Label>
                                <Input
                                    id="nit"
                                    placeholder="NIT de la empresa"
                                    type='text'
                                    autoCapitalize='none'
                                    autoCorrect='off'
                                    defaultValue={JSON.parse(localStorage.getItem('empresa') || '{}').nit}
                                    readOnly
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5" style={{ marginTop: "10px" }}>
                                <Label htmlFor="razon">Razón Social</Label>
                                <Input
                                    id="razon"
                                    placeholder="Razón social"
                                    type='text'
                                    autoCapitalize='none'
                                    autoCorrect='off'
                                    defaultValue={JSON.parse(localStorage.getItem('empresa') || '{}').razon_social}
                                    readOnly
                                />
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={cancelar}>Cancelar</Button>
                    <Button type="submit">
                        {nitDataExists ? 'Continuar' : 'Crear Empresa'}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
