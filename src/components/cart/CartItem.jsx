import React from 'react'
import Button from '../component/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getItemQuantFromId,increaseQuant,decreaseQuant, getTotalItems, getItemQuantInStore } from './cartSlice'

const CartItem = ({value},index) => {
    const inCart = useSelector(getItemQuantFromId(value.item_id))
    const dispatch = useDispatch()
    const totalItems = useSelector(getTotalItems)
    const store_item_quant = useSelector(getItemQuantInStore)

    return (
        <li className="flex py-2 justify-between" key={index}>
            <div className=" py-2" >{value.quant} x {value.name}</div>
            <div className="flex items-center gap-3">
                <div className="px-4 font-semibold tracking-wide py-2">${value.total_price}</div>
                <Button value="+" onClick={()=>dispatch(increaseQuant(value.item_id))} className='rounded-full px-3 py-1.5 sm:px-3 sm:py-1.5 disabled:opacity-15 disabled:cursor-not-allowed' disabled={value.quant >= store_item_quant || totalItems >= 20 } />
                <div className='flex text-sm items-center'>{inCart}</div>
                <Button value="-" onClick={()=>dispatch(decreaseQuant(value.item_id))} className='rounded-full px-3 py-1.5 sm:px-3 sm:py-1.5 '/>
            </div>
        </li>
    )
}

export default CartItem