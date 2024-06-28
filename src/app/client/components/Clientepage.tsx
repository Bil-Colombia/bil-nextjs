"use client"
import { useGetDetailsUserQuery } from '@/services/details/detailsUser'
import Cards from '@/components/Cards'
import ProfilePage from './Profile'
import { Card } from '@/components/ui/card'
import DemoPage from '@/app/payments/page'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'
import StatsCards from './StatsCards'

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
            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <div className="flex-1 rounded-lg">
                        <Cards cliente={cliente} empresa={empresa} producto={producto} sucursal={sucursal} />
                    </div>
                    <div className="flex-1 rounded-lg">
                        <StatsCards empresa={empresa} />
                    </div>
                </div>
                <Card className="lg:col-span-1 p-4 rounded-lg">
                    <ProfilePage cliente={cliente} empresa={empresa} producto={producto} sucursal={sucursal} />
                </Card>
            </div>
            <div className="p-1">
                <DemoPage />
            </div>
        </div>
    )
}

export default ClientPage