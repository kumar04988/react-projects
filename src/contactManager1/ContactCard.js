import React from 'react'
import info from './images/i.png';
import user from "./images/unknown.jpg";
import "./contactList.scss";
import { Link } from 'react-router-dom'
import api from './api/contacts';

const ContactCard = ({ index, contact, contacts, setContacts }) => {

  const removeUser = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }
  
  return (
    <div>
      <div className="items" key={index}>
        <div className="item1">
          <img src={user} alt="user" width={50} />
        </div>
        <div className="content">
          <div className="header-main-card">
            {contact.name}
          </div>
          <div>{contact.email}</div>
        </div>
        <div className="info">
          <Link to="/contact" state={{ singleContact: contact }}>
            <img src={info} alt="info" width={18} />
          </Link>
        </div>
        <div className="item2">

          <Link to="/edit" state={{ editUser: contact }}><i className="edit alternate outline icon"></i></Link>
        </div>
        <div className="item3">

          <i className="trash alternate outline icon" onClick={() => removeUser(contact.id)}></i>

        </div>
      </div>

    </div>
  )
}

export default ContactCard