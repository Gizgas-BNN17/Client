import React from 'react'
import { ShoppingBasket } from 'lucide-react';

const ProductCard = () => {
    return (
        <div className="border-b-0 rounded-md shadow-md p-2 w-50">
            <div>
                {/* <div className="rounded-md w-full h-24 object-cover 
                        hover:scale-110 hover:duration-200">
                    Image
                </div> */}
                <div
                    className="w-full h-24 bg-gray-200 rounded-md
                    text-center flex items-center justify-center shadow
                    "
                >
                    No Image
                </div>

            </div>
            <div className="py-2">
                <p className="text-xl truncate">test</p>
                <p className="text-sm text-gray-500 truncate">test</p>
            </div>
            <div className="flex justify-between items-center">
            <span className="text-sm font-bold">135
                </span>
              <button   className="bg-blue-500 rounded-md
                p-2 hover:bg-blue-700 shadow-md 
                ">
              <ShoppingBasket/>
              </button>
            </div>
        </div>
    )
}

export default ProductCard
