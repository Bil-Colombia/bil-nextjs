"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useGetFacturasQuery } from "@/services/datatable/dataTable"
import { RootState, AppDispatch } from '@/lib/store/store'
import { setPage, setTotalRecords } from '@/lib/features/pagination/paginationSlice'

function Pagination() {

    const dispatch = useDispatch<AppDispatch>()
    const page = useSelector((state: RootState) => state.pagination.page)
    const totalRecords = useSelector((state: RootState) => state.pagination.totalRecords)
    const filters = useSelector((state: RootState) => state.pagination.filter)

    const { data, isLoading } = useGetFacturasQuery({page, filters})
    const pageSize = 5

    useEffect(() => {
        if (data?.BODY?.factura_user) {
            dispatch(setTotalRecords(10))
        }
    }, [data, dispatch])

    if (isLoading) return <p>Loading...</p>;

    const facturas = data?.BODY.factura_user || [];
    const totalPages = Math.ceil(totalRecords / pageSize)

    const handlePageChange = (newPage: number) => {
        dispatch(setPage(newPage))
    }

    return (
        <DataTable columns={columns} data={facturas} page={page} setPage={handlePageChange} totalPages={totalPages} />
    )
}

export default Pagination

