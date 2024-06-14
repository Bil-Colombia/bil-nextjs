import { Card, CardHeader, CardTitle } from "./ui/card"
import Image from 'next/image'
import EmojiProducto from '../../public/Emoji Producto.png'
import EmojiTiempo from '../../public/Emoji Tiempo.png'

function CardsProfile() {
    return (
        <article>
            <div className="py-3">
                <Card className="p-2 rounded-lg">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-2">
                                <Image src={EmojiProducto} alt="Foto de Usuario" width={24} height={24} className="rounded-full" />
                                <div>
                                    <h1 className="text-lg font-bold">Producto Favorito</h1>
                                    <p className="text-sm text-slate-600">Sándwich Especial</p>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
            <div className="py-2">
                <Card className="p-2 rounded-lg">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-2">
                                <Image src={EmojiTiempo} alt="Foto de Usuario" width={24} height={24} className="rounded-full" />
                                <div>
                                    <h1 className="text-lg font-bold">Cliente Desde</h1>
                                    <p className="text-sm text-slate-600">Aug, 22 2022</p>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </article>
    )
}

export default CardsProfile
