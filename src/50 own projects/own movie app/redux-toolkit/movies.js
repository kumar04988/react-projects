import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState={
    allMovies:[],
    allShows:{},
    moviesOrShowsText:"",
    persons:{},
    personImages:{},
    movieOrShowDetail:{},
}

// this slice name ownMovies is to do actions like 'ownMovies/addMovie' it is an action,useful to add data into redux state variables like allMovies state variable
const movieSlice = createSlice({
    name:"ownMovies",
    initialState,
    reducers:{
        addMovie:(state,{payload})=>{
            state.allMovies=payload
        },
        addShow:(state,{payload})=>{
            state.allShows=payload
        },
        addMoviesOrShowsText:(state,{payload})=>{
            state.moviesOrShowsText=payload
        },
        addPersons:(state,{payload})=>{
            state.persons =payload
        },
        addPersonImages:(state,{payload})=>{
            state.personImages = payload

        },
        addMovieOrShowDetail:(state,{payload})=>{
            state.movieOrShowDetail=payload

        },
    }
   
})


// this ownMov is reducer declared in store.js file and useful to fetch the redux state data
export const {addMovie,addShow,addMoviesOrShowsText,addPersons,addPersonImages,addMovieOrShowDetail} = movieSlice.actions
// currentState.slice_name.variable_name
export const getMovies = (state)=>state.ownMov.allMovies
// console.log("getMovies state",useSelector(getMovies))

export const getShows =(state)=>state.ownMov.allShows
export const getMoviesOrShowsText=(state)=>state.ownMov.moviesOrShowsText
export const getPersons=(state)=>state.ownMov.persons
export const getPersonImages=(state)=>state.ownMov.personImages
export const getMovieOrShowDetail =(state)=>state.ownMov.movieOrShowDetail




// export reducer to use this reducer in index.js to make these variables available globally in this react project
export default movieSlice.reducer;
