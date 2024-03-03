import { configureStore } from "@reduxjs/toolkit";
import ownMoviesReducer from './movies'

export const ownMovieStore = configureStore({
    reducer: {
        ownMov:ownMoviesReducer
    }
})