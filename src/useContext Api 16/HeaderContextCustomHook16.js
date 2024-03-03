import React, { useContext } from 'react'
import Auth from './Auth';
import './header.css'
import LoginForm from './LoginForm';
import { userContext, useUserContext } from './useUserContext/useUserContext';

const HeaderContextCustomHook16 = () => {

  const { user, logIn, logOut } = useContext(userContext)
  return (
    <div>
      <div className='header-bar'>
        welcome,{user.username}
        {
          !user.isGuestLogin && <button className='ui button blue' onClick={logOut}>Logout</button>
        }
      </div>
    </div>
  )
}

export default HeaderContextCustomHook16