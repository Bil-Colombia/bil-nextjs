"use client"
import { useSidebar } from "@/context/SidebarContext"
import Navbar from "./Navbar"

function MainContent({ children }: { children: React.ReactNode }) {

    const { isOpen } = useSidebar()

    return (
        <div className={`flex flex-col transition-all duration-300 ${isOpen ? 'ml-[200px]' : 'ml-24'}`}>
            <Navbar />
            <main className="container mx-auto">
                {children}
            </main>
        </div>
    )
}

export default MainContent