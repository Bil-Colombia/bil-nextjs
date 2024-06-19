import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import EmojiDireccion from '../../public/Emoji Direccion.png'
import EmojiEmail from '../../public/Emoji Email.png'
import EmojiCumpleaños from '../../public/Emoji Cumpleaños.png'
import EmojiGenero from '../../public/Genero.png'
import EmojiGastoTotal from '../../public/EmojiGastoTotal.png'
import EmojiVisitasTotales from '../../public/EmojiVisitasTotales.png'

function DataProfile() {
    return (
        <>
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center gap-4">
                            <Image src={EmojiEmail} alt="Foto de Usuario" width={30} height={30} className="rounded-full" />
                            <div>
                                <h1 className="text-lg font-bold">Email</h1>
                                <p className="text-sm text-slate-600">camiortiz@gmail.com</p>
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
                                <p className="text-sm text-slate-600">Carrera 7 #153 - 30</p>
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-full max-w-xs py-4">
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center gap-4">
                            <Image src={EmojiCumpleaños} alt="Cumpleaños" width={30} height={30} className="rounded-full" />
                            <div>
                                <h1 className="text-lg font-bold">Cumpleaños</h1>
                                <p className="text-sm text-slate-600">25 de Octubre 1992</p>
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
                                <p className="text-sm text-slate-600">Mujer</p>
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
                        <p className="text-lg text-green-600 ml-auto">$7.483.000</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Gasto Máximo</p>
                            <p className="text-sm text-slate-600">$259.000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Gasto Promedio</p>
                            <p className="text-sm text-slate-600">$78.000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Gasto Mínimo</p>
                            <p className="text-sm text-slate-600">$18.000</p>
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
                        <p className="text-lg text-green-600 ml-auto">78</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="text-sm text-slate-600">Última Visita</p>
                            <p className="text-sm text-slate-600">Feb 21, 2024</p>
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