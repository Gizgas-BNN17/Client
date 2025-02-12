import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard,CakeSlice  } from 'lucide-react';

const SidebarAdmin = () => {
    // return (
    //     <div className='bg-gray-800 w-64 text-gray-100 flex flex-col h-screen'>
    //         <div className='h-24 bg-gray-900 flex items-center justify-center text-2xl font-bold'>
    //             Admin Panel
    //         </div>
    //         <nav className='flex-1 px-2 py-4 space-y-2'>
    //             {/* <NavLink 
    //             to={'/admin'}
    //             end
    //             className={
    //                 ({ isActive }) =>
    //                     isActive ? 'bg-gray-900 rounded-md text-white px-4 py-2 flex items-center'
    //                         : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center gap-x-2'
    //             }>
    //                 <LayoutDashboard />
    //                 Dashboard
    //             </NavLink>

    //             <NavLink 
    //             to={'manage'}
    //             className={
    //                 ({ isActive }) =>
    //                     isActive ? 'bg-gray-900 rounded-md text-white px-4 py-2 flex items-center'
    //                         : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center gap-x-2'
    //             }>
    //                 <LayoutDashboard />
    //                 Manage
    //             </NavLink> */}
    //             <NavLink 
    //             to={'category'}
    //             className={
    //                 ({ isActive }) =>
    //                     isActive ? 'bg-gray-900 rounded-md text-white px-4 py-2 flex items-center'
    //                         : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center gap-x-2'
    //             }>
    //                 <LayoutDashboard />
    //                 Category
    //             </NavLink>
    //             <NavLink 
    //             to={'product'}
    //             className={
    //                 ({ isActive }) =>
    //                     isActive ? 'bg-gray-900 rounded-md text-white px-4 py-2 flex items-center'
    //                         : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center gap-x-2'
    //             }>
    //                 <CakeSlice />
    //                 Product
    //             </NavLink>
              
    //         </nav>
    //         <div>
    //         <NavLink 
    //             to={'product'}
    //             className={
    //                 ({ isActive }) =>
    //                     isActive ? 'bg-gray-900 rounded-md text-white px-4 py-2 flex items-center'
    //                         : 'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center gap-x-2'
    //             }>
    //                 <LayoutDashboard />
    //                 Login
    //             </NavLink>
    //         </div>
    //     </div>
    // )
    return (
        <div className="bg-pink-200 w-64 text-gray-800 flex flex-col h-screen">
        <div className="h-24 bg-pink-100 flex items-center justify-center text-2xl font-bold text-pink-800 shadow-md">
  Sweet Admin
</div>

          <nav className="flex-1 px-2 py-4 space-y-2">
            <NavLink
              to={'category'}
              className={({ isActive }) =>
                isActive
                  ? 'bg-pink-400 rounded-md text-white px-4 py-2 flex items-center shadow-lg'
                  : 'text-gray-600 px-4 py-2 hover:bg-pink-200 hover:text-pink-900 rounded-md flex items-center gap-x-2'
              }
            >
              <LayoutDashboard />
              Category
            </NavLink>
      
            <NavLink
              to={'product'}
              className={({ isActive }) =>
                isActive
                  ? 'bg-pink-400 rounded-md text-white px-4 py-2 flex items-center shadow-lg'
                  : 'text-gray-600 px-4 py-2 hover:bg-pink-200 hover:text-pink-900 rounded-md flex items-center gap-x-2'
              }
            >
              <CakeSlice />
              Product
            </NavLink>
          </nav>
          <div>
            <NavLink
              to={'login'}
              className={({ isActive }) =>
                isActive
                  ? 'bg-pink-400 rounded-md text-white px-4 py-2 flex items-center shadow-lg'
                  : 'text-gray-600 px-4 py-2 hover:bg-pink-200 hover:text-pink-900 rounded-md flex items-center gap-x-2'
              }
            >
              <LayoutDashboard />
              Login
            </NavLink>
          </div>
        </div>
      );
      
}

export default SidebarAdmin
