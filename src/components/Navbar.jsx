import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import user, { updateUser } from './user/User'
import { useNavigate } from 'react-router-dom'
import Search from './service/Search'
import { clearCart, clearOrders } from './cart/cartSlice'

const Navbar = () => {
	let dispatch= useDispatch()
	const [isDark,setDarkMode] = useState(true)
	const navigator = useNavigate()
	const theuser = useSelector((state)=>state.user.username)
	const cart = useSelector((state)=> state.cart.cart)
	const [menuShown,toggleMenu] = useState(false)

	const toggleMode = ()=>{
		document.querySelector('html').style.colorScheme =  isDark ? 'light':'dark'
		document.querySelector('html').style.backgroundColor =  isDark ? '#f5f5f4':'#242424' // #0f172a
		document.querySelector('html').style.color =  isDark ? 'black' : 'white'
		document.querySelector('html').style.transition = 'all .4s'
		setDarkMode(!isDark);
	}

	return (
		<>
			
			<header className="flex flex-row z-10 items-center absolute w-full px-3 py-3 bg-inherit justify-between">
				
				
				<Link to='/' className='uppercase gap-2 sm:ml-2 flex items-center font-medium tracking-wide'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-65 hover:opacity-100 active:scale-95 scale-100 transition-all rotate-90"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>
					
					<div className='sm:flex text-sm inline-flex flex-wrap' >La Pizzeria</div>				
				</Link>
				{
					theuser !== '' && 
					<Search/>
				}
				{/* refresh icon */}
				{/* <div className="inline-flex">
				</div> */}
				
				<div className="flex sm:gap-8 gap-3 mx-1.5">
					{theuser !== '' && (
					
							
							<div className='flex sm:gap-8 gap-4' >
								<div className='flex  cursor-pointer transition-opacity active:opacity-20 ' onClick={()=>navigator('cart')}>
									<svg  className='opacity-65 hover:opacity-100 active:scale-95 scale-100 ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke='currentColor' strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
									<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
									</svg>
									{/* <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>  */}
									{
										cart.length != 0 && (<div className="absolute opacity-100 translate-x-3 -translate-y-1 cursor-pointer  bg-red-600 text-white rounded-full h-4 w-4 size-0 text-xs flex items-center justify-center ">{cart.length}</div>)
									}

								</div>
								<div className="relative">
									<div onMouseEnter={()=>{toggleMenu(true)}}  >
									<div >
										<h3 onClick={()=>toggleMenu(!menuShown)} className='text-1xl  border-b-2 sticky border-current  transition-opacity uppercase cursor-pointer opacity-80 hover:opacity-100 sm:block'>{theuser}</h3>
										
									</div>
									<div className={`${menuShown ? 'block':'hidden'}  transition-all   px-3 py-3 mb-1 bg-white text-black drop-shadow-lg shadow-md  text-wrap -right-8 rounded	 mt-1 text-sm absolute `}
										onMouseLeave={()=>toggleMenu(false)}
									onClick={()=>{setTimeout(()=>{toggleMenu(false)},200)}}>
										<div  onClick={()=>navigator(`/user/${theuser}`)} className='hover:bg-slate-200 active:bg-slate-200 opacity-80 hover:opacity-100 rounded px-2 py-1 transition-all cursor-pointer ' >Account</div>
										
										<div className='hover:bg-slate-200 active:bg-slate-200 opacity-80 hover:opacity-100 rounded px-2 py-1 transition-all cursor-pointer group ' onClick={()=>navigator('orders')} >Orders</div>
										<div onClick={()=>{
											dispatch(updateUser({username:'',phno:'',address:''}))
											dispatch(clearCart())
											dispatch(clearOrders())
											navigator('')
										}} className='hover:bg-slate-200 active:bg-slate-200 opacity-80 hover:opacity-100 rounded px-2 py-1 transition-all cursor-pointer ' >Log Out</div>
									</div>
									</div>
								</div>							
							</div>
					)}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ?'white':'black'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className='flex  opacity-65 cursor-pointer transition-opacity active:opacity-20 hover:opacity-100 ' onClick={toggleMode}>
						{isDark?(
							<>
							<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
							
							</>
						):(
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
						)}
					</svg> 
				</div>
				
			</header>
		</>
	)
}

export default Navbar;