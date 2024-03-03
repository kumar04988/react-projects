import React, { useEffect, useState } from 'react'
import user from '../../common/user.svg'
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovies, addShows } from '../../redux features from redux toolkit/movies';
import {addMovieOrShowText} from '../../redux features from redux toolkit/movies';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [term,setTerm]=useState("")
  const dispatch=useDispatch()
  const navigate = useNavigate()


  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("term",term)
    dispatch(addMovieOrShowText(term))
    if(term==""){

      showToastMessage();



      <ToastContainer />
    }
    
  }


    if(term==""){
      dispatch(addMovieOrShowText("mission"))
    }

    const gotoHome=()=>{
      navigate("/")
    }


  return (
    <div className='header'>
        {/* <Link to={`/`}> */}
        <div className='logo' onClick={()=>gotoHome()}>Movie App</div>
        {/* </Link> */}
        <form onSubmit={submitHandler}>
        <div className='search-bar'>

          <input type="text" value={term} placeholder='search movie or show' onChange={(e)=>setTerm(e.target.value)}/>
          <button><i className='fa fa-search'></i></button>

         
        </div>
        </form>
        <div className='user-icon'>
            <img src={user} alt="user"/>
        </div>
    </div>
  )
}

export default Header