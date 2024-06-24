import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store/store';

interface UserAuthState {
    isLoading: boolean;
    searchTerm: string;
}

const initialState: UserAuthState = {
    isLoading: false,
    searchTerm: '',
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { setLoading, setSearchTerm } = userAuthSlice.actions;


export default userAuthSlice.reducer;
