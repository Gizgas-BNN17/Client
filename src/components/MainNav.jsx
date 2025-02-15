import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecomStore";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react"
import { UserRoundPlus, LogIn,ChevronDown } from 'lucide-react';

const MainNav = () => {
  const carts = useEcomStore((state) => state.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-400 shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-5 ">
            <Link to={"/"} className="text-2xl font-bold">
              DESSERT DAIFUKUS
            </Link>
            
            <NavLink to={"/"} 
            className={
              ({ isActive }) =>
                isActive
                  ? "bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
            }
          
            >
              Home
            </NavLink>
            <NavLink to={"/shop"} 
            className={
              ({ isActive }) =>
                isActive
                  ? "bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
            }
          
            >
              Shop
            </NavLink>
            <NavLink
              to="/card"
              className={
                
                ({ isActive }) =>
                isActive
              ? "bg-pink-300 px-3 py-2 rounded-full text-sm font-medium relative"
                  : "hover:bg-slate-200 px-3 py-2 rounded-full text-sm font-medium relative"
              }
            >
              <ShoppingCart size={28} className="text-r" />
              {carts.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {carts.length}
                </span>
              )}
            </NavLink>


          </div>




          <div className="flex items-center gap-4">
          {
            user 
            ?  <div className="flex items-center gap-4">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:bg-pink-300
              px-2 py-3 rounded-md"
            >
              <img
                className="w-10 h-10"
                src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-teacher-avatars-flat-icons-pack-people-456321.png?f=webp&w=512"
              />

              <ChevronDown />
            </button>

            {isOpen && (
              <div className="absolute top-16 bg-white shadow-md z-50">
                {/* <Link
                     to={"/register"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Register
                </Link> */}
                <button 
                  onClick={()=>logout()}
                  className="block px-4 py-2 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
          </div> 
            :  <div className="flex items-center gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/register"}
            >
              Register
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium "
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </div>
          }
          </div>









        </div>
      </div>
    </nav>
  );
};

export default MainNav;
