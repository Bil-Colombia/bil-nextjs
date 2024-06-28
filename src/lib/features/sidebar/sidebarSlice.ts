import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store/store";

interface OpenState {
  open: boolean;
  pageTitle: string;
}

const initialState: OpenState = {
  open: false,
  pageTitle: "",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
  },
});

export const { toggleSidebar, setPageTitle } = sidebarSlice.actions;

export const selectIsOpen = (state: RootState) => state.sidebar.open;
export const selectPageTitle = (state: RootState) => state.sidebar.pageTitle;

export default sidebarSlice.reducer;
