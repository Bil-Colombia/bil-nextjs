import { EditProfile } from '@/app/item/profile/components/EditProfile'

function ItemPage() {
  return (
    <div>
      <div className="p-8 rounded-lg shadow-md max-w-2xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Edit profile</h2>
        <EditProfile />
      </div>
    </div>
  )
}

export default ItemPage
