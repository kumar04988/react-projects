import React, { useEffect, useState } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { BrowserRouter as Router,Routes,Route, isRouteErrorResponse } from 'react-router-dom'
import ContactDetail from './ContactDetail'
import api from './api/contacts';
import EditContact from './EditContact'
const Common = () => {

    // const users=[
    //     {
    //         name:"satish",
    //         email:"satish@gmail.com"
    //     },
    //     {
    //         name:"sk",
    //         email:"sk@gmail.com"
    //     },
    //     {
    //         name:"kumar",
    //         email:"kumar@gmail.com"
    //     }
    // ]

    //retrieve contacts
    const retrieveContacts=async()=>{
        const response=await api.get("/contacts")
        return response.data
    }

    const [contacts,setContacts]=useState([])

    useEffect(()=>{
        const fetchContacts=async()=>{
            const allContacts=await retrieveContacts(); 
            if(allContacts)setContacts(allContacts)
        }
        fetchContacts();
    },[])

  
  return (
    <div>
        <Router>
        <Header />
        <Routes>
            <Route path='/' element={<ContactList contacts={contacts} setContacts={setContacts}/>}/>
            <Route path='/add' element={<AddContact setContacts={setContacts} contacts={contacts} />}/>
            <Route path='/contact' element={<ContactDetail/>}/>
            <Route path='/edit' element={<EditContact contacts={contacts} setContacts={setContacts}/>}/>

        </Routes>
       
        </Router>
        
        
    </div>
  )
}

export default Common