import React from 'react';
import { Trash2, Minus, Plus } from "lucide-react";
import useEcomStore from '../../store/ecomStore';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ใช้ motion เพื่อเพิ่มอนิเมชั่น

const CartCard = () => {
  const carts = useEcomStore((state) => state.carts);
  const getTotalPrice = useEcomStore((state) => state.getTotalPrice);
  const actionUpdateQuantity = useEcomStore((state) => state.actionUpdateQuantity);
  const actionRemoveProduct = useEcomStore((state) => state.actionRemoveProduct);

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}  // สำหรับการหายไป
    transition={{
      duration: 0.5,
      scale: { type: "spring", stiffness: 500, damping: 25 },
    }}
    className="bg-white p-4 rounded-md shadow-lg w-80 max-h-[80vh] overflow-y-auto"
  >
    <h1 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h1>

    <hr className="mb-4" />

    {/* Cart items */}
    {carts.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", stiffness: 400, damping: 25 },
        }}
        className="bg-white p-2 rounded-md shadow-md mb-3"
      >
        <div className="flex justify-between mb-2">
          {/* Left */}
          <div className="flex gap-2 items-center">
            {item.images && item.images.length > 0 ? (
              <img className="w-30 h-16 rounded-md" src={item.images[0].url} />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-md flex text-center items-center">
                No Image
              </div>
            )}

            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>

          {/* Remove Button */}
          <div
            onClick={() => actionRemoveProduct(item.id)}
            className="text-red-600 p-2 cursor-pointer"
          >
            <Trash2 className="w-6 h-6" />
          </div>
        </div>

        <div className="flex justify-between">
          {/* Quantity */}
          <div className="border rounded-sm px-2 py-1 flex items-center">
            <button
              onClick={() => actionUpdateQuantity(item.id, item.count - 1)}
              className="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-500"
            >
              <Minus size={15} />
            </button>

            <span className="px-4">{item.count}</span>

            <button
              onClick={() => actionUpdateQuantity(item.id, item.count + 1)}
              className="px-2 py-1 bg-gray-200 rounded-sm hover:bg-gray-500"
            >
              <Plus size={15} />
            </button>
          </div>

          <div className="text-lg font-bold text-pink-500">฿ {item.price * item.count}</div>
        </div>
      </motion.div>
    ))}

    {/* Total */}
    <div className="flex justify-between px-2 mt-4">
      <span>รวม</span>
      <span className='text-lg font-bold'>฿ {getTotalPrice()}</span>
    </div>

    <Link to="/card">
      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white w-full py-2 rounded-md shadow-md">
        ดำเนินการชำระเงิน
      </button>
    </Link>
  </motion.div>
  );
};

export default CartCard;
