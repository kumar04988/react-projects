import React, { useState, useEffect, useMemo } from 'react'

const HookuseMemo = () => {


    //first write the total code and then think about where to use useMemo hook.if you write useMemo or useCallback unnecessarly,it will create performance overhead problem because useMemo or useCallback will take some memory to hold the values.
    // uses:-
    // optimize expensive operation.
    // referential equality

    // referential equality:-
    // primitive data types:- numbers
    // non-primitive data types:- arrays and objects
    // 1.in other programming languages like javascript:- for primitive datatypes. while equality check,it will consider value of those variables.but non-primitive datatypes,the equality check is based on the stored references ie. path 
    // ex-primitive
    // 1.
    // a=1
    // b=1
    // a==b
    // true

    // 2.
    // t1=[1,2,3]
    // t2=[1,2,3]
    // t1==t2
    // false
    // it is false,because here equality check is based on the references ie. location is different.so,equality check is false.



    const [counter, setCounter] = useState(0)
    // const [result,setResult]=useState(0)
    const [name, setName] = useState("")




    // const result =factorial(counter)  
    //because of above line,when there is any change in other useState values.then whole component will renders.at that time the above line factorial function also will get called unnecessarly.
    //so,to avoid this issue to call the factorial function only when it needed then,use useMemo as below.  

    //now,it won't effect the input field
    const result = useMemo(() => {
        return factorial(counter)
    }, [counter])
    // console.log("result",result)

    return (

        <div>
            factorial of {counter} is  {result}
            <div>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>

            </div>
            <hr></hr>
            <div>
                <input type="text" value={name} placeholder='enter name' onChange={(e) => setName(e.target.value)} />
                This is {name}

            </div>
            <hr>
            </hr>

            <DisplayName name={name}></DisplayName>

        </div>
    )
}

//Try to write this useMemo used functions after the main return block.

// we are getting this error,if we use useMemo at the top level in below function.
//Error : React Hook "useMemo" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook 
//so,used React.memo

//here DisplayName component will be get called only if there is any change in name variable.here React.memo is used to do referential check.
//if there is any change in name,then React.memo will identify this and will execute DisplayName component,if there is no change in name.then,reference will not change.so React.memo won't allow to execute DisplayName component.It avoids un necessary rendering.
//so,we are memorizing the DisplayName component.so our props will have referential equality.

const DisplayName = React.memo(({ name }) => {
    console.log("inside DisplayName")
    return <p>This is Display {name}</p>
})

const factorial = (n) => {
    let i = 1
    while (i < 200000000) i++
    //console.log("n",n)
    if (n === 0) return 1
    if (n < 0) return -1
    if (n > 0) return n * factorial(n - 1)
}

export default HookuseMemo





