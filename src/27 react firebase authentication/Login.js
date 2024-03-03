import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from './Context/UserAuthContext'
import './Signup.scss';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {logIn,user,signInWithGoogle} =useUserAuth();
    const [error,setError]=useState("")
    const navigate = useNavigate()


    console.log("user",user)

    const handleSubmit=async(e)=>{
        e.preventDefault()
       try{
        await logIn(email,password)
        navigate("/home")
       }catch(err){
        console.log("err",err)
        setError(err.message)

       }

    }

    const handleSignInWithGoogle=async()=>{
        try{
            await signInWithGoogle()
            navigate("/home")
           }catch(err){
            console.log("err",err)
            setError(err.message)
    
           }

    }
  return (
   <>
    <div className="p-4 box">
        <h2 className="mb-3">firebase Auth Login</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required></Form.Control>
                <div className='forget-link'><Link to={`/forget`}>forget password</Link></div>
            </Form.Group>
            <div className='d-grid gap-2'>
            <Button className='ui button blue' type='submit'>Login</Button>
            <hr/>
             </div>
             <div className='google-button'><GoogleButton onClick={()=>handleSignInWithGoogle()}></GoogleButton></div>

             <Link to={`/phonesignup`}>
             <div className='d-grid gap-2 mt-4'>
            <Button variant='success' type='submit'>Sign in with phone number</Button>
            <hr/>
             </div>
             
             </Link>

        </Form>
        
        
    </div>

    <div className='switch-tab'>
        Don't have an account? <Link to={`/signup`}>Sign Up</Link>
    </div>
   </>
  )
}

export default Login