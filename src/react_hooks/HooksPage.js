import React,{useState} from 'react'
import Counter from './hooks/custom hook/counter/Counter'
import HookuseCallback from './hooks/HookuseCallback'
import HookuseContext from './hooks/HookuseContext/HookuseContext'
import HookuseEffect from './hooks/HookuseEffect'
import HookuseMemo from './hooks/HookuseMemo'
import Ex1 from './hooks/HookuseReducer/Ex1'
import Ex2 from './hooks/HookuseReducer/Ex2'
import HookuseRef from './hooks/HookuseRef'
import HookuseState from './hooks/HookuseState'

const HooksPage = () => {
  const [flag,setFlag]=useState(false)

  return (
    <div>
        {/* <HookuseState/> */}
        
        {/* <div style={{"textAlign":"center"}}>
        
          {flag? <button onClick={()=>setFlag(!flag)} className='btn'>Destroy component</button>:<button onClick={()=>setFlag(!flag)} className='btn'>Toggle to show  current Date</button>}

        </div>
        {flag ? <HookuseEffect/>:""} */}


        {/* <HookuseRef/> */}
        {/* <HookuseMemo/> */}
        {/* <HookuseCallback/> */}
        {/* <HookuseContext/> */}
        {/* <Ex1/> */}
        {/* <Ex2/> */}
        {/* <Counter/> */}
    </div>
  )
}

export default HooksPage