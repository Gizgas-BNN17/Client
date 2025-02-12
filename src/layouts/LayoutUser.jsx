import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutUser = () => {
    return (
        <div>
            <h1>Nav</h1>
            <h1>Header</h1>
            <hr />
            <Outlet />
        </div>
    )
}

export default LayoutUser
