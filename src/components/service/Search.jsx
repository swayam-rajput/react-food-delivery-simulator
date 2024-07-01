import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../component/Input';

const Search = () => {
    const navigator = useNavigate();
    const [query,setQuery] = useState('');
    return (
        <form onSubmit={(e)=>{e.preventDefault();navigator(`order/${query}`)}}>
            <div className='inline-flex ml-5'>
                <Input placeholder='Order #' onChange={(e)=>setQuery(e.target.value)} className='h-8  text-black w-24 placeholder-shown:text-xs tracking-tight sm:px-4 pl-2 py-2 sm:w-52 ' />
                <button className='flex relative top-1 right-8' type='submit' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='opacity-45  transition-opacity active:opacity-20 hover:opacity-100' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A2A29D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>

        </form>
    )
}

export default Search