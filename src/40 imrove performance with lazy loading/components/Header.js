import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss';

const Header = () => {

    const active={
        "border": "1px solid black",
        "borderRadius": "3px",
        "backgroundColor": "black",
        "color": "white",
    }

  return (
    <div className='header2'>
        <div>
            <h2>LABS</h2>
        </div>

        <div className='item-list'>
        <NavLink className="nav-link" to="/" style={({isActive})=>isActive?active:undefined}>Home</NavLink>
        <NavLink className="nav-link" to="/contact" style={({isActive})=>isActive?active:undefined}>Contact</NavLink>
        <NavLink className="nav-link" to="/project" style={({isActive})=>isActive?active:undefined}>Project</NavLink>
        <NavLink className="nav-link" to="/service" style={({isActive})=>isActive?active:undefined}>Service</NavLink>
        </div>

    </div>
  )
}

export default Header