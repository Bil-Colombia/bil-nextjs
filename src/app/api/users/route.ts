import { usuarios } from "@/data/mockData";
import { Usuario } from "@/types";
import { NextRequest, NextResponse } from "next/server";

interface PaginatedResponse<T> {
    total: number;
    page: number;
    pageSize: number;
    data: T[];
}


export async function GET(request: NextRequest): Promise<NextResponse<PaginatedResponse<Usuario>>> {

    const {searchParams} = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);


    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedUsuarios = usuarios.slice(startIndex, endIndex)

    const response = {
        total: usuarios.length,
        page,
        pageSize,
        data: paginatedUsuarios
    }

    return NextResponse.json(response)
}