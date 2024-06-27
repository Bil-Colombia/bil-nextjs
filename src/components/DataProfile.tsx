import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import EmojiDireccion from '../../public/Emoji Direccion.png'
import EmojiVisitas from '../../public/Emoji Visitas.png'
import EmojiProducto from '../../public/Emoji Producto.png'
import EmojiGenero from '../../public/Genero.png'
import EmojiGastoTotal from '../../public/EmojiGastoTotal.png'
import EmojiVisitasTotales from '../../public/EmojiVisitasTotales.png'
import { Cliente, Empresa, Producto, Sucursal } from "@/types"

interface DataProfileProps {
    cliente: Cliente | null
    empresa: Empresa | null
    producto: Producto | null
    sucursal: Sucursal | null
}

function DataProfile({ cliente, empresa, producto, sucursal }: DataProfileProps) {

    const numberFormat = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    })

    const dateFormat = new Intl.DateTimeFormat('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <>
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center gap-4">
                            <Image src={EmojiProducto} alt="Foto de Usuario" width={30} height={30} className="rounded-full" />
                            <div>
                                <h1 className="text-lg font-bold">Producto Favorito</h1>
                                <p className="text-sm text-slate-600">{producto?.nom_prod}</p>
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center gap-4">
                            <Image src={EmojiDireccion} alt="Dirección" width={30} height={30} className="rounded-full" />
                            <div>
                                <h1 className="text-lg font-bold">Dirección</h1>
                                <p className="text-sm text-slate-600">{cliente?.direccion}</p>
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center gap-4">
                            <Image src={EmojiVisitas} alt="Cumpleaños" width={30} height={30} className="rounded-full" />
                            <div>
                                <h1 className="text-lg font-bold">Sucursal Favorita</h1>
                                <p className="text-sm text-slate-600">
                                    {sucursal?.nombre}
                                </p>
                                <p className="text-sm text-slate-600">
                                    {sucursal?.direccion}
                                </p>
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center gap-4">
                            <Image src={EmojiGenero} alt="Género" width={30} height={30} className="rounded-full" />
                            <div>
                                <h1 className="text-lg font-bold">Género</h1>
                                <p className="text-sm text-slate-600">{cliente?.nombre_genero}</p>
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
            </Card>

            {/* Agregar dos Cards más que son otra información */}
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Image src={EmojiGastoTotal} alt="Gasto Total" width={30} height={30} className="rounded-full" />
                        <div>
                            <h1 className="text-lg font-bold">Gasto Total</h1>
                        </div>
                        {empresa?.gasto_total !== undefined && (
                            <p className={`text-lg ml-auto font-semibold ${empresa.gasto_total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {empresa?.gasto_total >= 0 ? numberFormat.format(empresa.gasto_total) : `-${numberFormat.format(Math.abs(empresa.gasto_total))}`}
                            </p>
                        )}
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Gasto Máximo</p>
                            {empresa?.gasto_maximo !== undefined && (
                                <p className="text-sm text-slate-600">
                                    {empresa?.gasto_maximo >= 0 ? numberFormat.format(empresa.gasto_maximo) : `-${numberFormat.format(Math.abs(empresa.gasto_maximo))}`}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Gasto Promedio</p>
                            {empresa?.gasto_promedio !== undefined && (
                                <p className="text-sm text-slate-600">
                                    {empresa?.gasto_promedio >= 0 ? numberFormat.format(empresa.gasto_promedio) : `-${numberFormat.format(Math.abs(empresa.gasto_promedio))}`}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Gasto Mínimo</p>
                            {empresa?.gasto_minimo !== undefined && (
                                <p className="text-sm text-slate-600">
                                    {empresa?.gasto_minimo >= 0 ? numberFormat.format(empresa.gasto_minimo) : `-${numberFormat.format(Math.abs(empresa.gasto_minimo))}`}
                                </p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Image src={EmojiVisitasTotales} alt="Visitas Totales" width={30} height={30} className="rounded-full" />
                        <div>
                            <h1 className="text-lg font-bold">Visitas Totales</h1>
                        </div>
                        <p className="text-lg text-green-600 ml-auto">{empresa?.visitas}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Última Visita</p>
                            <p className="text-sm text-slate-600">
                                {empresa?.ultima_visita ? dateFormat.format(new Date(empresa.ultima_visita)) : ''}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Recurrencia</p>
                            <p className="text-sm text-slate-600">3.7 veces/mes</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default DataProfile