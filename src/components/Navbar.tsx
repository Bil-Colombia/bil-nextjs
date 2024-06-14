"use client"

import { useSidebar } from "@/context/SidebarContext"
import { ModeToggle } from "./theme-button"
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const pageNames: { [key: string]: string} = {
    "/": "Clientes",
    "/dashboard": "Dashboard",
}

function Navbar() {
    const { toggleSidebar } = useSidebar()
    const pathname = usePathname()
    const [pageTitle, setPageTitle] = useState("")

    useEffect(() => {
        setPageTitle(pageNames[pathname] || "Página")
    }, [pathname])


    return (
        <nav className="flex justify-between py-3 px-4 shadow-md">
            <div className="flex items-center">
                <button onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <span className="ml-4">{pageTitle}</span>
            </div>

            <div className="flex justify-end gap-x-2">
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar