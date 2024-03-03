import React, { useEffect } from 'react'
import MoviesApi from '../../common/MovieBaseApi';
import { APIKey } from '../../common/MovieApiKey';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {addMovieOrShowDetail, getMovieOrShowDetail} from '../../redux features from redux toolkit/movies'
import './MovieDetail.scss';

const MovieDetail = () => {
  const dispatch=useDispatch()
  const {imdbID:id} =useParams()
  const data =useSelector(getMovieOrShowDetail)
  console.log("data",data)


  console.log("Movie detail imdb",id)

  useEffect(()=>{
    const getMovieOrShowDetail=async()=>{
      const response = await MoviesApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`).catch((err)=>{
        console.log("error",err)
      })
      dispatch(addMovieOrShowDetail(response.data))
  
    }  

    
    getMovieOrShowDetail()
    return()=>{
      dispatch(addMovieOrShowDetail({}))
    }
  },[id])

  const downloadMovie=()=>{

    // window.location.href = 'https://codefrontend.com';
    // if(Object.keys(data)){

//     let myString = data.Title;
//     let symbol = ":";

//     let index = myString.indexOf(symbol);
//     if (index !== -1) {
//       myString = myString.slice(index + 1);
//     }

// console.log(myString); // Outputs " please remove me.

let greeting = data.Title;
// greeting = greeting.replaceAll(" ", ".");
// greeting = greeting.replaceAll(":", "");

console.log(greeting);
      const res=window.location.href = `https://www.google.com/search?q=intitle+index.of+mp4+${data.Title}&oq=intitle+index.of+mp4+${data.Title}&aqs=chrome.0.69i59j0i512l6j69i60.686j0j7&sourceid=chrome&ie=UTF-8`;

      // console.log("res",res)

  }

  return (
    <div>
      {Object.keys(data).length===0?
      (
        <div className='loading'>...Loading</div>

      ):
      <div className='movie-section'>
        <div className='section-left'>
          <div className='movie-title'>{data.Title}</div>
          <div className='movie-rating'>
            <span>
              IMDB Rating  
      {/* the below icons,we are getting from font awesome stylesheet */}
      <i className='fa fa-star'></i>:{data.imdbRating}
            </span>
            <span>
              IMDB Votes <i className='fa fa-thumbs-up'></i>:{data.imdbVotes}
            </span>
            <span>
              Runtime <i className='fa fa-film'></i>:{data.Runtime}
            </span>
            <span>
              Year <i className='fa fa-calendar'></i>:{data.Year}
            </span>
            


          </div>

          <div className='movie-plot'> {data.Plot}</div>
          <div className='movie-info'>
            <div>
            <span>Director</span>
              <span>{data.Director}</span>
            </div>
           <div>
           <span>Stars</span>
             <span>{data.Actors}</span>
           </div>
           <div>
           <span>Generes</span>
              <span>{data.Genre}</span>
           </div>
            <div>
            <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
            <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>


        </div>
        <div className='section-right'>
          <img src={data.Poster} alt={data.Title}/>
          <button className='ui button blue' onClick={()=>downloadMovie()}>Download</button>

        </div>

      </div>
}
      
      

      
     
    </div>
  )
}

export default MovieDetail