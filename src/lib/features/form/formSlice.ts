import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  nit: string;
  nombre: string;
  error: string | null;
  success: boolean;
}

const initialState: FormState = {
  nit: "",
  nombre: "",
  error: null,
  success: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setNit(state, action: PayloadAction<string>) {
      state.nit = action.payload;
    },
    setRazon(state, action: PayloadAction<string>) {
      state.nombre = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
    resetForm(state) {
      state.nit = "";
      state.nombre = "";
      state.error = null;
      state.success = false;
    },
  },
});

export const { setNit, setRazon, setError, setSuccess, resetForm } = formSlice.actions;

export default formSlice.reducer;
