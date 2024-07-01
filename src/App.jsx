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
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'order/new',
                element: <OrderConf />
            },
            {
                path: 'order/:orderNo',
                element: <Order />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'user/:username',
                element: <UserInfo />,
            },
        ],
    }
]);

function App(){
    return <RouterProvider router={router} />;
}


export default App;
