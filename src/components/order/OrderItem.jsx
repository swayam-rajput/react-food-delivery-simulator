import React from 'react'

const OrderItem = ({value}) => {
    return (
        <li className='py-3  '>
            <div className='flex justify-between '>
                <div>
                {value.quant} x {value.name}
                </div>
                <div className='font-semibold'>
                    ${value.total_price}
                </div>
            </div>
            <p className='opacity-50 font-normal text-sm text-ellipsis overflow-hidden mr-14'>{value.details}</p>
        </li>
    )
}

export default OrderItem