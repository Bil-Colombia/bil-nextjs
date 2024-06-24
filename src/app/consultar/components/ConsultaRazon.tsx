"use client";
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useGetRazonSocialQuery } from '@/services/consulta/consultaEmpresa';
import { setRazon, resetForm } from '@/lib/features/form/formSlice';
import { RootState } from '@/lib/store/store';

type Input = {
    razon_social?: string;
};

function ConsultaRazon() {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<{ razon_social: string } | null>(null);
    const { data, error, isLoading } = useGetRazonSocialQuery(searchTerm!, { skip: !searchTerm });
    const razonSocial = useSelector((state: RootState) => state.form.nombre);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            dispatch(setRazon(data.razon_social));
            setErrorMsg(null);
        } else if (error) {
            setErrorMsg("Tu empresa no existe");
            dispatch(resetForm());
        }
    }, [data, error, dispatch]);

    const onSubmit = (data: Input) => {
        setSearchTerm({ razon_social: data.razon_social || "" });
    };

    const handleReset = () => {
        dispatch(resetForm());
        setSearchTerm(null);
        setErrorMsg(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="razon_social">Nombre</Label>
                    <Input
                        id="razon_social"
                        type="text"
                        placeholder="Simba Software"
                        {...register('razon_social', { required: true })}
                    />
                    {errors.razon_social && <p className='text-red-600'>El nombre es requerido</p>}
                </div>
            </CardContent>
            <div className='flex justify-between items-center'>
                <CardFooter className="w-full flex justify-between space-x-4">
                    <Button type="submit">Consulta por Nombre</Button>
                    <Button variant='outline' type="button" onClick={handleReset}>Crea tu empresa</Button>
                </CardFooter>
            </div>
            <div>
                {isLoading && <p>Cargando...</p>}
                {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
                {data && !errorMsg && <div>
                    <p>Razón Social: {data.razon_social}</p>
                    <p>Nombre Comercial: {data.nom_comercial}</p>
                </div>}
            </div>
        </form>
    );
}

export default ConsultaRazon;
