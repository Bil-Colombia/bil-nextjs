"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import EmojiPDF from '../../../../public/PDF.png';
import Image from "next/image";

import { Button } from "@/components/ui/button";

export type Factura = {
    id_fact: number;
    fecha_expedicion: string;
    for_pago: number;
    nom_sucu: string;
    valor: number;
    nomb_comp: string;
    id_user?: number | null
    empresa_id?: number | null
};

export const columns: ColumnDef<Factura>[] = [
    {
        id: "Factura",
        accessorKey: "id_fact",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Factura
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "fecha_expedicion",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Fecha/Hora
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell({ row }) {
            const dateFormat = new Intl.DateTimeFormat('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            const data = new Date(row.original.fecha_expedicion)
            return <div className="text-center font-semibold">{dateFormat.format(data)}</div>;
        },
    },
    {
        accessorKey: "for_pago",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Forma de Pago
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell({ row }) {
            return <div className="text-center">{row.getValue("for_pago")}</div>
        },
    },
    {
        accessorKey: "nom_sucu",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre Sucursal
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell({ row }) {
            return <div className="text-center">{row.getValue("nom_sucu")}</div>
        },
    },
    {
        accessorKey: "valor",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const total = parseFloat(row.getValue("valor"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(total);

            const textColor = total > 0 ? "text-green-500" : "text-red-500";

            return <div className={`text-center font-semibold ${textColor}`}>{formatted}</div>;
        },
    },
    {
        accessorKey: "nomb_comp",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre Cliente
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell({ row }) {
            return <div className="text-center">{row.getValue("nomb_comp")}</div>
        },
    },
];
