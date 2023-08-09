import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const AnimeApi = createApi({
  reducerPath: 'AnimeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kitsu.io/api/edge/'
  }),



  tagTypes: ['Anime'],

  endpoints: (builder) => ({
    AnimeAndManga: builder.query({
      query: (id) => ({
        url: `${id}`,
        method: 'GET',
        params: {

        }
      }),
      providesTags: ['Anime']

    }),
    
    AnimeGenres: builder.query({
      query: (id) => ({
        url: `/anime/${id}/genres`,
        method: 'GET',
        params: {

        }
      }),
      providesTags: ['Anime']

    }),

    Review: builder.query({
      query: (id) => ({
        url: `${id}/relationships/reviews`,
        method: 'GET',
        params: {
          // per_page: 100,
        }
      }),
      providesTags: ['Anime']

    }),



  })
})
export const {useAnimeAndMangaQuery, useReviewQuery,useAnimeGenresQuery,useMangaReviewQuery} = AnimeApi
