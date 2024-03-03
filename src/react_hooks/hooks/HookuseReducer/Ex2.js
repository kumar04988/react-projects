import React, { useReducer, useState } from 'react'
import './ex2.css'
const Ex2 = () => {
  const initialState = [{ id: Date.now(), name: "sk", email: "sk@gmail.com" }]
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload]
      case "delete":
        return state.filter((contact) => contact.id !== action.payload.id)

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  const contactHandler = (e) => {
    e.preventDefault()
    dispatch({
      type: "add",
      payload: {
        id: Date.now(),
        name,
        email
      }
    })
  }

  const deleteHandler = (id) => {
    dispatch({ type: "delete", payload: { id } })
  }
  console.log("current state", state)

  return (
    <div className='contact-wrapper'>
      <h3> Contact manager</h3>
      <form onSubmit={contactHandler}>
        <input value={name} type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} required /><br />
        <input value={email} type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="submit" />
      </form>

      <div>
        <ul>
          {
            state.map((contact) => {
              return (
                <div className='contact' key={contact.id}>
                  <div className='contact-details'>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                  </div>
                  <div className='delete-button'>
                    <button onClick={() => deleteHandler(contact.id)}>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Ex2