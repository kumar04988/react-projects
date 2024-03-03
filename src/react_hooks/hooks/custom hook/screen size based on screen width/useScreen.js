import React, { useEffect,useState } from 'react'

const useScreen=()=>{
    //custom hook function should have return at last
    const [screenSize,setScreenSize]=useState()

    const getScreenSize=()=>{
        if(window.innerWidth<600) return setScreenSize("small")
        if(window.innerWidth>600 && window.innerWidth<992) return setScreenSize("medium")
        if(window.innerWidth>992) return setScreenSize("large")
    }
    console.log("screenSize",screenSize)


    useEffect(()=>{
        window.addEventListener("resize",getScreenSize);
        //This below return will execute when useEffect executes and also at last.so,we can use it for cleanup when component will unmount.
        return()=>{
            window.removeEventListener("resize",getScreenSize)
        }
    },[])

    return screenSize;
}

export default useScreen;
