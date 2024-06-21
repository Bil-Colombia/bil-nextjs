import Cards from '@/components/Cards'
import ProfilePage from '@/app/client/components/Profile'
import DemoPage from '@/app/payments/page'
import { Card } from '@/components/ui/card'

function ClientPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="p-8 flex flex-col lg:flex-row gap-8">
        <Card className="flex-1 p-2 rounded-lg">
          <ProfilePage />
        </Card>
        <Card className="flex flex-col items-center p-4 rounded-lg w-full lg:w-[650px]">
          <Cards />
        </Card>
      </div>
      <div className="p-1">
        <DemoPage />
      </div>
    </div>
  )
}

export default ClientPage