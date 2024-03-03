import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
// import moviesList from './Movies'

const Home = () => {

    const [movies,setMovies]=useState()

    const Handle=async()=>{
        const movie = await import("./Movies.js" /* webpackChunkName:"movies"*/) //It is dynamical import helps for lazy loading,means it fetches the movieList data only when it requires,here data fetches only when we click button
        console.log(movie)
        setMovies(movie.default) // since we made default export of movieList array
    }

  return (
    <div>
       <div>
        <Button variant='success' onClick={()=>Handle()}> click</Button>
       </div>

        <div>
            <pre>{JSON.stringify(movies,undefined,2)}</pre>
        </div>

       
    </div>
  )
}

export default Home