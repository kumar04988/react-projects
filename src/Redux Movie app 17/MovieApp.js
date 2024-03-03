import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './MovieApp.scss';

const MovieApp = () => {
  return (
    <div className='movie-app-wrapper'>
        <Router>
            <Header/>
            <div className='container'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
                <Route path="" element={<PageNotFound/>}/>


            </Routes>
            </div>
            <Footer/>
        </Router>
        
    </div>
  )
}

export default MovieApp