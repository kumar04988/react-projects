import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import './header.css';
import { userContext } from './useUserContext/useUserContext';

const LoginForm = () => {

  const username = useRef("")
  const password = useRef("")
  const [error, setError] = useState({ username: "", password: "" })
  const { user, logIn, logOut } = useContext(userContext)

  // if(username.current.data===""){
  //     console.log("username.current.value is empty")
  //     setError((prevstate)=>prevstate.username="user name should not be empty")

  // }


  const submitHandler = (e) => {
    e.preventDefault()
    logIn(username.current.value)
  }

  return (
    <div form-wrapper>
      <div className='form-header'>login form</div>
      <div className='loginform'>
        <form onSubmit={submitHandler}>
          <div className='fields'>
            <input ref={username} type="text" placeholder='Enter name' /><br />
            <p>{error.username}</p>
            <input ref={password} type="password" placeholder='Enter password' /><br />
            <p></p>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm