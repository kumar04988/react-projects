import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {select_product,remove_product,add_to_cart} from '../Redux/actions/Action'
import './ProductDetail.scss'

const ProductDetail = () => {
    const dispatch = useDispatch()
    const {id} =useParams()
    console.log(id)
    const {payload} =useSelector((state)=>state.SelectProduct)
    console.log("payload",payload)
    // const {title,category,description,image,price} = payload
    // console.log(title)

    // console.log(id)
    // console.log(category)

    const selectedProduct=async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
            console.log(err)
        })
        console.log(response.data)
        dispatch(select_product(response.data))
    }

    useEffect(()=>{
        console.log("in useEffect")
        if(id && id!=="")selectedProduct();
        return()=>{
            dispatch(remove_product())

        }
        
    },[id])

  return (
    <div className='ui grid container' style={{"width":"200px","height":"200px"}}>
        {/* Object.keys(payload).length===0 */}
        { 
        (
            payload===undefined ? (<div className='item-loading'>...Loading</div>):
        
        
            (<div className='ui placeholder segment' style={{"width":"100%","marginTop":"50px","height":"600px"}}>
                <div className='ui two column stackable center aligned grid' >
                <div className='ui vertical divider'>AND</div>
                <div className='middle aligned row'>
                    <div className='selected-image-set'>
                    <div className='column 1p' >
                        
                        <img className='ui fluid image' src={payload.image}/>
                        </div>
                        
    
    
                    </div>
                    <div className='column rp' style={{"padding":"30px"}}>
                        <h1>{payload.title}</h1>
                        <h2>
                            <a className='ui teal tag label' style={{"fontSize":"20px"}}>${payload.price}</a>
                        </h2>
                        <h3 className='ui brown block header'>{payload.category}</h3>
                        <div>{payload.description}</div>
                        <div className='ui vertical animated button' tabIndex="0" style={{"marginTop":"20px","color":"white","backgroundColor":"tomato"}} onClick={()=>dispatch(add_to_cart(payload))}>
                            <div className='hidden content'>
                                <i className='shop icon'></i>
                            </div>
                            <div className='visible content' >Add to Cart</div>
                        </div>
    
                    </div>
                </div>
    
                </div>
                
    
    
                </div>)
        )
          
            }
    </div>
  )
}

export default ProductDetail