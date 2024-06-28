import { Card, CardHeader, CardTitle } from "./ui/card"
import Image from 'next/image'
import EmojiEmail from '../../public/Emoji Email.png'
import EmojiCumpleaños from '../../public/Emoji Cumpleaños.png'
import { Cliente, Empresa, Producto, Sucursal } from "@/types"

interface CardsProfileProps {
    cliente: Cliente | null
    empresa: Empresa | null
    producto: Producto | null
    sucursal: Sucursal | null
}

function CardsProfile({ cliente, empresa, producto, sucursal }: CardsProfileProps) {

    const dateFormat = new Intl.DateTimeFormat('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <article>
            <div className="py-3">
                <Card className="p-2 rounded-lg">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-4">
                                <Image src={EmojiCumpleaños} alt="Cumpleaños" width={30} height={30} className="rounded-full" />
                                <div>
                                    <h1 className="text-lg font-bold">Cumpleaños</h1>
                                    <p className="text-sm text-slate-600">
                                        {cliente?.fec_nac ? dateFormat.format(new Date(cliente.fec_nac)) : ''}
                                    </p>
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
                            <div className="flex items-center gap-4">
                                <Image src={EmojiEmail} alt="Foto de Usuario" width={30} height={30} className="rounded-full" />
                                <div>
                                    <h1 className="text-lg font-bold">Email</h1>
                                    <p className="text-sm text-slate-600">{cliente?.cor_elec}</p>
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
