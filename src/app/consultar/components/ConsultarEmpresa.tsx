import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import ConsultaNit from "./ConsultarNit"

export default function ConsultarEmpresa() {
    return (
                <Card>
                    <CardHeader>
                        <CardTitle>Consulta tu empresa por el NIT</CardTitle>
                    </CardHeader>
                    <ConsultaNit />
                </Card>
    )
}
