"use client"

import { BarChartBigIcon, User, Users } from "lucide-react"
import SidebarDesktop from "./SidebarDesktop"
import { SidebarItems } from "@/types"
import { useSidebar } from "@/context/SidebarContext"

const sidebarItems: SidebarItems = {
    links: [
        { label: "Clientes", href: "/", icon: Users },
        { label: "Dashboard", href: "/dashboard", icon: BarChartBigIcon },
    ]
}

function Sidebar() {

    const { isOpen } = useSidebar()

    return (
        <SidebarDesktop sidebarItems={sidebarItems} isOpen={isOpen} />
    )
}

export default Sidebar