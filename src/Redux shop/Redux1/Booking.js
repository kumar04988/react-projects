import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {useDispatch,useSelector} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const Booking = () => {
    // const dispatch=useDispatch()
    // const account =useSelector((state)=>state.accounting)
    // console.log(account)
    
    //action creator
    //action
    //dispatch
    //reducers
    //store

    //action creators will dispatch action to reducers and reducers will update the store and
    // we will use those updated store values in our ui.

     //action creator
    const newBooking=(name,amount)=>{
        return {
            type:"NEW_BOOKING",
            payload:{
                name,
                amount
            }
        }

    }

    const cancelBooking=(name,refundAmount)=>{
        return {
            type:"CANCEL_BOOKING",
            payload:{
                name,
                refundAmount
            }
        }

    }

    //reducers
    const newBookingHistory=(oldReservationList=[],action)=>{
        if(action.type==="NEW_BOOKING"){
            return [...oldReservationList,action.payload]
        }else if(action.type==="CANCEL_BOOKING"){
            return oldReservationList.filter(record=>{
                return record.name!==action.payload.name
            })
        }
        return oldReservationList
    }


    const cancelHistory=(cancelList=[],action)=>{
         if(action.type==="CANCEL_BOOKING"){
            return [...cancelList,action.payload]
        }
        return cancelList
    }

    //our govt account already had 100rs
    const accounting=(account=100,action)=>{
        if(action.type==="NEW_BOOKING"){
            return account+action.payload.amount
        }else if(action.type==="CANCEL_BOOKING"){
            return account-action.payload.refundAmount
        }
        return account
    }


    const railwayCentralStoreReducer=combineReducers({
        newBookingHistory,
        cancelHistory,
        accounting
    })

    const store=createStore(railwayCentralStoreReducer)
   
    // dispatch(newBooking("sk",20))
    store.dispatch(newBooking("sk",20))
    store.dispatch(newBooking("sk1",30))
    store.dispatch(cancelBooking("sk",10))
    


    console.log(store.getState())

    
    
  return (
    <div>Booking</div>
  )
}

export default Booking
