import React, { useEffect, useRef, useState } from 'react'

const HookuseRef = () => {

    // 1.Dom reference(we can get access to the html elements used in code).
    // 2.useRef for storing the previous state.
    // 3.hold mutable value prevent re-render of Component.
    // 4. Advantage with useRef is when it's useRef value changes component does not re-render but when useState value changes then component will re-render.

    const [name, setName] = useState("")
    const input1 = useRef("")
    const previous = useRef(0)
    const [random, setRandom] = useState(0)


    console.log(input1)

    useEffect(() => {
        // here previous is not reference of input field,it's just a variable in this case.so previous.current contains only value not object
        console.log("random", random)
        previous.current = random
    }, [random])

    console.log(previous.current)
    console.log(input1.current.value)

    const handleReset = () => {
        setName("")
        input1.current.focus()
    }

    return (
        <div style={{ "margin": "30px" }}>
            <div>
                <input ref={input1} type="text" value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                <button className='btn1' onClick={() => handleReset()}>Reset</button><br />
                My name is {name}
            </div>

            <div>
                <h1>Random number:{random}</h1>
                {typeof previous.current !== "undefined" &&
                    (<h1>Previous State:{previous.current}</h1>)
                }
                {/* generating random number between 1 and 100 */}
                <button className='btn1' onClick={() => setRandom(Math.ceil(Math.random() * 100))}>Generate random number</button>
            </div>
        </div>
    )
}

export default HookuseRef