import React from 'react'
import { Button, ButtonProps } from './ui/button'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface SidebarButtonProps extends ButtonProps {
    icon?: LucideIcon
    isOpen: boolean
    label: string
}
function SidebarButton({ icon: Icon, className, children, isOpen, label, ...props }: SidebarButtonProps) {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" className={cn('gap-2 justify-start', className)} {...props}>
                        {Icon && <Icon size={20} />}
                        {isOpen && <span>{children}</span>}
                    </Button>
                </TooltipTrigger>
                {!isOpen && (
                <TooltipContent side='right'>
                    <span>{label}</span>
                </TooltipContent>
            )}
            </Tooltip>
        </TooltipProvider>
    )
}

export default SidebarButton