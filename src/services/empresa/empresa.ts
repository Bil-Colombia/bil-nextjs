import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Edit } from "lucide-react";

interface Empresa {
    razon_social: string,
    nom_comercial: null,
    imagen:null,
    pais: number,
    nit: number,
    dig_ver: number,
    rut: null,
    auditoria_objeto_creacion: number,
    auditoria_origen_creacion:string,
    auditoria_estado: string
}

interface EditClientEmpresaPost{
    id_empresa: number,
    auditoria_objeto_creacion: number
}

interface PostEmpresaResponse {
    ERRO: boolean;
    MEN_ERRO: string;
    BODY: {
      empresa: {
        id_empresa: number;
      };
    };
  }

interface EditEmpresaResponse {
    ERRO: boolean;
    MEN_ERRO: string;
    BODY: {};
}


const API = process.env.NEXT_PUBLIC_GENERAL;

export const empresaAPI = createApi({
    reducerPath: "empresaAPI",
    baseQuery: fetchBaseQuery({ 
      baseUrl: API,
      prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
      }
    }),
    endpoints: (builder) => ({
      postEmpresa: builder.mutation<PostEmpresaResponse, Partial<Empresa>>({
        query: (body) => ({
          url: "saveEmpresa",
          method: 'POST',
          body: body,
        }),
      }),
      updateClientEmpresa: builder.mutation<EditEmpresaResponse, EditClientEmpresaPost>({
        query: (body) => ({
          url: "updateClientEmpresa",
          method: 'POST',
          body: body,
        }),
      }),
    }),
  });

  export const { usePostEmpresaMutation, useUpdateClientEmpresaMutation } = empresaAPI;
  