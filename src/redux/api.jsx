import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studyApi = createApi({
  reducerPath: 'studyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getOneStudy: builder.query({
      query: (id) => `study/${id}`,
    }),
  }),
});

export const { useGetOneStudyQuery } = studyApi;
