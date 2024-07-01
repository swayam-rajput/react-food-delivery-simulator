import React from 'react'
import Button from '../component/Button';
import cartSlice, { addToCart, getItemQuantFromId, increaseQuant, decreaseQuant, getItemQuantInStore, getTotalItems } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const MenuItem = ({pizza},index) => {
    const { id, name, price, details, soldOut,imgUrl,quant } = pizza;
    const dispatch = useDispatch()
    const inCart = useSelector(getItemQuantFromId(id))
    const isinCart = inCart > 0;
    const cart = useSelector((state)=>state.cart.cart)
    const store_item_quant = useSelector(getItemQuantInStore)
    const total_item = useSelector(getTotalItems)

    const addItemToCart = ()=>{
        const newItem = {
            item_id:id,
            name,
            quant:1,
            unit_price:price,
            total_price:price,
            details
        }
        dispatch(addToCart(newItem))
    };
        
    return (
        <li className={"flex group transition-opacity gap-4 py-3 "} id={id} key={index}>
        <img 
            src={imgUrl}
            alt={name}
            loading='lazy'
            className={`sm:h-24 h-20 opacity-100 rounded-lg `+(soldOut && ' grayscale -z-10 ')}
        />
        <div className="flex grow flex-col pt-0.5">
            <div className="font-medium opacity-85 group-hover:opacity-100">{name}</div>
            <div className="text-xs sm:text-sm text-stone-400 opacity-85 group-hover:opacity-100">{details}</div>

            <div className="mt-auto flex items-center justify-between">
                <div className="font-thin ">{soldOut ? 'SOLD OUT' :'$'+price}</div>
                <div className='flex items-center gap-8'>
                    {isinCart && (
                        <div className="flex gap-3">
                                <Button value="+" onClick={()=>dispatch(increaseQuant(id))} className=' flex rounded-full px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40' disabled={(inCart >= store_item_quant) || total_item >= 20} />
                                <div className='flex text-sm items-center'>{inCart}</div>
                                <Button value="-" onClick={()=>dispatch(decreaseQuant(id))} className=' flex rounded-full px-3 py-1.5 '/>
                        </div>
                        
                    )}
                    {!soldOut && !isinCart && (
                        (<Button value='Add To Cart' className=' py-2 px-4 text-xs' disabled={total_item >= 20 } onClick={addItemToCart}/>)

                    )}

                </div>
            </div>
        </div>
        </li>
    )
}

export default MenuItem;