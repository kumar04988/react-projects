import React from 'react'
import Header from './Header'
import AllProducts from './AllProducts'
import ProductDetail from './ProductDetail'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CartProducts from './CartProducts'
import Exit from './Exit'
const CommonSite = () => {
  return (
    <div>
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<AllProducts/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/>
            <Route path="/cart-products" element={<CartProducts/>} />
            <Route path='/cart-products/product/:id' element={<ProductDetail/>}/>
            <Route path="/exit" element={<Exit/>}/>
            <Route>404 Page not found</Route>
          </Routes>
        </Router>


        
    </div>
  )
}

export default CommonSite