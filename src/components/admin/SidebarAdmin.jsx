import React from 'react';
import { NavLink } from 'react-router-dom';
import { TableOfContents, Package2, LogOut } from 'lucide-react';
import useEcomStore from '../../store/ecomStore';
import { useNavigate } from 'react-router-dom';

const SidebarAdmin = () => {
  const logout = useEcomStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <div className="bg-pink-200 w-64 text-gray-800 flex flex-col h-screen">
      <div className="h-24 bg-pink-500 flex items-center justify-center text-2xl font-bold text-pink-200 shadow-md">
        Admin
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
          <TableOfContents />
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
          <Package2 />
          Product
        </NavLink>
      </nav>

      <div>
        <NavLink
          className='text-gray-600 px-4 py-2 hover:bg-pink-200 hover:text-pink-900 rounded-md flex items-center gap-x-2'
          onClick={handleLogout}
        >
          <LogOut className="mr-2" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;
