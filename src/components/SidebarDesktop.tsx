"use client"

import SidebarButton from './SidebarButton'
import { SidebarItems } from '@/types'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut, MoreHorizontal, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import VercelLogo from '../app/favicon.ico'

interface SidebarDesktopProps {
  sidebarItems: SidebarItems,
  isOpen: boolean
}

function SidebarDesktop({ sidebarItems, isOpen }: SidebarDesktopProps) {

  const pathname = usePathname()

  return (
    <aside className={`h-screen fixed left-0 top-0 z-40 border-r transition-width duration-300 ${isOpen ? 'w-[200px]' : 'w-20'}`}>
      <div className={`h-full px-3 py-4 flex flex-col ${isOpen ? 'items-start' : 'items-center'}`}>
        <div className="flex items-center">
          <Image
            src={VercelLogo}
            alt="Vercel Logo"
            width={32}
            height={32}
            className="transition-width duration-300"
          />
          {isOpen && (
            <h3 className="ml-2 text-lg font-semibold text-foreground transition-width duration-300 opacity-100">
              Bill - NextJS
            </h3>
          )}
        </div>
        <div className={`mt-5 w-full flex flex-col gap-1 ${isOpen ? 'items-start' : 'items-center'}`}>
          {sidebarItems.links.map((link, index) => (
            <Link key={index} href={link.href}>
              <SidebarButton
                variant={pathname === link.href ? 'secondary' : 'ghost'}
                icon={link.icon}
                className='w-full'
              >
                {link.label}
              </SidebarButton>
            </Link>
          ))}
        </div>
        <section className={`absolute left-0 bottom-3 w-full px-3 ${isOpen ? 'items-start' : 'flex flex-col items-center'}`}>
          <Separator className='absolute -top-3 left-0 w-full' />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className='w-full justify-start'>
                <div className={`flex ${isOpen ? 'justify-between' : 'justify-center'} items-center w-full`}>
                  <div className={`flex gap-2 ${isOpen ? '' : 'flex-col items-center'}`}>
                    <Avatar className={`h-5 w-5 ${isOpen ? '' : 'h-8 w-8'}`}>
                      <AvatarImage src='https://github.com/shadcn.png' />
                      <AvatarFallback>CO</AvatarFallback>
                    </Avatar>
                    {isOpen && (
                      <span className="transition-opacity duration-300 opacity-100 justify-center items-center flex">
                        Camila Ortiz
                      </span>
                    )}
                  </div>
                  {isOpen && <MoreHorizontal size={20} />}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className={`mb-2 w-48 p-3 rounded-[1rem] ${isOpen ? '' :  'items-center w-16'}`}>
              <div className='space-y-1'>
                <Link href="/settings">
                  <SidebarButton size="sm" icon={Settings} className='w-full'>
                    Account Settings
                  </SidebarButton>
                </Link>
                <SidebarButton size="sm" icon={LogOut} className='w-full'>
                  Log Out
                </SidebarButton>
              </div>
            </PopoverContent>
          </Popover>
        </section>
      </div>
    </aside>
  )
}

export default SidebarDesktop