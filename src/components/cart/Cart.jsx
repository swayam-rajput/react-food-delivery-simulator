import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart,getTotalAmount, getTotalItems } from './cartSlice';
import CartItem from './CartItem';
import Button from '../component/Button';
import Modal from '../component/Modal';

const Cart = () => {
    const username = useSelector((state)=> state.user.username);
    const cart = useSelector((state)=>state.cart.cart)
    const total_pay = getTotalAmount()
    const total_items = useSelector(getTotalItems)
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [modal,openModal] = useState(false)
    return (
        <>
        <div className="flex justify-center  flex-col px-5 py-6">
            
            <Link to={'/react-food-delivery-simulator/'} className='text-sm w-fit text-slate-500 flex border-slate-500 border-b border-opacity-0 hover:border-opacity-100 transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="4 -2 26 26" fill="none" stroke='#64748b'  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> Back to Home page</Link>
            {cart.length == 0 ? (
                <div className='text-xl mt-5 font-medium tracking-wide mb-4'>Cart is empty</div>
                )
                :
                (
                    <>
                        <div className='text-xl mt-5 flex font-medium mb-4 justify-between'> 
                            <div className="flex">{username}, Your Cart</div>
                            <div className="flex">{total_items}/20 items</div>
                        </div>
                        <ul className="divide-y border-b border-slate-400 border-opacity-50 divide-slate-400  divide-opacity-50">
                            {cart.map((value,index)=>(
                                <CartItem value={value} key={index}/>
                            ))}
                                
                        </ul>
                        
                        {/* <div className="flex px-4 py-2 font-semibold justify-end">${total_pay}</div> */}
                        
                    </>
                
                )
            }
            {
                cart.length != 0 ? (
                    <div className="flex gap-2 mt-6">
                        <Button value={`Order For $${total_pay}`} className=' px-4 py-3 ' onClick={()=>navigator('/react-food-delivery-simulator/order/new')}/>
                        <Button value="Clear" className=' bg-slate-400 hover:bg-slate-100 px-4 py-3 ' onClick={()=>{openModal(true)}}/>
                        <Modal open={modal} >
                            <div className="text-center font-black text-lg ">
                                Clear the cart?
                            </div>
                            <p className=''>Are you sure you want to clear your cart?</p>
                            <div className='flex  gap-4'>
                                <Button value="Clear" onClick={()=>dispatch(clearCart())} className=' shadow-md dark:bg-white  capitalize px-3 py-2 hover:opacity-70 ' />
                                <Button value="Cancel" onClick={()=>openModal(false)} className=' shadow-md hover:opacity-70 dark:bg-white  capitalize px-3 py-2 ' />
                            </div>
                        </Modal>
                    </div>
                ):''
            }
            
        </div>   
        </>
    )
}

export default Cart