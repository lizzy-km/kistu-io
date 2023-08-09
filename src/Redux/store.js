import { configureStore } from '@reduxjs/toolkit'
import {  MangaApi } from './Api/MangaApi'
import { MangaPhotoApi } from './Api/MangaPhotoApi'
import { AnimeApi } from './Api/AnimeApi'
import MangaSlice, { LoadingSlice } from './Services/MangaSlice'




export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [MangaApi.reducerPath]: MangaApi.reducer,
    [MangaPhotoApi.reducerPath]: MangaPhotoApi.reducer,
    [AnimeApi.reducerPath]: AnimeApi.reducer,
    MangaSlice:MangaSlice


  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MangaPhotoApi.middleware,MangaApi.middleware,AnimeApi.middleware),
})