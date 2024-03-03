import React, { useContext } from 'react'
import { userContext, useUserContext } from './useUserContext/useUserContext'

const Home = () => {
  const { user, logIn, logOut } = useContext(userContext)

  return (
    <div className='ui container center' style={{ "marginTop": "40px" }}>
      <div className='home-profile'>
        <div className='ui message success'>
          <h3>You are now logged in as {user.username}</h3>

        </div>
      </div>
      <button className='ui button blue' onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home