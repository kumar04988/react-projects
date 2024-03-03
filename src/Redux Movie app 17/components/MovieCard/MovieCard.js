import React from 'react'
import { Link } from 'react-router-dom';
import './Moviecard.scss';

const MovieCard = ({movie}) => {
  // console.log("movie",movie)

  return (
    <Link to={`/movie/${movie.imdbID}`}>
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{movie.Title}</h4>
            <span>{movie.Year}</span>

          </div>

        </div>

      </div>

    </div>
    </Link>
  )
}

export default MovieCard