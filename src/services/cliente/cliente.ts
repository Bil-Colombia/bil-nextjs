import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface PostClienteResponse {
    ERRO: boolean;
    MEN_ERRO: string;
    BODY: {
      empresa: {
        id_empresa: number;
      };
    };
  }

interface Cliente {
    empresa_id : number,
    suscripcion : number,
    admin : number,
    users: any,
    auditoria_estado: string
}

const API = process.env.NEXT_PUBLIC_API_BACKEND_WEB_DJANGO;

export const clienteApi = createApi({
    reducerPath: 'clienteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        }
     }),
     endpoints: (builder) => ({
        postCliente: builder.mutation<PostClienteResponse, Partial<Cliente>>({
            query: (body) => ({
                url: "cliente/save",
                method: 'POST',
                body: body,
              }),
        })
     })
});

export const { usePostClienteMutation } = clienteApi;