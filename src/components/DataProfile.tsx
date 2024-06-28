import Image from "next/image"
import { Card, CardHeader, CardTitle } from "./ui/card"
import EmojiDireccion from '../../public/Emoji Direccion.png'
import EmojiVisitas from '../../public/Emoji Visitas.png'
import EmojiProducto from '../../public/Emoji Producto.png'
import EmojiGenero from '../../public/Genero.png'
import { Cliente, Empresa, Producto, Sucursal } from "@/types"

interface DataProfileProps {
    cliente: Cliente | null
    empresa: Empresa | null
    producto: Producto | null
    sucursal: Sucursal | null
}

function DataProfile({ cliente, empresa, producto, sucursal }: DataProfileProps) {

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
        </>
    )
}

export default DataProfile