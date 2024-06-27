import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PaginationState {
    page: number
    totalRecords: number
    selectedUserId: number | null
    selectedEmpresaId: number | null
    filter: string
}

const initialState: PaginationState = {
    page: 1,
    totalRecords: 0,
    selectedUserId: null,
    selectedEmpresaId: null,
    filter: ''
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setTotalRecords: (state, action: PayloadAction<number>) => {
            state.totalRecords = action.payload
        },
        setSelectedUser(state, action: PayloadAction<{ userId: number, empresaId: number }>) {
            state.selectedUserId = action.payload.userId
            state.selectedEmpresaId = action.payload.empresaId
        },
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload
            state.page = 1 // Reset page to 1 when filter changes
        }
    },
})

export const { setPage, setTotalRecords, setSelectedUser, setFilter } = paginationSlice.actions
export default paginationSlice.reducer