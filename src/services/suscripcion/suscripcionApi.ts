import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Suscripcion } from "@/types";

/* const API = process.env.NEXT_PUBLIC_API_BACKEND_WEB_DJANGO; */

export const SuscripcionApi = createApi({
  reducerPath: "suscripcionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getSuscripcion: builder.query<Suscripcion[], null>({
      query: () => "/suscripciones",
      /*       transformResponse: (response: { BODY: { suscripcion: Suscripcion[] }; ERRO: boolean; MEN_ERRO: string }) => response.BODY.suscripcion, */
    }),
  }),
});

export const { useGetSuscripcionQuery } = SuscripcionApi;
