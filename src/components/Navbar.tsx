"use client"

import { ModeToggle } from "./theme-button"
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar, selectPageTitle, setPageTitle } from '@/lib/features/sidebar/sidebarSlice'
import type { AppDispatch, RootState } from '@/lib/store/store'

const pageNames: { [key: string]: string } = {
    "/": "Clientes",
    "/dashboard": "Dashboard",
    "/register/user": "Usuario",
    "/register/empresa": "Empresa",
    "/register/suscripciones": "Suscripciones"
}

function Navbar() {

    const pageTitle = useSelector((state: RootState) => selectPageTitle(state))
    const dispatch = useDispatch<AppDispatch>()

    const pathname = usePathname()

    const handleToggle = () => {
        dispatch(toggleSidebar())
    }

    useEffect(() => {
        dispatch(setPageTitle(pageNames[pathname] || "Página"))
    }, [dispatch, pathname])


    return (
        <nav className="flex justify-between py-3 px-4 shadow-md">
            <div className="flex items-center">
                <button onClick={handleToggle}>
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