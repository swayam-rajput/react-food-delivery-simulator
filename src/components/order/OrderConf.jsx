import {useState,React} from 'react'
import Loader from '../component/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../component/Input'
import Button from '../component/Button'
import { getTotalAmount,clearCart, makeOrder, decreaseETA } from '../cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import Modal from '../component/Modal'

const OrderConf = () => {
    const user = useSelector((state)=>state.user)
    const cart = useSelector((state)=>state.cart.cart)
    const pay_amount = getTotalAmount()

    const navigator = useNavigate()
    const dispatch = useDispatch()
    
    const [memo,setMemo] = useState('')
    const [isLoading,showLoading] = useState(false)
    const [modal,showModal] = useState(false)
    const createOrder = ()=>{
        const orderNo = Math.floor(Math.random() * (250 - 60) + 60);
        let eta = Math.floor(Math.random() * (50-20) + 20);
        showModal(false)
        showLoading(true)
        let order = {orderNo:orderNo}
        let total_price = 0
        let o = []
        cart.forEach((el)=>{
            o.push(el)
            total_price += el.total_price
        })
        order.eta = eta
        order.total_price = total_price
        order.ordered = o
        
        dispatch(makeOrder(order))
        
        dispatch(clearCart())
        setMemo('Paying $'+order.total_price)
        setTimeout(()=>{
            setMemo('Placing Order')
        },2500);
        setTimeout(()=>{

            showLoading(false)
            navigator(`/order/${orderNo}`)
        },3500)
        
        
        const etaInterval = setInterval(() => {
            // eta -= 1;
            if (eta <= 0) {
                clearInterval(etaInterval);
            } else {
                dispatch(decreaseETA(orderNo))
            }
        },60000);
    }
    return (
        <div className="flex flex-col gap-6 mt-6  px-6">
            
            {isLoading ? <Loader children={<div>{memo}...</div>}/> : ''}
            <div className='font-medium text-xl' >Are these your correct details?</div>

            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center ">
                <label htmlFor="" className="sm:ml-0 ml-4 w-28">Username</label>
                <Input className={`grow mr-20  h-12 text-black `} disabled={true} value={user.username} required={true}/>
            </div>                
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center ">
                <label htmlFor="" className="sm:ml-0 ml-4 w-28">Contact</label>
                <Input className={`grow mr-20 h-12 text-black ${!user.phno && ' outline-red-500'}`} disabled={true} value={user.phno} required={true} pattern={'\\d+'}/>
            </div>
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center ">
                <label htmlFor="" className="sm:ml-0 ml-4 w-28">Address</label>
                <textarea className={`rounded-md dark:bg-slate-200 bg-slate-300 outline-none focus:outline focus:outline-slate-300 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none disabled:bg-opacity-60 disabled:cursor-not-allowed grow mr-20  sm:h-20 h-24  text-black ${!user.address && 'outline-red-500'}`} disabled={true} value={user.address} required={true}/>
            </div>    
            {
                (user.username !== '' && user.phno !== '' && user.address !== '') 
                    && (
                        <>
                            <Button onClick={()=>{
                                showModal(true)
                            }} value={'Order Now For $'+pay_amount} className='mr-auto px-4 py-3'/> 
                            <Modal open={modal}>
                                <div className="text-center font-black text-lg ">
                                    Order Confirmation
                                </div>
                                <p >Are you sure you want to order by paying ${pay_amount}?</p>
                                <div className='flex gap-4'>
                                    <Button value="Order"  onClick={()=>createOrder()} className=' shadow-md dark:bg-white capitalize px-3 py-2 hover:opacity-70 ' />
                                    <Button value="Cancel" onClick={()=>showModal(false)} className=' shadow-md hover:opacity-70 dark:bg-white  capitalize px-3 py-2 ' />
                                </div>
                            </Modal>
                        </>
                    )
            }
            <Button value={'Edit'} onClick={()=>navigator(`/user/${user.username}`)} className='mr-auto px-4 py-3'/>
        </div>
        
    )
}

export default OrderConf