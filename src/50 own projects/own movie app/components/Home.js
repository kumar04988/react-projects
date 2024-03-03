import React, { useEffect, useState } from 'react'
import './home.scss';
import MoviesListing from './moviesListing/MoviesListing';
import MovieBaseApi from '../common/MovieBaseApi'
import { ApiKey } from '../common/MovieApiKey'
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, addMoviesOrShowsText, addPersons, addShow, getMoviesOrShowsText } from '../redux-toolkit/movies';

const Home = () => {
    const dispatch = useDispatch()
    const getMovieText = useSelector(getMoviesOrShowsText)
    const [text, setText] = useState("")
    console.log("getMovieText", getMovieText)

    const fetchPopularMovies = async () => {
        const response = await MovieBaseApi.get(`movie/popular?language=en-US&page=1&api_key=${ApiKey}`)
        dispatch(addMovie(response.data))
    }

    const fetchPopularShows = async () => {
        const response = await MovieBaseApi.get(`tv/popular?language=en-US&page=1&api_key=${ApiKey}`)
        dispatch(addShow(response.data))
    }
    const fetchTextMovies = async () => {
        const response = await MovieBaseApi.get(`search/movie?query=${text}&include_adult=false&language=en-US&page=1&api_key=${ApiKey}`)
        dispatch(addMovie(response.data))

    }

    const fetchTextShows = async () => {
        const response = await MovieBaseApi.get(`search/tv?query=${text}&include_adult=false&language=en-US&page=1&api_key=${ApiKey}`)
        console.log("text response", response)

        dispatch(addShow(response.data))
    }

    const fetchPerson=async()=>{
        if(text!==""){
            const response = await MovieBaseApi.get(`search/person?query=${text}&include_adult=false&language=en-US&page=1&api_key=${ApiKey}`)
            dispatch(addPersons(response.data))
        }
    }

    useEffect(() => {
        fetchPopularMovies()
        fetchPopularShows()
    }, [])

    const handleMovieText = (e) => {
        e.preventDefault()
        dispatch(addMoviesOrShowsText(text))
        if (text === "") {
            fetchPopularMovies()
            fetchPopularShows()
        } else {
            fetchTextMovies()
            fetchTextShows()
            fetchPerson()
        }
    }

    // if(text===""){
    //     fetchPopularMovies()
    //     fetchPopularShows()
    // }else{
    //     fetchTextMovies()
    //     fetchTextShows()
    // }

    return (
        <div className='movies-full-wrapper'>
            <div className='back-image'>


            </div>

            <form onSubmit={handleMovieText}>
                <div className='search-input-and-btn'>
                    <input type="text" className='search-movies' placeholder='Search movies' onChange={(e) => setText(e.target.value)} />
                    <button><i className='fa fa-search'></i></button>
                </div>

            </form>

            <div className='movies-shows-wrapper'>
                <MoviesListing />


            </div>
        </div>
    )
}

export default Home
