import React,{useState} from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.scss';
import { useUserAuth } from './Context/UserAuthContext'

const Signup = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {signUp} =useUserAuth();
    const [error,setError]=useState("")
    const navigate = useNavigate()

    console.log("error",error)

    const handleSubmit=async(e)=>{
        e.preventDefault()
       try{
        const signUpResponse = await signUp(email,password)
        console.log("signUpResponse",signUpResponse)
        navigate("/")
       }catch(err){
        setError(err.message)
       }
    }

  return (
    <>
    <div className="p-4 box" >
        <h2 className="mb-3">firebase Auth Signup</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required></Form.Control>
            </Form.Group>
            <div className='d-grid gap-2'>
            <Button className='ui button blue' type='submit'>SignUp</Button>
        </div>
        </Form>
        
        
    </div>

    <div className='switch-tab'>
        Already have an account? <Link to={`/`}>Login In</Link>
    </div>
   </>
  )
}

export default Signup