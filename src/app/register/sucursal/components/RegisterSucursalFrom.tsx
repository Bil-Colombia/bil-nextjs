'use client'

import { useEffect, useState } from 'react';
import {Card, CardTitle, CardHeader, CardContent} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type Inputs = {
    nombre: string;
    direccion: string;

}

export function RegisterSucursalForm() {
    return (
        <form>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items center">
                    <CardTitle>Registro Sucursal</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor= "nombre">Nombre</Label>
                            <Input 
                                id="nombre"
                                placeholder="Nombre de la sucursal"
                                type='text'
                                autoCapitalize='none'
                                autoCorrect='off'
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor= "nombre">Dirección</Label>
                            <Input 
                                id="nombre"
                                placeholder="Dirección de la sucursal"
                                type='text'
                                autoCapitalize='none'
                                autoCorrect='off'
                            />
                        </div>
                        
                        
                    </div>
                </CardContent>

            </Card>
        </form> 
    )
}



