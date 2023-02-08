import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DEV_URL,
    // baseUrl: "https://backend-rho-lyart.vercel.app/",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
