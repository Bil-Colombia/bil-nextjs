import Image from "next/image"
import FotoPerfil from '../../public/Foto de Perfil.png'

export function AvatarDemo() {
    return (
        <Image src={FotoPerfil} alt="Foto de Usuario" width={148} height={148} className="rounded-full" />
    )
}
