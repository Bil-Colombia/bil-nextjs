import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ConsultaNit from "./ConsultarNit"
import ConsultaRazon from "./ConsultaRazon"

export default function ConsultarEmpresa() {
    return (
        <Tabs defaultValue="razon" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="razon">Nombre</TabsTrigger>
                <TabsTrigger value="nit">Nit</TabsTrigger>
            </TabsList>
            <TabsContent value="razon">
                <Card>
                    <CardHeader>
                        <CardTitle>Nombre</CardTitle>
                        <CardDescription>
                            Consulta tu empresa por el nombre
                        </CardDescription>
                    </CardHeader>
                    <ConsultaRazon />
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, youll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <ConsultaNit />
                </Card>
            </TabsContent>
        </Tabs>
    )
}
