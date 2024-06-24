"use client"
import { AvatarDemo } from "@/components/Avatar"
import CardsProfile from "@/components/CardsProfile"
import { CardTitle } from "@/components/ui/card"

function ProfilePage() {

    return (
        <div className="p-2">
            <div className="flex flex-col items-center">
                <AvatarDemo />
                <CardTitle className="py-2 text-center">Camila Ortiz</CardTitle>
                <section className="py-2 text-center">
                    <p className="text-lg text-slate-700">+57 300-233-5202</p>
                </section>
                <div className="p-2 w-80">
                    <CardsProfile />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage