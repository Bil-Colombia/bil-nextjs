"use client"
import { useEffect, useState } from 'react'
import { useGetSuscripcionQuery } from '@/services/suscripcion/suscripcionApi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAppDispatch } from '@/lib/hook'
import { setSuscripcionLocal } from '@/lib/features/suscripcion/suscripcionLocalSlice'
import { Suscripcion } from '@/types'
import {useRouter} from 'next/navigation'

function GetSuscripciones() {

    const { data: suscripciones, error, isLoading, isFetching } = useGetSuscripcionQuery(null)
    const router = useRouter()

    if (isLoading || isFetching) return <p>Loading...</p>
    if (error) return <p>Error: {error.toString()}</p>

    const handleClick = (suscripcion: Suscripcion) => {
        localStorage.setItem('selectedSuscripcion', JSON.stringify(suscripcion));
        router.push('/consultar')
    }

    return (
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {suscripciones?.map((suscripcion) => (
                <div key={suscripcion.id_suscripcion}>
                    <Card className='w-[350px]'>
                        <CardHeader className='flex justify-center items-center'>
                            <CardTitle>{suscripcion.nombre}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <section className='flex justify-center items-center py-3'>
                                <p>Precio Mensual: ${suscripcion.precio}</p>
                            </section>
                            <section className='flex justify-center items-center'>
                                <Button onClick={() => handleClick(suscripcion)}>Escoger Suscripción</Button>
                            </section>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex justify-center items-center py-3'>
                            <section>
                                <p>{suscripcion.descripcion}</p>
                            </section>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default GetSuscripciones;
