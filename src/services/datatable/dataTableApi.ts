import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface  Factura {
  valor: number;
  id_fact: number;
  for_pago: number;
  nom_sucu: string;
  nomb_comp: string;
  fecha_expedicion: string;
}

export const dataTable = createApi({
  reducerPath: "dataTable",
  baseQuery: fetchBaseQuery({ baseUrl: '/api/'}),
  endpoints: (builder) => ({
    getFacturas: builder.query<Factura[], number>({
      query: (page = 1) => `users?page=${page}`,
    }),
  }),
});

export const { useGetFacturasQuery } = dataTable;
