import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMovies, getShows, getPersons } from '../../redux-toolkit/movies'
import ImageCard from '../movie card/ImageCard'
import './moviesListing.scss'

const MoviesListing = () => {
  const totalMovies = useSelector(getMovies)
  const totalShows = useSelector(getShows)
  const totalPersons =useSelector(getPersons)

  console.log("totalPersons", totalPersons)

  const moviesList =totalMovies?.results?.map((movie,index)=>{
    return(

        <ImageCard movie={movie} poster_look="poster_path" type="movie"/>
    )
  })

  const showsList =totalShows?.results?.map((movie,index)=>{
    return(

        <ImageCard movie={movie} poster_look="poster_path" type="tv"/>
    )
  })

  const personsList = totalPersons?.results?.map((movie1,index)=>{
    console.log("movie1",movie1)
    return(
      // <div>
      //   {movie1.known_for.map((movie2)=>{
        <ImageCard movie={movie1} poster_look="profile_path" type="person"/>
      // }
      // )
      // }
      // </div>
      

    )
  })


  return (
    <div>
      <div className='movie-list-heading'>Movies</div>
      <div className='movies-list'>{moviesList}</div>
      <div className='movie-list-heading'>Shows</div>
      <div className='movies-list'>{showsList}</div>

      <div className='movie-list-heading'>Persons</div>
      <div className='movies-list'>{personsList}</div>

      
    </div>
  )
}

export default MoviesListing
