import React, { useState } from 'react'
import './hooks.css';

const HookuseState = () => {
    // To see changes in the browser page after any event. component needs to be re-render.so,component will be re-rendered only when the value of the state is changed.
    //useState hook will be useful to change the state.
    //useState gives us the two things.
    // 1.current state and 2.function to change current state

    const [name,setName]=useState("sk")
    const [visible,setVisible]=useState(false)
    const [count,setCount]=useState(0)
    const [names,setNames]=useState([])
    console.log("outside")

    // In This below useState,the clicked will print only at first time in console,after that even if you perform any event like clicking other buttons.this will not execute this below console log inside useState.
    // This is useful when we need to do complex operation only for first time and don't want to do this complex operation from second time since it takes much time and fetch data in to click state.
    const [click,setClick]=useState(()=>{
        console.log("clicked");
        return "NA";
    })
    console.log("click",click)

    console.log(visible)

    const increment=()=>{
        // setCount(count+1)
        // setCount(count+1)
        // on above two lines,the count state value is same .for ex-if count is 2,then in both 17,18 line count is 2,the result only will increment by 1.so to avoid this problem.do as below.
        setCount((prevState)=>prevState+1)
        setCount((prevState)=>prevState+1)

        
    }

    const decrement=()=>{
        // setCount(count+1)
        // setCount(count+1)
        // on above two lines,the count state value is same .for ex-if count is 2,then in both 17,18 line count is 2,the result only will increment by 1.so to avoid this problem.do as below.
        setCount((prevState)=>prevState-1)
        setCount((prevState)=>prevState-1)

        
    }

    const addNames=(e)=>{
        e.preventDefault()
        setNames([...names,{id:names.length,name}])
        setName("")
    }

   



  return (
    <div style={{"textAlign":"center","fontSize":"20px"}}>
        <div>
            Hello, {name}
            <button  onClick={()=>setName("kumar")} className="btn1">String</button>
        </div>
        <hr></hr>
        <div>
            {visible ? <i className='shop icon'></i>:"NA"}
          <button  onClick={()=>setVisible(!visible)} className="btn1">bool</button>

        </div>
        <hr></hr>
        <div>
            <div>
            <button className='btn'>numbers</button>
            </div>
            <button onClick={()=>decrement()}  className='btn1'>-</button>
            {count}
            <button  onClick={()=>increment()} className='btn1'>+</button>
        </div>
        <hr></hr>

        <div>
            <div>
            <button className='btn1'>Arrays or objects</button>
            </div>
            <form onSubmit={addNames}>
            <div >
                <input value={name} onChange={(e)=>setName(e.target.value)} style={{"outline":"none","padding":"3px","borderRadius":"5px","fontSize":"15px"}} type="text" placeholder='Enter name' />
                <button className='btn1'>submit</button>

            </div>
            </form>

            <div>
                <ul>
                {
                    names.map((obj)=>{
                        return(
                            <div key={obj.id}>
                            <li>{obj.name}</li>
                            </div>
                        )
                    })
                }
                </ul>
            </div>
        </div>
        <hr></hr>

        <div>
            <button className='btn1'>Refer Click useState in code</button>

        </div>

    </div>
  )
}

export default HookuseState