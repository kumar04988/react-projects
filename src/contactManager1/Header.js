import React, { useEffect, useState } from 'react'
import './Header.scss';
import arrow from './images/leftarr.png'
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  const location =useLocation()
  console.log("window location", window.location.pathname)

  return (
    <>
    {window.location.pathname!=="/" &&
    <div className='ui-fixed-menu'>
      <div className='back-img' onClick={() => navigate("/")}> <img src={arrow} alt="icon" width={20} />
      </div>
      <div className='ui-container-center'>
        Contact Manager
      </div>
    </div>
  }
</>
    

    
  
    
  )
}

export default Header