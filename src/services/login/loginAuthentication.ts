import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Token {
  token: string;
}

export const AuthenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    authentication: builder.mutation<
      Token,
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useAuthenticationMutation } = AuthenticationApi;
