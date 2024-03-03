import React, { useState } from 'react'
import UserMemo from './Users'

//pure componenets is for optimization,It avoids the components to reRender if there is no change in state or props in that component.It wil do shallow comparision,that is,it will compare old state values with new state values,if there is no change it will not render the component other wise it rill rerender the component.
//first write components normally,then think which components to make as pure component.because it consumes some memory to store old state values.

const Toggle = () => {
    const [morning,setMorning]=useState(true)
    console.log("Toggle component re-rendered")
  return (
    <div>
        <button onClick={()=>setMorning(!morning)}>Toggle</button>
        {
            morning?"This is morning":"This is afternoon"
        }

        <UserMemo/>
    </div>
  )
}

export default Toggle