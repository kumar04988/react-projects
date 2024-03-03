import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ApiKey } from '../../common/MovieApiKey'
import MovieBaseApi from '../../common/MovieBaseApi'
import { addMovieOrShowDetail, getMovieOrShowDetail } from '../../redux-toolkit/movies'
import ImageCard from '../movie card/ImageCard'
import './Detail.scss';

const Detail = () => {
    const { id: movieId, type } = useParams()
    const dispatch = useDispatch()
    const movirOrShowDetails = useSelector(getMovieOrShowDetail)

    const fetchMovieOrShowDetail = async () => {
        const response = await MovieBaseApi.get(`${type}/${movieId}?language=en-US&api_key=${ApiKey}`)
        console.log("last response", response)
        dispatch(addMovieOrShowDetail(response.data))
    }

    useEffect(() => {
        fetchMovieOrShowDetail()

        return () => {
            dispatch(addMovieOrShowDetail({}))
        }
    }, [movieId])


    return (
        <div className='total-details'>
            {Object.keys(movirOrShowDetails).length > 0 ?
                <>
                    <div className='detail-left-section'>
                        <div className='title-name'>{type === "movie" ? movirOrShowDetails.title + "-" + movirOrShowDetails.tagline : movirOrShowDetails.name + "-" + movirOrShowDetails.tagline}</div>
                        <div className='overview'>{movirOrShowDetails.overview}</div>
                        <div className='head-value'>
                            <div className='head'>Id</div>
                            <div className='value'>: {movirOrShowDetails.id}</div>
                        </div>

                        {type === "movie" ?

                            <div>
                                <div className='head-value'>
                                    <div className='head'>Imdb Id</div>
                                    <div className='value'>: {movirOrShowDetails.imdb_id}</div>
                                </div>


                                <div className='head-value'>
                                    <div className='head'>Release date</div>
                                    <div className='value'>: {movirOrShowDetails.release_date}</div>
                                </div>


                                <div className='head-value'>
                                    <div className='head'>Budget</div>
                                    <div className='value'>: {movirOrShowDetails.budget}</div>
                                </div>

                                <div className='head-value'>
                                    <div className='head'>Revenue</div>
                                    <div className='value'>: {movirOrShowDetails.revenue}</div>
                                </div>
                            </div> :
                            <div></div>
                        }

                        <div className='head-value'>
                            <div className='head'>HomePage</div>
                            <div className='value'>:<a target="_blank" href={movirOrShowDetails.homepage}>{movirOrShowDetails.homepage}</a> </div>
                        </div>

                    </div>

                    <div className='detail-right-section'>
                        <ImageCard movie={movirOrShowDetails} poster_look="poster_path" />
                    </div>
                </> : <div>...Loading</div>

            }


        </div>
    )
}

export default Detail
