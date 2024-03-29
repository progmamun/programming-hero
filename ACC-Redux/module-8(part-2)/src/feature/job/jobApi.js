import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
    }),
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
  }),
});

export const { usePostJobMutation, useGetJobsQuery, useJobByIdQuery } = jobApi;
