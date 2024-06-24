"use client";
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useGetNitQuery } from '@/services/consulta/consultaEmpresa';
import { resetForm, setNit } from '@/lib/features/form/formSlice';
import { RootState } from '@/lib/store/store';

type Input = {
    nit?: string;
};

function ConsultaNit() {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<{ nit: string } | null>(null);
    const { data, error, isLoading } = useGetNitQuery(searchTerm!, { skip: !searchTerm });
    const razonSocial = useSelector((state: RootState) => state.form.nombre);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            dispatch(setNit(data.nit));
            setErrorMsg(null);
        } else if (error) {
            setErrorMsg("Tu empresa no existe");
            dispatch(resetForm());
        }
    }, [data, error, dispatch]);

    const onSubmit = (data: Input) => {
        console.log(data);
        setSearchTerm({ nit: data.nit || "" });
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
                    <Label htmlFor="nit">Nit</Label>
                    <Input
                        id="nit"
                        type="text"
                        placeholder="Simba Software"
                        {...register('nit', { required: true })}
                    />
                    {errors.nit && <p className='text-red-600'>El nombre es requerido</p>}
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

export default ConsultaNit;
