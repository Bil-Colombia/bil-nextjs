"use client"
import { createContext, useContext, useState } from 'react'

interface SidebarContextProps {
    isOpen: boolean,
    toggleSidebar: () => void
}


const SidebarContext = createContext<SidebarContextProps>({
    isOpen: false,
    toggleSidebar: () => { }
})

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)