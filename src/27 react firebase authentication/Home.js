import React from 'react'
import { useUserAuth } from './Context/UserAuthContext'
// import { auth } from '../30 books library/firebase-crud';
import BooksCommon from '../30 books library/BooksCommon';

const Home = () => {
    const {user,signOut,auth}=useUserAuth();

    console.log("user",user)
  return (
    <>
    <div className='ui message success' style={{"margin":"auto","marginTop":"30vh"}}>
        You are successfully logged in,This is your home page<br/>
        your email id:{user.email}<br/>
        OR <br/>
        Phone number:{user.phoneNumber}<br/>
        <button className='ui button red' onClick={()=>signOut(auth)}>LogOut</button>
        

        
    </div><br/><br/>
    <BooksCommon/>

    </>
  )
}

export default Home