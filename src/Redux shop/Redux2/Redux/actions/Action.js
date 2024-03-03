import {event} from '../constants/Constants'
const  {SET_PRODUCTS,SELECT_PRODUCT,REMOVE_PRODUCT,ADD_TO_CART,EMPTY_CART,REMOVE_CART_PRODUCT} =event


export const set_products = (products)=>{
    return{
        type:SET_PRODUCTS,
        payload:products
    }
}

export const select_product = (products)=>{
    return{
        type:SELECT_PRODUCT,
        payload:products
    }
}

export const remove_product = ()=>{
    return{
        type:REMOVE_PRODUCT
        
    }
}

export const add_to_cart=(product)=>{
    return {
        type:ADD_TO_CART,
        payload:product
    }
}

export const empty_cart=()=>{
    return {
        type:EMPTY_CART
    }
}

export const remove_product_from_cart=(uuid)=>{
    return {
        type:REMOVE_CART_PRODUCT,
        payload:{
            uuid
        }
    }
}
