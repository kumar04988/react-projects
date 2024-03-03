import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from './Context/UserAuthContext'

const ForgetPassword = () => {
    const [email,setEmail]=useState("")
    const [res,setRes]=useState("")

    const {user,forgetPassword} =useUserAuth();
    const [error,setError]=useState("")


    console.log("user",user)

    const handleforgetPassword=async(e)=>{
        e.preventDefault();
        try{
            const response = await forgetPassword(email)
            console.log("response",response)
            setRes(response)

        }catch(err){
            setError(err.message)
        }
    }

    
    const emailHandler=(e)=>{
        setEmail(e.target.value)
        if(!email){
            setRes("")
        }

    }

    console.log("res",res)

    console.log("Object.keys(res)",Object.keys(res))


   
  return (
    <>
    <div className="p-4 box">
        <h2 className="mb-3">Reset Password</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        {!error && res  && email && <Alert variant="success">Check your Email</Alert>}
        <Form onSubmit={handleforgetPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" onChange={emailHandler} required></Form.Control>
            </Form.Group>
            <div className='d-grid gap-2'>
            <Button className='ui button blue' type='submit'>Submit</Button>
             </div>
        </Form>
        
        
    </div>
    </>
  )
}

export default ForgetPassword