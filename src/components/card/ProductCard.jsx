import React from 'react'
import { ShoppingBasket } from 'lucide-react';

const ProductCard = ({ item }) => {
    return (
        <div className="border-b-0 rounded-md shadow-md p-2 w-50 ">
            <div className='p-1 '>
                {item.images && item.images.length > 0 ? (
                    <img
                        src={item.images[0].url}
                        className="rounded-md w-full h-32 object-cover 
                        hover:scale-110 hover:duration-200"
                    />
                ) : (
                    <div
                        className="w-full h-24 bg-gray-200 rounded-md
                    text-center flex items-center justify-center shadow
                    "
                    >
                        No Image
                    </div>
                )}
            </div>

            <div className="py-2">
                <p className="text-xl truncate">{item.title}</p>
                <p className="text-sm text-gray-500 truncate">
                    {item.description}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">{item.price+' ฿'}
                </span>
                <button className="bg-blue-500 rounded-md
                p-2 hover:bg-blue-700 shadow-md 
                ">
                    <ShoppingBasket />
                </button>
            </div>
        </div>
    )
}

export default ProductCard
