"use client"

import { BarChartBigIcon, User, Users } from "lucide-react"
import SidebarDesktop from "./SidebarDesktop"
import { SidebarItems } from "@/types"
import { useSelector } from 'react-redux'
import { selectIsOpen } from '@/lib/features/sidebar/sidebarSlice'

const sidebarItems: SidebarItems = {
    links: [
        { label: "Clientes", href: "/client", icon: Users },
        { label: "Dashboard", href: "/dashboard", icon: BarChartBigIcon },
    ]
}

function Sidebar() {

    const isOpen = useSelector(selectIsOpen)
    console.log("Sidebar isOpen state:", isOpen)

    return (
        <SidebarDesktop sidebarItems={sidebarItems} isOpen={isOpen} />
    )
}

export default Sidebar