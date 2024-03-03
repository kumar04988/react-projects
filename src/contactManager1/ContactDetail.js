import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import user from './images/unknown.jpg';
import './contactList.scss';

const ContactDetail = () => {

    const location = useLocation()
    console.log(location)
    const { name, email } = location.state.singleContact

    return (
        <div>
            <center>
                <h2>Contact Detail</h2>
            </center>
            <div className='main'>
                <div className='ui card centered'>
                    <div className='image'>
                        <img src={user} alt="profile-pic" />
                    </div>

                    <div className='content-card-detail'>
                        <div className='header-card'>{name}</div>
                        <div className='description'>{email}</div>
                    </div>
                </div>
                <center>
                    <Link to="/">
                        <div className='ui button blue'>
                            Back to Contact List
                        </div>
                    </Link>
                </center>
            </div>
        </div>
    )
}

export default ContactDetail