import React from "react";
import { Link } from "react-router-dom";
import useEcomStore from "../store/ecomStore";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react"
import { UserRoundPlus ,LogIn } from 'lucide-react';

const MainNav = () => {
  const carts = useEcomStore((state) => state.carts);


  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-6">  
            <Link to={"/"} className="text-2xl font-bold">
              DESSERT DAIFUKUS
            </Link>
            <Link to="/card" className="relative">
              <ShoppingCart size={28} className="text-gray-800" />
              {carts.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {carts.length}
                </span>
              )}
            </Link>

          </div>




          <div className="flex items-center gap-4">
            <Link
              className={
              "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200 "
              }
              to={"/register"}
            >
                  <UserRoundPlus />

              Register
            </Link>

            <Link
              className={"bg-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200"
              }
              to={"/login"}
            >
                  <LogIn />
                  Login
            </Link>
          </div>









        </div>
      </div>
    </nav>
  );
};

export default MainNav;
