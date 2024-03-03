
import { createStore,combineReducers, applyMiddleware  } from "redux"
import { allProductsReducer,selectProductReducer,cartItemsReducer} from "../reducers/Reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

const allReducers =combineReducers({
    TotalProducts:allProductsReducer,
    SelectProduct:selectProductReducer,
    CartProducts:cartItemsReducer,

}) 
const middleWare=[thunk]

const store =createStore(allReducers,{},composeWithDevTools(applyMiddleware(...middleWare)))

export default store;
