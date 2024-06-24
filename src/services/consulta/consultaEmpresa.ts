import { EmpresaResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Asegúrate de que esta URL sea correcta y accesible
const API = process.env.NEXT_PUBLIC_API_BACKEND_WEB_DJANGO;

export const consultarApi = createApi({
  reducerPath: "consultarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getRazonSocial: builder.query<EmpresaResponse, { razon_social: string }>({
      query: (body) => ({
        url: "razonSocial",
        method: 'POST',
        body: JSON.stringify(body),
      }),
      transformResponse: (response: {
        BODY: { empresa: EmpresaResponse };
        ERRO: boolean;
        MEN_ERRO: string;
      }) => response.BODY.empresa,
    }),
    getNit: builder.query<EmpresaResponse, { nit: string }>({
      query: (body) => ({
        url: "nit",
        method: 'POST',
        body: JSON.stringify(body),
      }),
      transformResponse: (response: {
        BODY: { empresa: EmpresaResponse };
        ERRO: boolean;
        MEN_ERRO: string;
      }) => response.BODY.empresa,
    }),
  }),
});

export const { useGetNitQuery, useGetRazonSocialQuery } = consultarApi;
