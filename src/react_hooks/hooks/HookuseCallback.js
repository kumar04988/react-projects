import React, { useCallback, useEffect, useState ,useMemo} from 'react'

// 1.Memorize the function(useCallback) vs Memorize the value (useMemo)
// 2.referential equality for functions.(useCallback can check the functions references(storage locations) or changes or not .if there is no change.the, useCallback won't allow to create new instance and it will return old function instance)

const HookuseCallback = () => {
    const [counter,setCounter]=useState(0)
    // const [result,setResult]=useState(0)
    const [name,setName]=useState("")

    //now,it won't effect the input field
    const result =useMemo(()=>{
         return factorial(counter)
    },[counter])
    // console.log("result",result)

    // const displayName=()=>{
    //     return name
    // }
    //by above function,everytime new instance will get created even if there is no change in name and it will be passed to DisplayName component.since,it's a new instance the DisplayName component will be re-rendered.
    //To avoid this problem,we can use useCallback Hook to memorize the function,so that usecallback avoids to create new instance for the function if there is no change ex-if counter value is changing.counter is no where related to input box.so,no new instance should be created for displayName function and DisplayName component should not re-render.

    const displayName=useCallback(()=>{
        return name
    },[name])
    //new instance for displayName should be created only when name is changing.

    // see difference between useMemo and useCallbach here.
    console.log("useMemo:",result)
    console.log("useCallback:",displayName)
    // useCallback is to Memorize the function and useMemo is to Memorize the value.
   

  return (
    <div>
        factorial of {counter} is  {result}
        <div>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button onClick={()=> setCounter(counter+1)}>Increment</button>

        </div>
        <hr></hr>
        <div>
            <input type="text" value={name} placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
            This is {name}

        </div>
        <hr>
        </hr>

        <DisplayName displayName={displayName}></DisplayName>

        </div>
  )
}

const DisplayName= React.memo(({displayName})=>{
    console.log("componenr re-rendered")
    const [value,setValue]=useState("")
    useEffect(()=>{
        setValue(()=>displayName())
    },[displayName])
    //if there is new instance of the function displayName.then,above useEffect will execute.
    return <p>This is Display useCallback {value}</p>
})


const factorial =(n)=>{
    let i=1
    while(i<200000000)i++
    //console.log("n",n)
    if(n===0) return 1
    if (n<0) return -1
    if (n>0) return n*factorial(n-1)

}


export default HookuseCallback