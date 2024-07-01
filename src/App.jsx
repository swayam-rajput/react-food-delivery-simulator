import { useEffect, useState } from "react";
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CreateUser from "./components/user/CreateUser";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import OrderConf from "./components/order/OrderConf";
import UserInfo from "./components/user/UserInfo";
import NotFound from "./components/NotFound";
import Order from "./components/order/Order";
import Orders from "./components/order/Orders";
const base = '/react-food-delivery-simulator/'
const router = createBrowserRouter([
    {
        path:'/react-food-delivery-simulator/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: base+'menu',
                element: <Menu />
            },
            {
                path: base+'cart',
                element: <Cart />
            },
            {
                path: base+'order/new',
                element: <OrderConf />
            },
            {
                path: base+'order/:orderNo',
                element: <Order />
            },
            {
                path: base+'orders',
                element: <Orders />
            },
            {
                path: base+'user/:username',
                element: <UserInfo />,
            },
        ],
    }
]);

function App(){
    return <RouterProvider router={router} />;
}


export default App;
