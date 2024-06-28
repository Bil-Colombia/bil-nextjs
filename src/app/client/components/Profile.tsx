
import { AvatarDemo } from "@/components/Avatar"
import CardsProfile from "@/components/CardsProfile"
import { CardTitle } from "@/components/ui/card"
import { Cliente, Empresa, Producto, Sucursal } from "@/types"

interface ProfilePageProps {
    cliente: Cliente | null
    empresa: Empresa | null
    producto: Producto | null
    sucursal: Sucursal | null
}

function ProfilePage({ cliente, empresa, producto, sucursal }: ProfilePageProps) {

    return (
        <div className="p-4 w-full">
            <div className="flex flex-col items-center">
                <AvatarDemo />
                <CardTitle className="py-2 text-center text-xl font-bold">{cliente?.nomb_comp}</CardTitle>
                <section className="py-2 text-center">
                    <p className="text-lg text-slate-700">{cliente?.celular}</p>
                </section>
                <div className="p-2 w-full">
                    <CardsProfile cliente={cliente} empresa={empresa} producto={producto} sucursal={sucursal} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage