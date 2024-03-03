import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_products ,add_to_cart} from '../Redux/actions/Action'
import {Link, useNavigate} from 'react-router-dom'
import './allproducts.scss'
import Exit from './Exit'
import {empty_cart,remove_product_from_cart} from '../Redux/actions/Action'


const CartProducts = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartProducts = useSelector((state)=>state.CartProducts.products)
  console.log("cartProducts",cartProducts)



  const products=async()=>{
      
      const response=await axios.get(`https://fakestoreapi.com/products`)
      console.log(response)
      if(response)dispatch(set_products(response.data))

  }

  const totalPrice =cartProducts.reduce((total,obj)=>total+obj.price,0)

  const productClicked=(id)=>{
    navigate(`/product?id=${id}`)

  }

  const exit=()=>{
    navigate("/exit")
    dispatch(empty_cart())

  }


  useEffect(()=>{
    products()
  },[])
  return (
    <div>
        {cartProducts.length===0 ?<div style={{"textAlign":"center"}}><h2><i>No products added to cart</i></h2></div>:

        (
            <div>
            <div className='grid-container'>

      {
        cartProducts.map((product,index)=>{
          const {id,category,description,image,price,rating,title,uuid} =product

          return(
            <div key={index}>
            
          
              <div  className='cart-product'>
              <Link to={`product/${id}`}>

       
              <div className='grid-item'>
              <div className='item-image'><img src={image} /></div>

              <div className='item-details'>
              <div>{title}</div>
              <div className='item-price'>$ {price}</div>
              <div className='item-category'>{category}</div>
              </div>
              </div>
              </Link>

              <div className='remove-cart-product-icon' onClick={()=>dispatch(remove_product_from_cart(uuid))}>X</div>

              </div>
              
              
      
            
            
      
            </div>
          )
          
        })
      }


      
    </div>


    <div className='checkout-items'>
              <div className='ui vertical animated button' tabIndex="0" style={{"marginTop":"20px","color":"white","backgroundColor":"tomato","margin":"20px"}} onClick={()=>exit()}>
                            <div className='checkout-btn'>
                            <div className='hidden content'>
                                <i className=''> checkout</i>
                            </div>
                            <div className='visible content' >$ {Math.round(totalPrice)}</div>
                            </div>
                        </div>



        </div>

        </div>

            
        )
        
        }
    
    </div>
  )
}

export default CartProducts