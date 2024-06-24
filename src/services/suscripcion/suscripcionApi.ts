import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Suscripcion } from "@/types";

const API = process.env.NEXT_PUBLIC_API_BACKEND_WEB_DJANGO;

export const SuscripcionApi = createApi({
  reducerPath: "suscripcionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getSuscripcion: builder.query<Suscripcion[], null>({
      query: () => "/suscripciones",
      transformResponse: (response: { BODY: { suscripciones: Suscripcion[] }; ERRO: boolean; MEN_ERRO: string }) => {
        return response.BODY.suscripciones;
      },
    }),
  }),
});

export const { useGetSuscripcionQuery } = SuscripcionApi;
