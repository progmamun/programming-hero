import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(getUser(data.email));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getRegisteredUser: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetRegisteredUserQuery } = authSlice;
