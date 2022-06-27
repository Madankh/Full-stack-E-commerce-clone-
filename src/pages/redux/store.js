import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../redux/cartRedux'
import userReducer from './userRedux.js'

export default configureStore ({
    reducer:{
        cart: cartReducer,
        user: userReducer,
    },
});