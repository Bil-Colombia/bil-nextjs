import React from 'react';
import { TableDetalleSucursal } from './detalleComponentes.tsx/tabla-detalle-sucursal';
import { Sucursal, columns } from './detalleComponentes.tsx/columns';

interface EmpleadoDetalleProps {
    usuario: string;
    rol:string;
}

const EmpleadoDetalle = ({ usuario, rol }: EmpleadoDetalleProps) => {

    const data = [

    ]

    
    return (
        <div className="user-details mt-4 p-4 border rounded-md">
            <h3 className="text-xl font-bold" style={{textAlign: 'center'}}>Detalle del empleado</h3>
            <div style={{display: 'flex', justifyContent: 'center' }}>
                <p style={{ margin: '15px' }}><strong>Correo:</strong> {usuario}</p>
                <p style={{ margin: '15px' }}><strong>Rol:</strong> {rol}</p>
            </div>
            <div>
                <TableDetalleSucursal columns={columns} data={data} />
            </div>
        </div>
    );
};

export default EmpleadoDetalle;