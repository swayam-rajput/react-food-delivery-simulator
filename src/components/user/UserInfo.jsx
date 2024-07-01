import React, { useEffect, useState } from 'react'
import Input from '../component/Input'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../component/Button'
import Modal from '../component/Modal'
import { updateUser } from './User'
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from '../NotFound'
import Loader from '../component/Loader'
import Toast from '../component/Toast'
const UserInfo = () => {
    const userinfo = useSelector(state=>state.user)
    const [iseditable,setEditable ] = useState(false)
    const [modal,showModal ] = useState(false)
    const [obj,setInfo] = useState({username:userinfo.username,phno:userinfo.phno,address:userinfo.address})
    const dispatch = useDispatch()
    let {username} = useParams()
    
    useEffect(()=>{
        if (username !== userinfo.username){
            return <NotFound/>
        }
    });

    const [isLoading,showLoading] = useState(false)
    const saveUserInfo= ()=>{
        
        showLoading(true)
        
        setTimeout(()=>{
            showLoading(false)
            showToast(true)
        },1400)
        
        showToast(false)
        showModal(!modal);
        dispatch(updateUser(obj))
        setEditable(!iseditable);
    }
    
    const [isToast,showToast] = useState(false)



    return (
        
        <div className='flex flex-col p-4 gap-5 mx-16 mt-6'>
            {isToast ? <Toast message='Updated Account details successfully' isVisible={true}/>:''}
            {isLoading ? <Loader children={'Updating details...'}/> : ''}
            <div className='text-center flex justify-center'>{userinfo.username ? <p className='flex '> {userinfo.username+`'s Details`}</p> : 'not found'} </div>
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center ">
                <label htmlFor="" className="sm:ml-0 ml-4 w-28">Username</label>
                <Input className='rounded-md grow h-12 disabled:backdrop-opacity-65 text-black tracking-wider text-base' disabled={true} value={userinfo.username} />
            </div>
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center ">
                <label htmlFor="" className="sm:ml-0 ml-4 w-28">Phone</label>
                <Input className='rounded-md grow h-12 disabled:backdrop-opacity-60 text-black tracking-wider text-base' disabled={!iseditable} onChange={(e)=>setInfo({...obj,phno:e.target.value})} value={userinfo.phno} />
            </div>
            <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center ">
                <label htmlFor="" className="sm:ml-0 ml-4 w-28">Address</label>
                <textarea className='rounded-md dark:bg-slate-200 bg-slate-300 outline-none focus:outline focus:outline-slate-300 px-4 py-2 text-sm transition-all focus:outline-none disabled:bg-opacity-50 disabled:cursor-not-allowed grow sm:h-20 h-24 disabled:backdrop-opacity-65 text-black tracking-wider ' disabled={!iseditable} onChange={(e)=>{setInfo({...obj,address:e.target.value})}} defaultValue={userinfo.address}/>
            </div>
            <div className='flex justify-center -ml-4 gap-2'>
                <Button value={iseditable ? 'Save' :'Edit'} onClick={()=>{iseditable?showModal(!modal):setEditable(!iseditable)}} className=' font-medium px-5 py-3 '/>
                <Button value='Cancel' onClick={()=>{setEditable(!iseditable)}} className={`${!iseditable && 'hidden'} font-medium px-5 py-3 `}/>
            </div>

            <Modal open={modal}>
                <div className="text-center font-black text-lg ">
                    Edit info?
                </div>
                <p >Are you sure you want to save this info?</p>
                <div className='flex gap-4'>
                    <Button value="Save" onClick={()=>saveUserInfo()}  className=' shadow-md dark:bg-white capitalize px-3 py-2 hover:opacity-70 ' />
                    <Button value="Cancel" onClick={()=>showModal(false)} className=' shadow-md hover:opacity-70 dark:bg-white  capitalize px-3 py-2 ' />
                </div>
            </Modal>
        </div>
    )
}

export default UserInfo