import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

    const [hamOn,setHamOn]=useState(false)

    const hamburgerOn=()=>{
        const hamburgerStatus = hamOn ?false:true
        setHamOn(hamburgerStatus)

    }
  return (
    <div className='full-wrap-dark-navbar'>
    <div className='body-wrapper'>
      <header>
        <div className='logo'>
          Dark World
        </div>

        
     
        <div className={`${hamOn ?"cross" :"hamburger"}`} onClick={()=>{hamburgerOn()}}>

          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
          </div>


          <nav className= {`${hamOn?"menu-slide":"navbar"}`}>
            <ul>
            <li className='option'><a href='#'>name</a></li>
            <li className='option'><a href='#'>skills</a></li>
            <li className='option'><a href='#'>contact</a></li>
            <li className='option'><a href='#'>Issues</a></li>
            <li className='option'><a href='#'>Mail-us</a></li>

            </ul>


            </nav>
          

          
        
      </header>
     
     
    </div>
    </div>
  )
}

export default Navbar