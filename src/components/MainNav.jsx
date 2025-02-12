import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <nav className='bg-pink-300'>
      <div className='mx-auto px-2'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center gap-4'>
            <Link to={'/'} className='text-2xl font-bold'>DESSERT DAIFUKUS</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/shop'}>Product</Link>
            <Link to={'/card'}>Cart</Link>
          </div>

          <div className='flex items-center gap-4'>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
