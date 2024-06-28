import { Data } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = process.env.NEXT_PUBLIC_API_BACKEND_WEB_DJANGO;

export const DetailsUser = createApi({
  reducerPath: "detailsUser",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getDetailsUser: builder.query<
      Data,
      { id_user_v: number; id_empresa_v: number }
    >({
      query: ({ id_user_v, id_empresa_v }) => ({
        url: "getDetailsUser",
        params: { id_user_v, id_empresa_v },
      }),
    }),
  }),
});

export const { useGetDetailsUserQuery } = DetailsUser;

export default DetailsUser.reducer;
