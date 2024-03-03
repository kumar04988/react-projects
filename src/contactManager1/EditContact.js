import React, { useEffect, useState } from 'react'
import './addContact.scss';
import { useLocation, useNavigate } from 'react-router-dom';
// import {uuid1} from 'uuidv4'
import api from './api/contacts';

const EditContact = ({ setContacts, contacts }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const CONTACT_KEY = "contact"
    const [formError, setFormError] = useState({})

    // useEffect(()=>{
    //     const retrieveContacts=JSON.parse(localStorage.getItem(CONTACT_KEY))
    //     console.log("retrieveContacts",retrieveContacts)
    //     if(retrieveContacts)setContacts(retrieveContacts)

    // },[])

    // useEffect(()=>{
    //     localStorage.setItem(CONTACT_KEY,JSON.stringify(contacts))

    // },[contacts])
    const { id, name, email } = location.state.editUser
    const [data, setData] = useState({
        name,
        email
    })


    const editHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const updateContact = async (e) => {
        e.preventDefault()
        const response = await api.put(`/contacts/${id}`, data)

        setContacts(
            contacts.map((contact) => {
                return contact.id === id ? { ...response.data } : contact
            })
        )
        console.log("response1", response)
        navigate("/")
        console.log("contacts", contacts)
    }

    return (
        <div className='ui main' style={{ "padding": "30px" }}>
            <h2> Edit Contact</h2>
            <form className='ui form' autoComplete='off' onSubmit={updateContact}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Enter name' value={data.name} onChange={editHandler} />
                    <p>{formError.name}</p>

                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Enter email' value={data.email} onChange={editHandler} />
                    <p>{formError.email}</p>

                </div>
                <button className='ui button blue' >UPDATE</button>
            </form>

        </div>
    )
}

export default EditContact