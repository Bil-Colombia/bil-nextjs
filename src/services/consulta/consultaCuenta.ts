import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = process.env.NEXT_PUBLIC_USERS;

interface ApiResponse {
    BODY: any; // Define the type based on your API response
    ERROR: boolean;
    MEN_ERRO: string;
}

export const consultarCuentaApi = createApi({
    reducerPath: "consultarCuentaApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        existsClient: builder.query<ApiResponse, number>({
            query: (id_empresa) => `existsClient?id_empresa=${id_empresa}`,
        }),
    }),
});

export const { useExistsClientQuery } = consultarCuentaApi;
