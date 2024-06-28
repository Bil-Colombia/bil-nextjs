"use client"

import { ModeToggle } from "./theme-button"
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar, selectPageTitle, setPageTitle } from '@/lib/features/sidebar/sidebarSlice'
import type { AppDispatch, RootState } from '@/lib/store/store'

function formatPageTitle(pathname: string): string {
    if (pathname === '/') {
        return 'Login';
    }
    const formatted = pathname.split('/').filter(Boolean).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return formatted || '';
}

function Navbar() {

    const pageTitle = useSelector((state: RootState) => selectPageTitle(state))
    const dispatch = useDispatch<AppDispatch>()

    const pathname = usePathname()

    const handleToggle = () => {
        console.log("Navbar toggle button clicked");
        dispatch(toggleSidebar())
    }

    useEffect(() => {
        const formattedTitle = formatPageTitle(pathname);
        console.log(formattedTitle)
        dispatch(setPageTitle(formattedTitle))
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