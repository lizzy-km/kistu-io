import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const initialState = {
    Loading:null,
    ReviewId:null,
    ReviewData:[],
    isLoading:true,
    type:''

   
};





export const LoadingSlice = 
 createSlice({
    name:"LoadingSlice",
    initialState,
    reducers: {
        getLoading: (state, {payload} ) => {
            state.Loading = payload.Loading
            // Cookies.set(STORAGE_KEY, JSON.stringify(state));
        },
        ReviewId: (state, {payload} ) => {
            state.ReviewId = payload?.ReviewId


            // Cookies.set(STORAGE_KEY, JSON.stringify(state));
        },
        Type: (state, {payload} ) => {
            state.type = payload?.type


            // Cookies.set(STORAGE_KEY, JSON.stringify(state));
        },
        ReviewData: (state, {payload} ) => {
            state.ReviewData = payload?.ReviewData,payload?.isLoading
            // Cookies.set(STORAGE_KEY, JSON.stringify(state));
        },

        

       

      
        

    }
})

export const { getLoading,ReviewData,ReviewId,Type  } = LoadingSlice.actions
export default LoadingSlice.reducer