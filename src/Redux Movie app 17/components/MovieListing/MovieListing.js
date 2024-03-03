import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../redux features from redux toolkit/movies'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settings} from '../../common/Settings';

const MovieListing = () => {
  const totalMovies=useSelector(getAllMovies)
  const totalShows=useSelector(getAllShows)
  // console.log(totalMovies)
  // console.log(totalShows)



  let renderMovies=""
  let renderShows=""
  renderMovies = totalMovies.Response==="True" ?
  (
    totalMovies.Search.map((movie,index)=>{
      return(
        <div>
      <MovieCard key={index} movie={movie}/>
        </div>
      )
    })
  ):<div className="movies-error"><h2>{totalMovies.Error}</h2></div>

  renderShows = totalShows.Response==="True" ?
  (
    totalShows.Search.map((show,index)=>{
      return(
        <div>
      <MovieCard key={index} movie={show}/>
        </div>
      )
    })
  ):<div className="Shows-error"><h2>{totalShows.Error}</h2></div>
  
  
  return (
    <div className='movie-wrapper'>
     
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'><Slider {...settings}>{renderMovies}</Slider></div>


      </div>

      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'><Slider {...settings}>{renderShows}</Slider></div>


      </div>
      
      </div>
  )
}

export default MovieListing