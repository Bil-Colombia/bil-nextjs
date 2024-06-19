"use client"

import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useUserAuth } from '@/context/UserAuthContext'

type Aliados = {
    value: string
    label: string
}

interface AliadoSelectProps {
    value: string
    onChange: (value: string) => void
}

const aliados: Aliados[] = [
    {
        value: "next.js",
        label: "Next.js"
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function AliadoSelect({ value, onChange }: AliadoSelectProps) {
    const [open, setOpen] = useState<boolean>(false)
    const { isLoading } = useUserAuth()

    const handleSelect = (currentValue: string) => {
        const newValue = currentValue === value ? "" : currentValue
        onChange(newValue)
        setOpen(false)
    }


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role='combobox'
                    aria-expanded={open}
                    disabled={isLoading}
                    className='w-full justify-between'
                >
                    {value ? aliados.find((aliado) => aliado.value === value)?.label : "Select Aliado..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-full p-0'>
                <Command>
                    <CommandInput placeholder='Search Aliado...' />
                    <CommandList>
                        <CommandEmpty>No Aliado found.</CommandEmpty>
                        <CommandGroup>
                            {aliados.map((aliado) => (
                                <CommandItem
                                    key={aliado.value}
                                    value={aliado.value}
                                    onSelect={() => handleSelect(aliado.value)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === aliado.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {aliado.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
