import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) =>
    apiSlice({
      register: builder.mutation({
        query: (data) => ({
          method: "POST",
          url: "/user",
          body: data,
        }),
      }),
    }),
});

export const { useRegisterMutation } = authApi;
