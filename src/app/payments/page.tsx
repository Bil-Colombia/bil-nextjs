import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "01015",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "Sara Guzmán",
            total: 250,
        },
        {
            id: "01016",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "Camilo Gomez",
            total: 1000,
        },
        {
            id: "01017",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "David Vegas",
            total: 300,
        },
        {
            id: "01018",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "Laura Valentina",
            total: 800,
        },
        {
            id: "01019",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "Daniel Alejandro",
            total: 500,
        },
        {
            id: "01020",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "Arturo Dias",
            total: 2000,
        },
        {
            id: "01021",
            fecha: "17/03/2024 14:11",
            factura: "/PDF.png",
            cliente: "Ceballos Natalia",
            total: 3000,
        },
        // ...
    ]
}
async function DemoPage() {
    const data = await getData()
    return (
        <div className="container mx-auto py-10">
            <h2 className='text-2xl font-bold'>Facturas</h2>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default DemoPage