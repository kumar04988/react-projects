import React from 'react'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import Accounts from './pages/Accounts'
import Cards from './pages/Cards'
import Home from './pages/Home'

const CommonProtectedRoutePage = () => {
  return (
    <div>
        <ul>
            <li>
                <a href="/">Home</a>
                
            </li>
            <li>
               <a href='/accounts'>Accounts(Protected)</a> 
            </li>
            <li>
               <a href='/cards'> Cards(unProtected)</a>
            </li>
        </ul>

        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/accounts' element={<Accounts/>}/>
                <Route path='/cards' element={<Cards/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default CommonProtectedRoutePage