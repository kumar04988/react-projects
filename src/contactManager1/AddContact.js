import React,{useEffect, useState} from 'react'
import './addContact.scss';
import { useNavigate} from 'react-router-dom';
// import {uuid1} from 'uuidv4'
import api from './api/contacts';

const AddContact = ({setContacts,contacts}) => {
    const navigate=useNavigate()
    const CONTACT_KEY="contact"
    const [formError,setFormError]=useState({})
    const [data,setData]=useState({
        name:"",
        email:""
    })
    // useEffect(()=>{
    //     const retrieveContacts=JSON.parse(localStorage.getItem(CONTACT_KEY))
    //     console.log("retrieveContacts",retrieveContacts)
    //     if(retrieveContacts)setContacts(retrieveContacts)

    // },[])
    
    // useEffect(()=>{
    //     localStorage.setItem(CONTACT_KEY,JSON.stringify(contacts))
    // },[contacts])

   
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

const addContact= async(e)=>{
    setFormError({})
    let error={
        name:"",
        email:""
    }
    e.preventDefault()
    console.log("datain",data)
    if(data.name===""){
        error.name="*Name is mandetory"
    }else{
        error.name=""
    }
    
    const exists=contacts.find((contact)=>contact.email===data.email)
    if(data.email===""){
        error.email="*Email is mandetory"
    }else if(exists){
        error.email="*Email already exists";
    }else{
        error.email=""
    }
    console.log("error",error)
    console.log("formError",formError)

    setFormError(error);
    if(error.name==="" && error.email==="") {
        console.log("data",data)
        // const request={
        //     id:3,
        //     ...data,
        // }
        const response =await api.post("/contacts",data)
        console.log("response1",response)

        //we are not adding id in payload,json server api is adding id in order to use it for put or delete methods.
        if(response)setContacts([...contacts,response.data]);
        navigate("/")

    }
    console.log("contacts",contacts)

   }

  return (
    <div className='ui main' style={{"padding":"30px"}}>
       <h2> Add Contact</h2>
       <form className='ui form' autoComplete='off' onSubmit={addContact}>
        <div className='field'>
            <label>Name</label>
            <input type="text" name="name" placeholder='Enter name' onChange={changeHandler}/>
            <p>{formError.name}</p>

        </div>
        <div className='field'>
            <label>Email</label>
            <input type="email" name="email" placeholder='Enter email' onChange={changeHandler}/>
            <p>{formError.email}</p>

        </div>
        <button className='ui button blue' >ADD</button>
       </form>

    </div>
  )
}

export default AddContact