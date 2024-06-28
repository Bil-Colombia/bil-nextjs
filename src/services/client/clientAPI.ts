import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the Client interface
interface Client {
  auditoria_estado: string;
  cor_elec: string;
  empresa: number;
  nombre: null;
  password: string;
  rol_id: number;
}

// Define the response structure
interface PostClientResponse {
  ERRO: boolean;
  MEN_ERRO: string;
  BODY: {
    client: {
      id_user_client: number;
    };
  };
}

const API = process.env.NEXT_PUBLIC_USERS;

export const clientAPI = createApi({
  reducerPath: "clientAPI",
  baseQuery: fetchBaseQuery({ 
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    postClient: builder.mutation<PostClientResponse, Partial<Client>>({
      query: (body) => ({
        url: "web/save",
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostClientMutation } = clientAPI;
