import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ImageCard.scss'

const ImageCard = ({movie,poster_look,type,personId}) => {
  const navigate=useNavigate()


  const handleMovieClick=()=>{
    console.log("type",type)
    if(type==="person"){
      if(movie.id!==undefined){
      navigate(`/person-details/${movie.id}`)
      }else{
        navigate(`/person/${personId}`)
      }
    }else if(type==="movie" || type==="tv"){
      navigate(`/details/${type}/${movie.id}`)
    }    
  }


  return (
        <img className='movie-image' src={`https://image.tmdb.org/t/p/original${movie[poster_look]}`} alt="picture_presents" onClick={()=>handleMovieClick()}/>
  )
}

export default ImageCard
