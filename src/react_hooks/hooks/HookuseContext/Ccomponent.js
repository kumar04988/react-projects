import React, { useContext } from 'react'
import { counterContext } from './CounterContext'

const Ccomponent = () => {

  // <counterContext.Provider value={{counter,setCounter}}>
  //     <Fcomponent/>
  //     </counterContext.Provider>
  // we sent counter,setCounter values to Fcomponent. Ccomponent is inside Fcomponent.so indirectly we sent counter,setCounter values to cComponent.

  const {counter,setCounter}=useContext(counterContext)
  return (
    <div className='Fcomponent-wrapper'>
        <h2>Ccomponent</h2>
        <h3>{counter}</h3>

        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>

      <hr></hr>

      

    </div>
  )
}

export default Ccomponent