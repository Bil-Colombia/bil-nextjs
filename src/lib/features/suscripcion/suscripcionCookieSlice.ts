import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { Suscripcion } from "@/types";

interface SuscripcionState {
  suscripcion: Suscripcion | null;
}

const initialState: SuscripcionState = {
  suscripcion: Cookies.get("suscripcion")
    ? JSON.parse(Cookies.get("suscripcion") as string)
    : null,
};

export const suscripCookie = createSlice({
  name: "suscripcionCookie",
  initialState,
  reducers: {
    setSuscripcionCookie: (state, action: PayloadAction<Suscripcion>) => {
      state.suscripcion = action.payload;
      Cookies.set("suscripcion", JSON.stringify(action.payload));
    },
    clearSuscripcionCookie: (state) => {
      state.suscripcion = null;
      Cookies.remove("suscripcion");
    },
  },
});

export const { setSuscripcionCookie, clearSuscripcionCookie } = suscripCookie.actions;
export default suscripCookie.reducer;
