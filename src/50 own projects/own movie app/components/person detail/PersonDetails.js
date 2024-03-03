import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiKey } from '../../common/MovieApiKey'
import MovieBaseApi from '../../common/MovieBaseApi'
import ImageCard from '../movie card/ImageCard'
import './PersonDetails.scss'

const PersonDetails = () => {
    const { id: personId } = useParams()
    const dispatch = useDispatch()
    const [personDetails, setPersonDetails] = useState({})
    const navigator = useNavigate()

    const fetchPersonDetails = async () => {
        const response = await MovieBaseApi.get(`person/${personId}?language=en-US&api_key=${ApiKey}`)
        console.log("response test", response)
        setPersonDetails(response.data)

        return () => {
            setPersonDetails({})
        }
    }


    useEffect(() => {
        fetchPersonDetails()

    }, [personId])

    const handleImages=()=>{
        
        navigator(`/person/${personId}`)
    }
    return (
        <div className='person-details-wrapper'>

            {Object.keys(personDetails).length > 0 &&

                <div className='person-details'>
                    <div className='left-section'>

                        <div className='name'>  {personDetails.name }</div>
                        <div className='biography'>{personDetails.biography}</div>
                        <div className='header-value'>
                            <div className='details-header'>id</div>
                            <div className='details-value'>: {personDetails.id}</div>
                        </div>

                        <div className='header-value'>
                            <div className='details-header'>name</div>
                            <div className='details-value'>: {personDetails.name}</div>
                        </div>

                        <div className='header-value'>
                            <div className='details-header'>birthday</div>
                            <div className='details-value'>: {personDetails.birthday}</div>
                        </div>

                        

                        <div className='header-value'>
                            <div className='details-header'>imdb id</div>
                            <div className='details-value'>: {personDetails.imdb_id}</div>
                        </div>

                        <div className='header-value'>
                            <div className='details-header'>place_of_birth</div>
                            <div className='details-value'>: {personDetails.place_of_birth}</div>
                        </div>

                        <div className='header-value'>
                            <div className='details-header'>known for department</div>
                            <div className='details-value'>: {personDetails.known_for_department}</div>
                        </div>

                        

                        <div className='header-value'>
                            <div className='details-header'>popularity</div>
                            <div className='details-value'>: {personDetails.popularity}</div>
                        </div>


                    </div>

                    <div className='right-section'>
                    <ImageCard movie={personDetails} poster_look="profile_path" />
                    <i className='fa fa-image' onClick={()=>handleImages()}></i>

                    </div>
                    

                </div>

            }


        </div>
    )
}

export default PersonDetails
