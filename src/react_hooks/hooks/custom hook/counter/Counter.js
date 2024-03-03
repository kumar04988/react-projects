import React from 'react'
import ScreenComp from '../screen size based on screen width/ScreenComp'
import { useCounter } from './useCounter'

//Inside custom hook,we can make use of react built-in hooks like useState,useEffect,useRef,useMemo,useCallback,useContext,useReducer etc.
//with the help of custom hook,we can extract the logic from the component and we can use it.

const Counter = () => {
    const [counter,decrease,increase,reset]=useCounter(3,2)
    
  return (
    <div style={{"textAlign":"center","border":"1px solid black","margin":"20px","padding":"10px"}}>
        <h2>Counter</h2>
        <h3>{counter}</h3>
        <button onClick={()=>decrease()}>Dec</button>
        <button onClick={()=>increase()}>Inc</button>
        <button onClick={()=>reset()}>reset</button>

        <ScreenComp/>
    </div>
  )
}

export default Counter