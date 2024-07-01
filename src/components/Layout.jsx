import React from 'react'
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './component/Loader';
import Toast from './component/Toast';
const Layout = () => {
    const nav = useNavigation()
    
    const isLoading = nav.state === 'loading';
    return (
        <>
            {isLoading && <Loader/>}
            
            <Navbar/>
            
            <div id='parent-div' className="mx-auto  pt-12 max-w-3xl justify-center ">
                <Outlet/>
            

            </div>

        </>
    )
}

export default Layout;