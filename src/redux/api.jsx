import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const likeApi = createApi({
  reducerPath: 'likeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    postLike: builder.mutation({
      query: (id) => ({
        url: `/api/like/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { usePostLikeMutation } = likeApi;
