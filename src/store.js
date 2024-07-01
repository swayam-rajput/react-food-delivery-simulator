
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/user/User';
import cartReducer from './components/cart/cartSlice';
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
});

export default store;
