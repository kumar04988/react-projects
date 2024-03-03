import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allmovies:{},
    allshows:{},
    movieOrShowDetail:{},
    movieOrShowText:"",
}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.allmovies=payload
        },

        addShows:(state,{payload})=>{

            state.allshows=payload
        },
        addMovieOrShowDetail:(state,{payload})=>{
            state.movieOrShowDetail=payload

        },

        addMovieOrShowText:(state,{payload})=>{
        
                state.movieOrShowText=payload
        },



    }
})

export const {addMovies,addShows,addMovieOrShowDetail,addMovieOrShowText} = movieSlice.actions;
export const getAllMovies = (state)=>state.movies.allmovies;
export const getAllShows = (state)=>state.movies.allshows;
export const getMovieOrShowDetail = (state)=>state.movies.movieOrShowDetail;
export const getMovieOrShowText = (state)=>state.movies.movieOrShowText;

export default movieSlice.reducer;