import React, { useState } from 'react'
import CreateUser from './user/CreateUser';
import Button from './component/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from './menu/Menu';
const Home = () => {
    const user = useSelector((state)=>state.user.username)
    const navigator = useNavigate()

    return (
        <>
            <div className='flex justify-center max-h-full p-4 items-center flex-col gap-5'>
                <div className="font-semibold text-2xl">Order from</div>
                <div className="font-semibold text-3xl text-slate-500">La Pizzeria</div>
                {user === "" ?(
                    <CreateUser/>
                )
                :(
                    <Button value="Continue Ordering" className='  shadow-slate-400 px-5 py-4' onClick={()=>navigator('menu')} />
                )
                }
            
            </div> 
        </>
    )
}

export default Home;