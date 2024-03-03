import axios from 'axios'
import React, { useEffect, useReducer } from 'react'


const initialState={
    loading:false,
    data:[],
    error:null,

}
const ACTIONS={
    API_REQUEST:"api-request",
    FETCH_DATA:"etch-data",
    ERROR:"error",
}



const reducer=(state,{type,payload})=>{
    console.log("payload",payload)
    switch (type) {
        case ACTIONS.API_REQUEST:
            return {...state,loading:true,data:[],error:null}
        case ACTIONS.FETCH_DATA:
            return {...state,loading:false,data:payload.data,error:null}
        case ACTIONS.ERROR:
            return {...state,loading:false,data:payload}
        default:
            return state
    }


}
const useFetch = (url) => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const {loading,data,error} = state
    

    useEffect(()=>{
        dispatch({type:ACTIONS.API_REQUEST})
        axios.get(url).then((res)=>dispatch({type:ACTIONS.FETCH_DATA,payload:res.data}))
        .catch((err)=>{
            dispatch({type:ACTIONS.ERROR,payload:err.Error})
            
        })
    },[url])

  return {loading,data,error}
}

export default useFetch