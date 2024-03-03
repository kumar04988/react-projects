import React from 'react'
import LoginForm from './LoginForm'
import Home from './Home';
import { useContext } from 'react';
import { userContext } from './useUserContext/useUserContext';

const Auth = () => {
    const {user,logIn,logOut}=useContext(userContext)
    const isGuestLogin=user?.isGuestLogin
  return (
    <div>
        {isGuestLogin?<LoginForm/>:<Home/>}  
    </div>
  )
}

export default Auth