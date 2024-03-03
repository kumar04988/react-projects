import React, { useEffect, useState } from "react";
import "./hooks.css";

const HookuseEffect = () => {
  // In class component we have all this life cycle methods like componentDisMount(),componentDidUpdate(),componentWillUnmount().
  // In functional component,we can use useEffect hook to use all lifecycle methods as mentioned in class comnponent.

  const [time, setTime] = useState(new Date().toString());

  const getDate = () => {
    setTime(new Date().toString());
  };

  //   useEffect(()=>{
  //     console.log("It will mount and update the component,look in console")
  //   })

  //   setInterval(getDate,1000)
  //   or
  useEffect(() => {
    console.log("Component Mounted or updated only when time state changes");
    const interval = setInterval(getDate, 1000);
    // console.log(setInterval(getDate,1000))

    // This will call every time and at last also to cleanup the interval when a component is destroyed(unMounted)
    return () => {
      console.log("cleanup of interval");
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div style={{ textAlign: "center" }}>
      {time}

    </div>
  );
};

export default HookuseEffect;
