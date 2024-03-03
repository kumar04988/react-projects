import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_products } from '../Redux/actions/Action'
import {Link, useNavigate} from 'react-router-dom'
import './allproducts.scss'

const AllProducts = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const allproducts = useSelector((state)=>state.TotalProducts.products)
  console.log(allproducts)



  const products=async()=>{
      const response=await axios.get(`https://fakestoreapi.com/products`)
      console.log(response)
      if(response)dispatch(set_products(response.data))
  }

  const productClicked=(id)=>{
    navigate(`/product?id=${id}`)
  }


  useEffect(()=>{
    products()
  },[])
  return (
    <div className='grid-container'>

      {
        allproducts.map((product,index)=>{
          const {id,category,description,image,price,rating,title} =product

          return(
            <div key={index}>
              {allproducts && 
            
          
              <div >
              <Link to={`product/${product.id}`}>

       
              <div className='grid-item'>
              <div className='item-image'><img src={product.image} /></div>

              <div className='item-details'>
              <div>{title}</div>
              <div className='item-price'>$ {price}</div>
              <div className='item-category'>{category}</div>
              </div>
              </div>
              </Link>

              </div>
              
      
            
            }
      
            </div>
          )
          
        })
      }
      
    </div>
  )
}

export default AllProducts