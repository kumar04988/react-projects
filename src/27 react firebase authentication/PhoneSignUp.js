import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
// import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './Signup.scss';
import { useUserAuth } from './Context/UserAuthContext'

const PhoneSignUp = () => {
  const [error,setError]=useState("")
  const [number,setNumber]=useState("")
  const [otp,setOTP]=useState("")
  const [flag,setFlag]=useState(false)
  const [confirmObj,setConfirmObj]=useState("")
  const navigate =useNavigate()

  const {getRecaptchaVerify} = useUserAuth()

  const getOTP=async(e)=>{
    e.preventDefault()
    console.log(number)
    console.log("number?.length",number?.length)

    if(number==="" || number===undefined){
      return setError("Please enter a valid phone number")
    }else if(number?.length!==13){
      return setError("phone number length must be 10 digits")
    }
    try{
      setError("")
      const response = await getRecaptchaVerify(number)
      console.log("response",response)
      setConfirmObj(response)
      setFlag(true)

    }catch(err){
      setError(err.message)
    }
    
  }

  const verifyOTP=async(e)=>{
    e.preventDefault()
    
    if(otp==="" || otp===null)return setError("please Enter the OTP and try")
    console.log("otp",otp)
    try{
      setError("")
      await confirmObj.confirm(otp)
      navigate("/home")
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div className="p-4 box">
        <h2 className="mb-3">firebase phone Login</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={getOTP} style={{"display":!flag?"block":"none"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <PhoneInput defaultCountry='IN' placeholder="Enter phone number" onChange={setNumber} value={number}/>
              <div className='button-right mt-3'>
              <Link to={'/'}>
                <Button variant='secondary'>Cancel</Button>&nbsp;
                </Link>
                <Button type="submit" variant='primary'>Send OTP</Button>

              </div>
              <div className='mt-4' id="recaptcha-container"/>
                
            </Form.Group>
        </Form>


        <Form onSubmit={verifyOTP} style={{"display":flag?"block":"none"}}>
            <Form.Group className="mb-3" controlId="formBasicOTP">
              <Form.Control placeholder="Enter OTP" onChange={(e)=>setOTP(e.target.value)} value={otp}></Form.Control>
              {/* <PhoneInput defaultCountry='PH' placeholder="Enter OTP" onChange={()=>setOTP()} value={otp}/> */}
              <div className='button-right mt-3'>
                <Link to={'/'}>
                <Button variant='secondary'>Cancel</Button>&nbsp;
                
                </Link>
                <Button type="submit" variant='primary'>Verify OTP</Button>

              </div>
                
            </Form.Group>
        </Form>
        
        
    </div>
  )
}

export default PhoneSignUp