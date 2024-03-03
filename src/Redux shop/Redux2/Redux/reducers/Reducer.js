import {event} from '../constants/Constants'
import { v4 as uuidv4 } from 'uuid';


const {SET_PRODUCTS,SELECT_PRODUCT,REMOVE_PRODUCT,ADD_TO_CART,EMPTY_CART,REMOVE_CART_PRODUCT}=event


const initialState={
    products:[]
}


export const allProductsReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case SET_PRODUCTS:
            
            return {...state,products:payload}
        default:
            return state

    }

}

export const selectProductReducer =(state={},{type,payload})=>{
    switch(type){
        case SELECT_PRODUCT:
            
            return {...state,payload}
        case REMOVE_PRODUCT:
            return {}
        default:
            return state
    }

}

const initialCart={
    products:[]
}

export const cartItemsReducer =(state=initialCart,{type,payload})=>{
    switch(type){
        case ADD_TO_CART:
            return {products:[...state.products,{uuid:uuidv4(),...payload}]}
        case EMPTY_CART:
            return {products:[]}
        case REMOVE_CART_PRODUCT:
            return{products:set_cart_products_after_removing_a_product(state.products,payload)}
        default:
            return state
    }
}

const set_cart_products_after_removing_a_product=(cart_products,payload)=>{

    return cart_products.filter(product=>product.uuid!==payload.uuid)

}

