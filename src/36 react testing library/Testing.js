import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const Testing = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    const handleReset=()=>{
        setEmail("")
        setPassword("")
    }

    const handleSubmit=()=>{
        const errors={}
        if(email.length===0){
            errors.email="Email should not be empty"

        }else if(password.length===0){
            errors.password="Password shuld not be empty"
        }
        setError(errors)
    }
  return (
    
        <div classname="ui main" style={{"width":"50%","margin":"auto"}}>
            <h3>This is react testing tutorial</h3>
            <h4>we will test the login form component</h4>
            {error && <Alert variant='danger'>{error.email}</Alert>}
            {error && <Alert variant='danger'>{error.password}</Alert>}

            <form className='ui form'>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>

                </div>
                <div className='field'>
                    <label>Password</label>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />

                </div>
                <div className='ui button blue'onClick={()=>handleSubmit()}>
                    Submit

                </div>
                
                <div className='ui button grey' onClick={()=>handleReset()}>
                    Reset

                </div>
            </form>

            {/* https://dq43qvrite7cm.cloudfront.net/LY231142792_4_1686556720428_IMG.jpeg */}


            {/* <img src="https://dq43qvrite7cm.cloudfront.net/LY231142792_S-RJR221201_da3d1fd2-d4af-41f7-b3bf-08b3be86ce7c.jpeg" alt="NA"/> */}
            <img src="https://dq43qvrite7cm.cloudfront.net/LY231142792_4_1686556720428_IMG.jpeg" alt="NA"/>

        </div>
   
  )
}

export default Testing