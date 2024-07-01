import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser } from './User'
import Input from '../component/Input'
import Button from '../component/Button'

const CreateUser = () => {
    
    const [user,setUser] = useState('')
    const navigator = useNavigate()
    const dispatcher = useDispatch()
    const userInfo = useSelector(state=>state.user)
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (user == '') return;
        dispatcher(updateUser({...userInfo,username:user}))
        
        navigator('menu')
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className='flex w-auto h-full py-4 items-center flex-col gap-5'>
                    <div className="font-semibold text-center  text-xl">Start by telling us your name</div>
                    <Input className='text-black w-44 sm:w-64' autoFocus={true} onChange={(e) => {
                        setUser(e.target.value);
                    }} placeholder='Your Name'/>
                    {user !== '' && (    
                        <Button type='submit' className=' w-max bg-slate-300 transition px-6 active:outline active:outline-slate-300 py-4 font-medium bg-opacity-90 text-black hover:bg-opacity-100' value='START ORDERING'/>)
                    }
                </div>
            </form>
        
        </>
			

    )
}

export default CreateUser