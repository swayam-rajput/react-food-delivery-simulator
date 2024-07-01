import React from 'react'
import Navbar from './Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar/>
            <div className='h-screen flex justify-center items-center'>
                <div className='text-center flex flex-col gap-10'>
                    <p className='font-medium sm:text-6xl text-4xl '>404</p>
                    <p className='font-medium sm:text-6xl text-4xl '>[Not Found]</p>
                </div>
            </div>
        
        </>
    )
}

export default NotFound