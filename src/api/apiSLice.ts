import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/94ac57eb-33e2-4cda-8124-239f62178500" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
