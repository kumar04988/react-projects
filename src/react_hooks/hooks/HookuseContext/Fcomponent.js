import React from 'react'
import './useContext.css'
import { useContext } from 'react'
import { counterContext } from './CounterContext'
import Ccomponent from './Ccomponent'


const Fcomponent = () => {
  // counter context values are sent here as in {},so while destructuring we should use {},if it is [],we can use []
    const {counter,setCounter}=useContext(counterContext)
  return (
    <div className='Fcomponent-wrapper'>
        <h2>Fcomponent</h2>
        <h3>{counter}</h3>

        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>

      <hr></hr>

      <Ccomponent/>

    </div>
  )
}

export default Fcomponent