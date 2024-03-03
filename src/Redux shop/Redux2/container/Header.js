import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartProducts = useSelector((state)=>state.CartProducts.products)

  return (
    <div className='shop-header'>
        <div>
        Fake shop
        <i className='shop icon'></i>
        </div>
        <div className='cart-icon'>
        <Link to={`/cart-products`}>
        <i className='shop icon' style={{"color":"brown"}}></i>
          <div></div>
        <div className='cart-items-count'>{cartProducts.length}</div>

        </Link>

        </div>
        </div>
  )
}

export default Header