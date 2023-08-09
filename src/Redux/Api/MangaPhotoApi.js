import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const MangaPhotoApi = createApi({
    reducerPath:'MangaPhotoApi',
     baseQuery: fetchBaseQuery({
     baseUrl: 'https://kitsu.io/api/edge/', 
    }),

    

    tagTypes: ['photo'],

    endpoints: (builder) => ({
        TrendingManga: builder.query({
            query:(type)=>({
                url:`/trending/${type}`,
                method:"GET",
                params: {
                    // id: 100,
                  },
            }),
            providesTags:['photo']

        }),
        
        PopularMangaList: builder.query({
            query:()=>({
                url:' /statistics/manga',
                method:"GET",
                params: {
                    // per_page: 100,
                  },
            }),
            providesTags:['photo']

        }),
       

    })
})
export const {useTrendingMangaQuery} = MangaPhotoApi