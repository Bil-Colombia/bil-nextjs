
import React from 'react'
import { TableEmpleados } from './components/table-empleados'
import { Empleado, columns } from './components/tableComponents/columns'
import { useState, useEffect } from "react";

async function getData(): Promise<Empleado[]> {

    
    // Fetch data from your API here.
    return [
        {
            correo: "c1@hotmail.com",
            rol: "Administrador Sucursal",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c2@hotmail.com",
            rol: "Administrador Sucursal",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c3@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c4@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c5@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c6@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c7@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c8@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c9@hotmail.com",
            rol: "Empleado",
            fecha: "17/03/2024 14:11",
        },
        {
            correo: "c10@hotmail.com",
            rol: "Administrador Sucursal",
            fecha: "17/03/2024 14:11",
        },
        // ...
    ]
}

async function EmpleadosPage(){
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <h2 className='text-2xl font-bold'>Empleados</h2>
            <TableEmpleados columns={columns} data={data} />
        </div>
    );
}

export default EmpleadosPage