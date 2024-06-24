"use client"

import { useGetSuscripcionQuery } from '@/services/suscripcion/suscripcionApi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAppDispatch } from '@/lib/hook'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Suscripcion } from '@/types'
import { setSuscripcionCookie } from '@/lib/features/suscripcion/suscripcionCookieSlice'

function GetSuscriCookie() {

    const dispatch = useAppDispatch()
    const [localData, setLocalData] = useState<Suscripcion | null>(null)

    useEffect(() => {
        const storedSuscripcion = Cookies.get("suscripcion")
        if (storedSuscripcion) {
            setLocalData(JSON.parse(storedSuscripcion))
        }
    }, [])

    const { data: suscripciones, error, isLoading, isFetching, isError } = useGetSuscripcionQuery(null, {
        skip: !!localData
    })

    useEffect(() => {
        if (suscripciones) {
            Cookies.set("suscripcion", JSON.stringify(suscripciones))
        }
    }, [suscripciones])

    if (isLoading || isFetching) return <p>Loading...</p>
    if (error) return <p>Error: {error.toString()}</p>

    const handleClick = (suscripcion: Suscripcion) => {
        dispatch(setSuscripcionCookie(suscripcion))
    }

    return (
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {localData ? (
                <div key={localData.id_suscripcion}>
                    <Card className='w-[350px]'>
                        <CardHeader className='flex justify-center items-center'>
                            <CardTitle>{localData.nombre}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <section className='flex justify-center items-center py-3'>
                                <p>Precio Mensual: ${localData.precio}</p>
                            </section>
                            <section className='flex justify-center items-center'>
                                <Button onClick={() => handleClick(localData)}>Escoger Suscripcion</Button>
                            </section>
                        </CardContent>
                        <Separator className='' />
                        <CardFooter className='flex justify-center items-center py-3'>
                            <section>
                                <p>{localData.descripcion}</p>
                            </section>
                        </CardFooter>
                    </Card>
                </div>
            ) : (
                suscripciones?.map((suscripcion) => (
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
                                    <Button onClick={() => handleClick(suscripcion)}>Escoger Suscripcion</Button>
                                </section>
                            </CardContent>
                            <Separator className='' />
                            <CardFooter className='flex justify-center items-center py-3'>
                                <section>
                                    <p>{suscripcion.descripcion}</p>
                                </section>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            )}
        </div>
    )
}

export default GetSuscriCookie