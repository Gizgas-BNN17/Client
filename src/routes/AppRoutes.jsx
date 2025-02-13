//rafce
import React from 'react'

// import ...
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/Home'
import Shop from '../page/Shop'
import Card from '../page/Card'
import History from '../page/History'
import Checkout from '../page/Checkout'
import Login from '../page/auth/Login'
import Register from '../page/auth/Register'
import Layout from '../layouts/Layout'
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutUser from '../layouts/LayoutUser'
import Category from '../page/admin/Category'
import Product from '../page/admin/Product'
import Manage from '../page/admin/Manage'
import HomeUser from '../page/user/HomeUser'
import ProtectUser from '../routes/ProtectUser'
import ProtectAdmin from '../routes/ProtectAdmin'
import EditProduct from '../page/admin/EditProduct'
// creact const
const router = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'shop', element: <Shop /> },
            { path: 'card', element: <Card /> },
            { path: 'history', element: <History /> },
            { path: 'checkout', element: <Checkout /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ]
    },
    {
        path: '/admin',
        element: <ProtectAdmin element={<LayoutAdmin />} />,
        children: [
            { index: true, element: <Home /> },
            { path: 'category', element: <Category /> },
            { path: 'product', element: <Product /> },
            { path: 'product/:id', element: <EditProduct /> },
        ]
    },
    {
        path: '/user',
        element: <ProtectUser element={<LayoutUser />} />,
        children: [
            { index: true, element: <HomeUser /> },
        ]
    }

])

const AppRoutes = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default AppRoutes
