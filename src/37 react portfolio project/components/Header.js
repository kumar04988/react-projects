import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './header.scss'

const Header = ({backg,setBackg,setAppColor,appColor}) => {
    const linkColor={
        color:"tomato"
    }

    const [navlistclass,setNavListClass]=useState("nav-list")
    const [menuClicked,setMenuClicked]=useState(false)

    const handleSiteColor=()=>{
        if(backg==="dark"){
            setBackg("white")
            setAppColor({bgColor:"#000000",textColor:"#fff"})

        }else{
            setBackg("dark")
            setAppColor({bgColor:"#fff",textColor:"#000000"})

        }
    }

    const menuToggleHandle=()=>{
        setMenuClicked(!menuClicked)
    }
    
  return (
    <div className='header1' style={{"backgroundColor":appColor.bgColor,"color":appColor.textColor}}>
        {/* <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/" className='head'>SK brand</Navbar.Brand>
          <Nav className="ml-auto" >
            <NavLink to="/" className="nav-link" style={({isActive})=>(isActive? linkColor:undefined)}>Home</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link" >Contact</NavLink>
          </Nav>
          <Button onClick={()=>{handleSiteColor()}} className="color-btn">{backg}</Button>
        </Container>
      </Navbar> */}

<div className='navbar' >
       
          <NavLink to="/" className='head'>SK brand</NavLink>
          
          
          <div className={menuClicked?"hide-menu":"nav-list"}>
            
            <NavLink to="/" className="nav-link" style={({isActive})=>(isActive? linkColor:undefined)} >Home</NavLink>
            <NavLink to="/projects" className="nav-link" style={({isActive})=>(isActive? linkColor:undefined)}>Projects</NavLink>
            <NavLink to="/services" className="nav-link" style={({isActive})=>(isActive? linkColor:undefined)}>Services</NavLink>
            <NavLink to="/about" className="nav-link" style={({isActive})=>(isActive? linkColor:undefined)}>About</NavLink>
            <NavLink to="/contact" className="nav-link"  style={({isActive})=>(isActive? linkColor:undefined)}>Contact</NavLink>
            <Button style={{"marginBottom":"20px"}} onClick={()=>{handleSiteColor()}} className="color-btn">{backg}</Button>
            
       
          </div>
          {/* <div className='menu-item'> */}
          <div className={menuClicked?'menu-icon':"menu-icon-wrong"} onClick={()=>menuToggleHandle()}>
            {/* </div> */}
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          
      </div>
    </div>
  )
}

export default Header