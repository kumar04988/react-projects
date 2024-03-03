import React, { useState } from 'react'

export const useCounter = (initialValue,changeBy) => {
    //custom hook function should have return at last 
    const [counter,setCounter]=useState(initialValue)
    const decrease=()=>{
        setCounter(counter-changeBy)
      }
    
      const increase=()=>{
        setCounter(counter+changeBy)
      }

      const reset=()=>{
        setCounter(initialValue)
      }

  return [counter,decrease,increase,reset]
}

