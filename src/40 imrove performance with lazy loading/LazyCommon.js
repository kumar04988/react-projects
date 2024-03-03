import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router,Routes,Route}   from 'react-router-dom'
import './lazy.scss';
const Header = lazy(()=> import('./components/Header' /* webpackChunkName:"header"*/)) //we can select our own chunk name with this comment like
const Contact = lazy(()=>import('./pages/Contact'))
const Home = lazy(()=>import('./pages/Home'))
const Project = lazy(()=>import('./pages/Project'))
const Service = lazy(()=>import('./pages/Service'))

// note: open console,open sources and search for this related findByPlaceholderText,the files of each tab will appear there only when we clicked on that particular tab 

const LazyCommon = () => {
  return (
    <div className='lazy-main'>
       <Suspense fallback={<h2>...Loading</h2>}>
       <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/service" element={<Service/>}/>

            </Routes>
        </Router>
       </Suspense>
        
    </div>
  )
}

export default LazyCommon