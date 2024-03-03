import React, { useState } from "react";
import user from "./images/unknown.jpg";
import "./contactList.scss";
import { Link } from 'react-router-dom'
import ContactDetail from "./ContactDetail";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, setContacts }) => {


  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState({ flag: false, contact: {} })





  // const showDetail=(contact)=>{
  //     navigate(`/contact`)
  //     return(
  //         <div>
  //             <Router>
  //                 <Routes>
  //                     <Route path="/contact" element={<ContactDetail contact={contact} />}/>
  //                 </Routes>
  //             </Router>

  //         </div>
  //     )
  // }

  // Object.values(contact) --> It converts only values of contact into array
  // Object.values(contact).join() --> It converts array of contact values into one string.
  const renderList = contacts.filter((contact) => Object.values(contact).join().toLowerCase().includes(search.toLowerCase())).map((contact, index) => {
    console.log("Object.values(contact)",Object.values(contact))
    console.log("Object.values(contact).join()",Object.values(contact).join())
    console.log("contacts", contacts)
    console.log("contact.name", contact.name)
    return (
      <div>
        {contact.name ? <ContactCard index={contact.id} contact={contact} contacts={contacts} setContacts={setContacts} /> : <div>No contact available</div>}

        {/* {
        // open &&

        <Modal
        onClose={() => setOpen({flag:false})}
        onOpen={() => setOpen({flag:true})}
        open={open.flag}
        // trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
          <Modal.Description>
            <Header>{open.contact.name}</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen({flag:false})}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={()=>removeUser(open.contact.email)}
            positive
          />
        </Modal.Actions>
      </Modal>
      } */}

      </div>
    );
  });
  return (
    <div>
      <div className="contact-list-heading-btn">
        <span>Contact List</span>
        <Link to="/add" className="button1"><button className="ui button blue">Add Contact</button>
        </Link>
      </div>
      {/* <div className="search-contact">
                <input type="text" placeholder="search contact" onChange={(e)=>setSearch(e.target.value)}/>

            </div> */}
      <div className="search-contact">
        <div className="ui search">
          <div className="ui icon input">
            <input type="text" placeholder="search contacts" className="prompt" onChange={(e) => setSearch(e.target.value)} />
            <i className="search icon"></i>

          </div>

        </div>
      </div>
      <div className="ui celled list">{renderList}
      </div>
    </div>
  );
};

export default ContactList;
