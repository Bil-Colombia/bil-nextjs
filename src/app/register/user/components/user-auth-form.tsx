'use client';

import { signIn, useSession } from 'next-auth/react';
import { setToken } from '@/lib/features/auth/authSlice'
import { useDispatch } from 'react-redux';
import { useUserAuth } from "@/context/UserAuthContext";
import { useEffect, useState } from 'react';
import { HTMLAttributes } from "react";
import { Icons } from '@/components/Icons';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { usePostClientMutation } from "@/services/client/clientAPI";
import { usePostEmpresaMutation, useUpdateClientEmpresaMutation} from "@/services/empresa/empresa";
import { usePostClienteMutation } from '@/services/cliente/cliente';

type Inputs = {
    email: string;
    password: string;
    confirmationPassword: string;
};

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> { }

function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const { data: session } = useSession();
    const dispatch = useDispatch()
    const { isLoading, setIsLoading } = useUserAuth();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>();
    const [esCrearEmpresa, setEsCrearEmpresa] = useState<boolean>(false);
    const [nombreEmpresa, setNombreEmpresa] = useState<string>("");
    const [postClient, { isLoading: isMutating }] = usePostClientMutation();
    const [postEmpresa, { isLoading: isMutatingEmpresa }] = usePostEmpresaMutation();
    const [updateClientEmpresa, { isLoading: isMutatingUpdateClientEmpresa }] = useUpdateClientEmpresaMutation();
    const [postCliente, { isLoading: isMutatingCliente }] = usePostClienteMutation();
    const [loginError, setLoginError] = useState<string | null>(null)

    useEffect(() => {
        // Load empresa information from localStorage if available
        const infoEmpresa = localStorage.getItem('infoEmpresa');
        const empresa = localStorage.getItem('empresa');

        if (infoEmpresa) {
            setEsCrearEmpresa(true);
            setNombreEmpresa(JSON.parse(infoEmpresa).razon_social || "");
        } else if (empresa) {
            setNombreEmpresa(JSON.parse(empresa).razon_social || "");
        }
    }, []);


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (isPasswordValid(data.password) && data.password === data.confirmationPassword) {
            if (!esCrearEmpresa) {
                const body = {
                    nombre: null,
                    tipo: 'A',
                    password: data.password,
                    cor_elec: data.email,
                    empresa: JSON.parse(localStorage.getItem('empresa') || '{}').id_empresa,
                    auditoria_estado: 'A'
                };

                try {
                    setIsLoading(true);
                    const response = await postClient(body).unwrap();

                    if (!response.ERRO) {
                        const bodyClient = {
                            empresa_id : JSON.parse(localStorage.getItem('empresa') || '{}').id_empresa,
                            suscripcion : JSON.parse(localStorage.getItem('selectedSuscripcion') || '{}').id_suscripcion,
                            admin : response.BODY.client.id_user_client,
                            users: {},
                            auditoria_estado: 'N'
                        }

                        const responseCliente = await postCliente(bodyClient).unwrap();

                        if (!responseCliente.ERRO) {

                            ///Authenticate
                                const result = await signIn("credentials", {
                                    redirect: false,
                                    email: data.email,
                                    password: data.password
                                })
                            
                                if (result?.ok) {
                                    const token = session?.user?.jwt
                                    dispatch(setToken(token))
                                    router.push('/client')
                                }
                                else {
                                    setLoginError(result?.error || 'Login Failed')
                                    setTimeout(() => {
                                    setLoginError(null)
                                    }, 5000)
                                }
                                    
                        };

                    }
                } catch (error) {
                    console.error('Failed to post client:', error);
                } finally {
                    setIsLoading(false);
                }
            }
            else{
                await postEmpresa(JSON.parse(localStorage.getItem('infoEmpresa') || '{}')).then(
                    (response) => {
                        if (!response.error) {
                            const body = {
                                nombre: null,
                                rol_id: 1,
                                password: data.password,
                                cor_elec: data.email,
                                empresa: response.data.BODY.empresa.id_empresa,
                                auditoria_estado: 'A'
                            };
                            postClient(body).then(
                                async (responseClient) => {
                                    if (!responseClient.error) {
                                        const bodyEdit = {
                                            id_empresa: response.data.BODY.empresa.id_empresa,
                                            auditoria_objeto_creacion: responseClient.data.BODY.client.id_user_client
                                        };
                                        updateClientEmpresa(bodyEdit)

                                        const bodyClient = {
                                            empresa_id : response.data.BODY.empresa.id_empresa,
                                            suscripcion : JSON.parse(localStorage.getItem('selectedSuscripcion') || '{}').id_suscripcion,
                                            admin : responseClient.data.BODY.client.id_user_client,
                                            users: {},
                                            auditoria_estado: 'N'
                                        }

                                        const responseCliente = await postCliente(bodyClient).unwrap();

                                        if (!responseCliente.ERRO) {

                                            ///Authenticate
                                                const result = await signIn("credentials", {
                                                    redirect: false,
                                                    email: data.email,
                                                    password: data.password
                                                })
                                            
                                                if (result?.ok) {
                                                    const token = session?.user?.jwt
                                                    dispatch(setToken(token))
                                                    router.push('/client')
                                                }
                                                else {
                                                    setLoginError(result?.error || 'Login Failed')
                                                    setTimeout(() => {
                                                    setLoginError(null)
                                                    }, 5000)
                                                }
                                                        
                                        };
                                    }
                                        
                                    })
                                }
                            }
                            );
                        }
                    }
    }


    // Function to determine if password requirements are met
    const isPasswordValid = (password: string) => {
        return (
            password &&
            password.match(/[A-Z]/) !== null &&
            password.match(/\d/) !== null &&
            password.match(/[@$!%*?&]/) !== null &&
            password.length >= 8
        );
    };

    const passwordExists = (password: string) => {
        return (
            password && true
        );
    };


    const handleCancel = () => {
        localStorage.removeItem('infoEmpresa');
        localStorage.removeItem('empresa');
        localStorage.removeItem('selectedSuscripcion');
        router.push('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>Crear Cuenta</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Correo electrónico</Label>
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
                            {errors.email && <span className="text-red-600">Ingrese un correo</span>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Clave</Label>
                            <Input
                                id="password"
                                placeholder="**********"
                                type="password"
                                autoCapitalize="none"
                                autoComplete="new-password"
                                autoCorrect="off"
                                disabled={isLoading}
                                {...register('password', {
                                    required: 'Ingrese una clave',
                                    validate: {
                                        validPassword: value => isPasswordValid(value) || 'La clave debe contener al menos una letra mayúscula, un número y un carácter especial.'
                                    }
                                })}
                                className={isPasswordValid(watch('password')) ? 'border-green-500' : passwordExists(watch('password')) || errors.password ? 'border-red-500':''}
                            />
                            {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            {watch('password') && (
                                <ul className="text-red-600 list-disc pl-5">
                                    {!watch('password').match(/[A-Z]/) && <li>Debe contener al menos una letra mayúscula.</li>}
                                    {!watch('password').match(/\d/) && <li>Debe contener al menos un número.</li>}
                                    {!watch('password').match(/[@$!%*?&]/) && <li>Debe contener al menos un carácter especial (@, $, !, %, *, ?, &).</li>}
                                    {watch('password').length < 8 && <li>Debe tener al menos 8 caracteres de longitud.</li>}
                                </ul>
                            )}
                            {isPasswordValid(watch('password')) && <span className="text-green-600">Clave válida</span>}
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirmationPassword">Confirmar Clave</Label>
                            <Input
                                id="confirmationPassword"
                                placeholder="**********"
                                type="password"
                                autoCapitalize="none"
                                autoComplete="new-password"
                                autoCorrect="off"
                                disabled={isLoading}
                                {...register('confirmationPassword', { required: true })}
                                className={(watch('password') === watch('confirmationPassword') && passwordExists(watch('confirmationPassword'))) ? 'border-green-500' : passwordExists(watch('confirmationPassword')) || errors.confirmationPassword || (watch('password') !== watch('confirmationPassword')) ? 'border-red-500':''}
                            />
                            {(errors.confirmationPassword || (watch('password') !== watch('confirmationPassword'))) && (
                                <span className="text-red-600">Las claves no coinciden</span>
                            )}
                            {(isPasswordValid(watch('password')) && (watch('password') === watch('confirmationPassword'))) && 
                                <span className="text-green-600">Confirmación correcta</span>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nombreEmpresa">Empresa</Label>
                            <Input
                                id="nombreEmpresa"
                                type="text"
                                autoCorrect="off"
                                style={{ textTransform: 'capitalize' }}
                                value={nombreEmpresa}
                                readOnly
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handleCancel} disabled={isLoading} style={{ marginRight: '5px' }}>Cancelar</Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Crear
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}

export default UserAuthForm;


