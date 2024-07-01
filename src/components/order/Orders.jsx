import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
    const orders = useSelector((state)=>state.cart.orders)
    const navigator = useNavigate()
    
    return (
        <div className='mx-4 my-2 py-4'>
            {orders.length == 0 ? 
            (
                <div className='flex h-96 gap-7 justify-center flex-col items-center'>
                    <div className='items-center flex text-xl tracking-wide text-center'>You havent ordered anything yet</div>
                    <div className=' items-center flex text-xl tracking-wide'><div className='pt-6 pb-1 cursor-pointer text-blue-500 border-blue-500  opacity-80 hover:opacity-100  transition border-b' onClick={()=>navigator('/react-food-delivery-simulator/menu')}>Order something</div></div>
                </div>
            )  
              :
                (
                    <>
                        <div className='my-4 border-b flex w-fit border-slate-600 py-1'>Your Orders</div>
                        <div>
                            <ul className='divide-y divide-slate-300 '>
                                {orders.map((order)=>(
                                    <li className={`flex flex-row justify-between hover:opacity-100 opacity-80 p-4 transition `}>
                                        <div className={order.eta === 0 && 'line-through opacity-55'}>
                                            <div className='underline-offset-4 underline mb-2'>
                                                Order #{order.orderNo}
                                            </div>
                                            <div className='gap-2'>
                                                {order.ordered.map((e)=>(
                                                    <div>{e.quant} x {e.name}</div>
                                                ))}
                                            </div>

                                        </div>
                                        <div className={`flex items-center ${order.eta === 0 && 'opacity-55'}`}><Button onClick={()=>navigator(`order/${order.orderNo}`)} value={'View'} className='px-4 py-2 shadow-sm'/></div>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Orders