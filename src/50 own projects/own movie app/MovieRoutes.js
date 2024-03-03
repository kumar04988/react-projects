import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/movie detail/Detail'
import PageNotFound from './components/PageNotFound'
import Person from './components/person detail/Person'
import PersonDetails from './components/person detail/PersonDetails'

const MovieRoutes = () => {
  return (
    <div>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="" element={<PageNotFound/>}/>
        <Route path="/person/:id" element={<Person/>}/>
        <Route path="/person-details/:id" element={<PersonDetails/>}/>
        <Route path="/details/:type/:id" element={<Detail/>}/>

        
       </Routes>
        
        </BrowserRouter>

      
    </div>
  )
}

export default MovieRoutes
