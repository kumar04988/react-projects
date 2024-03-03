import React, { useState } from 'react'
import Fcomponent from './Fcomponent'
import './useContext.css'
import { counterContext } from './CounterContext'

// with the useContext,we can change state values from any component.
// useContext eliminates the hirerical props sending to its child components.
// for normal application,useContext hook is best and useContext is easy to use.redux is for large application

const HookuseContext = () => {
  const [counter,setCounter]=useState(0)

  const decreaseCounter=()=>{
    setCounter(counter-1)
  }

  const increaseCounter=()=>{
    setCounter(counter+1)
  }

  return (
    <div className='context-wrapper'>
      <h2>Main component</h2>
      <h3>{counter}</h3>
      <button onClick={()=>decreaseCounter()}>Decrement</button>
      <button onClick={()=>increaseCounter()}>Increment</button>

      <hr></hr>
      <counterContext.Provider value={{counter,setCounter}}>
      <Fcomponent/>
      </counterContext.Provider>

    </div>
  )
}

export default HookuseContext