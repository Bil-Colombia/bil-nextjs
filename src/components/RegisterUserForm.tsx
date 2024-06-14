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

export function RegisterUserForm() {
    return (
        <form>
            <Card className="w-[350px]">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>Registro Usuario</CardTitle>
                    <CardDescription>Registra tu usuario</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nombre Usuario</Label>
                            <Input id="name" placeholder="Nombre Usuario" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Correo</Label>
                            <Input id="email" placeholder="Correo Electrónico" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input id="password" placeholder="Correo Electrónico" type="password" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nit">Nit de tu Empresa</Label>
                            <Select>
                                <SelectTrigger id="nit">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="panamericana">Panamericana</SelectItem>
                                    <SelectItem value="éxito">Éxito</SelectItem>
                                    <SelectItem value="jumbo">Jumbo</SelectItem>
                                    <SelectItem value="alkosto">Alkosto</SelectItem>
                                </SelectContent>
                            </Select>
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