"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

interface SidebarContextProps {
    isOpen: boolean,
    pageTitle: string
    toggleSidebar: () => void
    setPageTitle: Dispatch<SetStateAction<string>>
}


const SidebarContext = createContext<SidebarContextProps>({
    isOpen: false,
    pageTitle: "",
    toggleSidebar: () => {},
    setPageTitle: () => {}
})

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [pageTitle, setPageTitle] = useState("")

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar, pageTitle, setPageTitle }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)