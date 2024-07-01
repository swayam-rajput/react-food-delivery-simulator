import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../cart/CartItem'
import OrderItem from './OrderItem'
import { useParams } from 'react-router-dom'
import { clearCart,getTotalAmount } from '../cart/cartSlice'

const Order = () => {
    
    const {orderNo} = useParams()
    const orders = useSelector((state)=>state.cart.orders)
    const order = orders.find((e)=>e.orderNo === parseInt(orderNo))
    const total_pay = getTotalAmount()
    const dispatch = useDispatch()
    
   
    console.log(order);
    return (
        <div className='mx-6 my-2 py-4'>
            <div className='my-4'>Order #{orderNo}</div>
            <div className='flex my-4 bg-slate-400 bg-opacity-30 shadow-sm p-4'>
                {
                    order.eta === 0 
                    ? 
                        (<p className='font-semibold  text-green-500  '>
                            Order delivered!</p>
                        ) 
                    : 
                        (<p className='font-semibold'>
                            Expect Delivery in {order.eta} minutes</p>
                        ) 
                
                }
                </div>
            <div>
                <ul className='divide-y px-2 divide-slate-300 divide-opacity-25 border-t-2 border-b-2 border-slate-300 border-opacity-25 py-2'>
                    
                    {order.ordered.map((value,index)=>(
                        
                        <OrderItem value={value} key={index}/>
                    ))}
                </ul>
            </div>
            <div className='flex my-4 bg-slate-400 bg-opacity-30 shadow-sm p-4'><p className='font-semibold'>Price: ${order.total_price}</p></div>
            
        </div>
    )
}

export default Order