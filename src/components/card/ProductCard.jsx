import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import useEcomStore from '../../store/ecomStore';
import { motion } from 'motion/react';

const ProductCard = ({ item }) => {
    const actionAddtoCart = useEcomStore((state) => state.actionAddtoCart);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.7,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
            className="bg-white rounded-md shadow-md p-2 w-50"
        >
            <div className="p-1">
                {item.images && item.images.length > 0 ? (
                    <img
                        src={item.images[0].url}
                        alt={item.title}
                        className="rounded-md w-full h-32 object-cover hover:scale-110 hover:duration-200"
                    />
                ) : (
                    <div className="w-full h-24 bg-gray-200 rounded-md text-center flex items-center justify-center shadow">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold truncate text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 truncate">{item.description}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-pink-500">{item.price} ฿</span>
                <button
                    onClick={() => actionAddtoCart(item)}
                    className="flex items-center gap-2 bg-pink-400 text-white rounded-md p-2 hover:bg-pink-600 transition-all shadow-md"
                >
                    <ShoppingBasket size={18} />
                    <span className="text-sm font-medium">เพิ่มในตะกร้า</span>
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
