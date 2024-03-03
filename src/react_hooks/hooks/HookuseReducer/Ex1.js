import React, { useReducer } from 'react'
import './ex1.css'
import { toast } from 'react-toastify';
 
//useReducer is also used to state management just like useState.but useReducer is powerful for complex applications or components.
//useReducer follows the same pattern like Redux.
//we can achieve a powerful global state with the help of useReducer and useContext hook.

const Ex1 = () => {
  const initialValue=0

  const reducer=(state,action)=>{
    switch (action.type) {
      case "inc":
        return state+1
        // we are not using break since we have return
      case "dec":
        return state-1
      default:
        throw new Error();
    }

  }

  // const [currentState,dispatch] =useReducer(reducer function which contains both current state and action(It contains type and payload),initialState)
  const [counter,dispatch]=useReducer(reducer,initialValue)

  const dec=()=>{
    dispatch({type:"dec"})
  }

  const inc=()=>{
    dispatch({type:"inc"})    
  }
  return (
    <div className='counter-wrapper'>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={()=>dec()}>decrement</button>
      <button onClick={()=>inc()}>increment</button>
    </div>
  )
}

export default Ex1