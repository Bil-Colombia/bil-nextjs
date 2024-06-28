"use client"
import { useGetDetailsUserQuery } from '@/services/details/detailsUser'
import Cards from '@/components/Cards'
import ProfilePage from './Profile'
import { Card } from '@/components/ui/card'
import DemoPage from '@/app/payments/page'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'

function ClientPage() {

    const selectedUserId = useSelector((state: RootState) => state.pagination.selectedUserId)
    const selectedEmpresaId = useSelector((state: RootState) => state.pagination.selectedEmpresaId)

    const { data, error, isLoading } = useGetDetailsUserQuery(
        { id_user_v: selectedUserId || 0, id_empresa_v: selectedEmpresaId || 0 },
        { skip: !selectedUserId || !selectedEmpresaId }
    )

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading data</p>

    const cliente = data?.cliente ? data?.cliente[0] : null
    const empresa = data?.empresa ? data?.empresa[0] : null
    const producto = data?.producto ? data?.producto[0] : null
    const sucursal = data?.sucursal ? data?.sucursal[0] : null

    return (
        <div className='flex min-h-screen flex-col'>
            <div className="p-8 flex flex-col lg:flex-row gap-8">
                <Card className="flex-1 p-2 rounded-lg">
                    <ProfilePage cliente={cliente} empresa={empresa} producto={producto} sucursal={sucursal} />
                </Card>
                <Card className="flex flex-col items-center p-4 rounded-lg w-full lg:w-[650px]">
                    <Cards cliente={cliente} empresa={empresa} producto={producto} sucursal={sucursal}/>
                </Card>
            </div>
            <div className="p-1">
                <DemoPage />
            </div>
        </div>
    )
}

export default ClientPage