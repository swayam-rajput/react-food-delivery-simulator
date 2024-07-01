import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        store_item_quant:10,
        orders:[]
        
    },
    reducers:{
        addToCart(state,action){
            state.cart.push(action.payload)
        },
        clearCart(state){
            state.cart = []
        },
        deleteFromCart(state,action){
            state.cart = state.cart.filter((e)=>e.item_id!==action.payload)
        },
        increaseQuant(state,action){
            const item = state.cart.find((e)=>e.item_id === action.payload)
            item.quant += 1
            item.total_price = item.quant * item.unit_price
        },
        decreaseQuant(state,action){
            const item = state.cart.find((e)=>e.item_id === action.payload)
            item.quant -= 1
            item.total_price = item.quant * item.unit_price
            if(item.quant===0){
                cartSlice.caseReducers.deleteFromCart(state,action)
            }
        },
        
        setItemQuantInStore(state,action){
            state.store_item_quant = action.payload
            console.log(state.store_item_quant);
        },

        makeOrder(state,action){
            state.orders.push(action.payload)
        },
        clearOrders(state){
            state.orders = []
        },
        decreaseETA(state,action){
            const order = state.orders.find((e)=>e.orderNo === action.payload)
            if(order.eta > 0){
                order.eta -= 1
            }
        }
    }
    ,
})
export default cartSlice.reducer;

export const getCart = (state)=>state.cart.cart;

export const getItemQuantFromId = (id)=>(state)=>{
    const node= state.cart.cart.find((item)=> item.item_id === id);
    return node ? node.quant : 0;
};

export const getTotalAmount = () => { 
    return useSelector((state)=>{
        let sum = 0;
        state.cart.cart.forEach((e)=>{sum+=e.total_price})
        return sum
    })
}
    
export const getTotalItems = (state) =>{
    let tot = 0
    state.cart.cart.forEach((e)=>{tot+=e.quant})
    return tot
}

export const getItemQuantInStore = (state)=>{
    const itemQuantInStore = state.cart.store_item_quant
    return itemQuantInStore
}


export const{
    addToCart,
    clearCart,
    deleteFromCart,
    increaseQuant,
    decreaseQuant,
    setItemQuantInStore,
    makeOrder,
    clearOrders,
    decreaseETA,
} = cartSlice.actions