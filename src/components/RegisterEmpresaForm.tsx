import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function RegisterEmpresaForm() {
    return (
        <form>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>Registro Empresa</CardTitle>
                    <CardDescription>Registra tu empresa</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nombre de tu empresa</Label>
                            <Input id="name" placeholder="Nombre de tu empresa" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="razon">Razón Social</Label>
                            <Input id="razon" placeholder="Tu razón social" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nit">Nit</Label>
                            <Input id="nit" placeholder="Tu NIT de la empresa" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="verificacion">Digito de Verificación</Label>
                            <Input id="verificacion" placeholder="Tu digito de verificación" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </form>
    )
}