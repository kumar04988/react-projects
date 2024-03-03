import React from 'react'
import useScreen from './useScreen'

const ScreenComp = () => {
  //try to reduce screen browser window size,you will find changes
    const  screenSize=useScreen();
  return (
    <div>
        <h2>This is {screenSize} Screen</h2>
    </div>
  )
}

export default ScreenComp