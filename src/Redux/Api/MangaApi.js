import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const MangaApi = createApi({
  reducerPath: 'MangaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kitsu.io/api/edge/manga'
  }),



  tagTypes: ['manga'],

  endpoints: (builder) => ({
    AllMangaList: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
        params: {

        }
      }),
      providesTags: ['manga']

    }),

    PopularMangaList: builder.query({
      query: () => ({
        url: ' /statistics/manga',
        method: 'GET',
        params: {
          // per_page: 100,
        }
      }),
      providesTags: ['manga']

    })


  })
})
export const {useAllMangaListQuery, usePopularMangaListQuery} = MangaApi
