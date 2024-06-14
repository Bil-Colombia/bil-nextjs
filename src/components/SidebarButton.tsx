import React from 'react'
import { Button, ButtonProps } from './ui/button'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/context/SidebarContext'

interface SidebarButtonProps extends ButtonProps {
    icon?: LucideIcon
}

function SidebarButton({ icon: Icon, className, children, ...props }: SidebarButtonProps) {

    const { isOpen } = useSidebar()

    return (
        <Button variant="ghost" className={cn('gap-2 justify-start', className)} {...props}>
            {Icon && <Icon size={20} />}
            {isOpen && <span>{children}</span>}
        </Button>
    )
}

export default SidebarButton