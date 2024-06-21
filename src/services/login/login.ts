import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = process.env.NEXT_PUBLIC_USERS;

interface Token {
  token: string;
}

export const AuthenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    authentication: builder.query<Token, { email: string; password: string }>({
      query: (body) => ({
        url: "web/authenticate",
        method: "POST",
        body: body,
      }),
      transformResponse: (response: {
        BODY: { token: string };
        ERRO: boolean;
        MEN_ERRO: string;
      }): Token => {
        return { token: response.BODY.token };
      },
    }),
  }),
});
