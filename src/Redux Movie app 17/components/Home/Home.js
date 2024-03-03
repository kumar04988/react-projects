import React, { useEffect, useState } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/MovieBaseApi';
import { APIKey } from '../../common/MovieApiKey';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies,addShows,addMovieOrShowText, getMovieOrShowText } from '../../redux features from redux toolkit/movies';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const dispatch=useDispatch()

  const movieorShowText = useSelector(getMovieOrShowText)
  console.log("movieorShowText",movieorShowText)

  // const [movieText,setMovieText]=useState("mission")
  // const [showText,setShowText]=useState("mission")


  // const movieText = "mission"
  // const showText = "mission"


  // console.log("location.state.term1",location.state.term1)



//  if(location && location.state.term1!==""){
//   setMovieText(location.state.term1)
//   setShowText(location.state.term1)
//  }

// console.log("before outside",movieText)

// console.log("after outside",movieText)


  useEffect(()=>{
    const fetchMovies=async()=>{
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieorShowText}&type=movie`).catch((err)=>{
        console.log("error",err)
      })

      console.log("movie api response",response);
      dispatch(addMovies(response.data))
    }

    const fetchSeries=async()=>{
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieorShowText}&type=series`).catch((err)=>{
        console.log("error",err)
      })

      console.log("series api response",response);
      dispatch(addShows(response.data))
      // location.state.term1=""


    }

    fetchMovies()
    fetchSeries()
  },[movieorShowText])



  return (
    <div className='movie-home'>
      <div className='banner-img'></div>
      <div>
        <MovieListing/>
      </div>
    </div>

  )
}

export default Home