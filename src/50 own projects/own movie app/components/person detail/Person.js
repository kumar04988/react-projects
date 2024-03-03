import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ApiKey } from '../../common/MovieApiKey'
import MovieBaseApi from '../../common/MovieBaseApi'
import { addPersonImages, getPersonImages } from '../../redux-toolkit/movies'
import ImageCard from '../movie card/ImageCard'
import './person.scss'

const Person = () => {
  const {id:personId} =useParams()
  const dispatch =useDispatch()
  console.log("personId",personId)
  const personImages = useSelector(getPersonImages)

  const fetchPersonPics=async()=>{
    const response = await MovieBaseApi.get(`person/${personId}/images?api_key=${ApiKey}`)

    console.log("person response",response)
    dispatch(addPersonImages(response.data))

  }

  useEffect(()=>{
    fetchPersonPics()
    
    return()=>{
      dispatch(addPersonImages({}))
    }

  },[personId])

  const personImagesList=personImages?.profiles?.map((profile,index)=>{
    console.log("profile",profile)
    return(
      <ImageCard movie={profile} poster_look="file_path" type="person" personId={personId}/>
    )
  })

  return (
    <div>
      <div className='person-image'>{personImagesList}</div>
    </div>
  )
}

export default Person
