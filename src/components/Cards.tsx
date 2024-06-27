import { Cliente, Empresa, Producto, Sucursal } from "@/types"
import DataProfile from "./DataProfile"

interface CardsProps {
  cliente: Cliente | null
  empresa: Empresa | null
  producto: Producto | null
  sucursal: Sucursal | null
}

function Cards({ cliente, empresa, producto, sucursal }: CardsProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 auto-rows-max">
      <DataProfile cliente={cliente} empresa={empresa} producto={producto} sucursal={sucursal} />
    </div>
  )
}

export default Cards