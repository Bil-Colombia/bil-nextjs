"use client"
import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import { selectIsOpen } from "@/lib/features/sidebar/sidebarSlice"

function MainContent({ children }: { children: React.ReactNode }) {

    const isOpen = useSelector(selectIsOpen)

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