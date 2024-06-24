'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resetForm } from '@/lib/features/form/formSlice';
import {useRouter} from 'next/navigation'

type FormValues = {
    nit: string;
};

function ConsultaNit() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const router = useRouter()

    const onSubmit = async (formData: FormValues) => {
        const { nit } = formData;
        setIsLoading(true);
        setErrorMsg(null);

        try {
            // Trigger API call with the parsed 'nit' value
            await fetchNitData(nit);

        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMsg("Error al consultar la empresa. Por favor, intenta de nuevo más tarde.");
            dispatch(resetForm());
        } finally {
            setIsLoading(false);
        }
    };

    const fetchNitData = async (nit: string) => {
        const apiUrl = process.env.NEXT_PUBLIC_GENERAL+'nit?nit='+nit;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            if(data['BODY'].hasOwnProperty('empresa')){
                localStorage.setItem('empresa', JSON.stringify(data['BODY'].empresa));
            }
            router.push('/register/empresa');
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const handleReset = () => {
        dispatch(resetForm());
        setErrorMsg(null);
        setData(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="nit">NIT</Label>
                    <Input
                        id="nit"
                        type="text" // Use 'text' type for NIT input to avoid issues with number input
                        placeholder="Ingresa el NIT"
                        {...register('nit', { required: true })}
                        style={{ borderColor: errors.nit ? 'red' : 'inherit' }}
                    />
                    {errors.nit && <p className='text-red-600'>El NIT es requerido</p>}
                </div>
            </CardContent>
            <div className='flex justify-between items-center'>
                <CardFooter className="w-full flex justify-between space-x-4 justify-center">
                    <Button type="submit" disabled={isLoading}>Consulta por NIT</Button>
                </CardFooter>
            </div>
        </form>
    );
}

export default ConsultaNit;
