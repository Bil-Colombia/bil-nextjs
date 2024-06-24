import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Suscripcion } from "@/types";

interface SuscripcionState {
  suscripcion: Suscripcion | null;
}

const initialState: SuscripcionState = {
  suscripcion: null,
};

export const suscripcionLocalSlice = createSlice({
  name: "suscripcionesLocal",
  initialState,
  reducers: {
    setSuscripcionLocal: (state, action: PayloadAction<Suscripcion>) => {
      state.suscripcion = action.payload;
      localStorage.setItem("suscripcion", JSON.stringify(action.payload));
    },
    clearSuscripcionLocal: (state) => {
        state.suscripcion = null
        localStorage.removeItem('suscripcion')
    }
  },
});

export const { setSuscripcionLocal, clearSuscripcionLocal } = suscripcionLocalSlice.actions;
export default suscripcionLocalSlice.reducer;
