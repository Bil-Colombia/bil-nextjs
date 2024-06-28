import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EmojiGastoTotal from '../../../../public/EmojiGastoTotal.png'
import EmojiVisitasTotales from '../../../../public/EmojiVisitasTotales.png'
import { Empresa } from "@/types"

interface StatsCardsProps {
    empresa: Empresa | null
}

function StatsCards({ empresa }: StatsCardsProps) {
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
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 auto-rows-max">
            <Card className="p-4 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-between">
                <CardHeader className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                        <Image src={EmojiGastoTotal} alt="Gasto Total" width={30} height={30} className="rounded-full" />
                        <div className="ml-4">
                            <h1 className="text-lg font-bold">Gasto Total</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                    {empresa?.gasto_total !== undefined && (
                        <p className={`text-lg font-semibold ${empresa.gasto_total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {empresa?.gasto_total >= 0 ? numberFormat.format(empresa.gasto_total) : `-${numberFormat.format(Math.abs(empresa.gasto_total))}`}
                        </p>
                    )}
                    </div>
                </CardHeader>
                <CardContent className="pt-2">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Gasto Máximo</p>
                        {empresa?.gasto_maximo !== undefined && (
                            <p className="text-sm text-gray-600">
                                {empresa?.gasto_maximo >= 0 ? numberFormat.format(empresa.gasto_maximo) : `-${numberFormat.format(Math.abs(empresa.gasto_maximo))}`}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Gasto Promedio</p>
                        {empresa?.gasto_promedio !== undefined && (
                            <p className="text-sm text-gray-600">
                                {empresa?.gasto_promedio >= 0 ? numberFormat.format(empresa.gasto_promedio) : `-${numberFormat.format(Math.abs(empresa.gasto_promedio))}`}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Gasto Mínimo</p>
                        {empresa?.gasto_minimo !== undefined && (
                            <p className="text-sm text-gray-600">
                                {empresa?.gasto_minimo >= 0 ? numberFormat.format(empresa.gasto_minimo) : `-${numberFormat.format(Math.abs(empresa.gasto_minimo))}`}
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card className="p-4 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-between">
                <CardHeader className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src={EmojiVisitasTotales} alt="Visitas Totales" width={30} height={30} className="rounded-full" />
                        <div className="ml-4">
                            <h1 className="text-lg font-bold">Visitas Totales</h1>
                        </div>
                    </div>
                    <p className="text-lg text-green-600">{empresa?.visitas}</p>
                </CardHeader>
                <CardContent className="pt-2">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Última Visita</p>
                        <p className="text-sm text-gray-600">
                            {empresa?.ultima_visita ? dateFormat.format(new Date(empresa.ultima_visita)) : ''}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Recurrencia</p>
                        <p className="text-sm text-gray-600">3.7 veces/mes</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default StatsCards
