import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

const API = process.env.NEXT_PUBLIC_API_BACKEND_WEB_DJANGO;

interface Factura {
  valor: number;
  id_fact: number;
  for_pago: number;
  nom_sucu: string;
  nomb_comp: string;
  fecha_expedicion: string;
}

interface FacturaResponse {
  BODY: {
    factura_user: Factura[];
  };
  ERRO: boolean;
  MEN_ERRO: string;
}

export const dataTable = createApi({
  reducerPath: "dataTable",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: async (headers) => {
      const session = await getSession();
      console.log(session);
      if (session?.user.jwt) {
        headers.set("Authorization", `Bearer ${session.user.jwt}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFacturas: builder.query<
      FacturaResponse,
      { page: number; filters: string }
    >({
      query: ({ page = 1, filters }) =>
        `getFacturaUser?page=${page}&filters=${filters}`,
      transformResponse: (response: FacturaResponse) => {
        return response;
      },
    }),
  }),
});

export const { useGetFacturasQuery } = dataTable;
