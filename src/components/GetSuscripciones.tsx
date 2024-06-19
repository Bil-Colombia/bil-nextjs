"use client"
import { useGetSuscripcionQuery } from '@/services/suscripcionApi'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'

function GetSuscripciones() {

    const { data: suscripciones, error, isLoading, isFetching, isError } = useGetSuscripcionQuery(null)

    if (isLoading || isFetching) return <p>Loading...</p>
    if (error) return <p>Error: {error.toString()}</p>

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
                                <Button>Escoger Suscripcion</Button>
                            </section>
                        </CardContent>
                        <Separator className=''/>
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

export default GetSuscripciones