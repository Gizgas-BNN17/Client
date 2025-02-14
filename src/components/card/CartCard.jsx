import React from 'react'
import { Trash2 } from 'lucide-react';

const CartCard = () => {
  return (
    <div className="border-b-0 rounded-md shadow-md p-2 ">
      <h1 className="text-2xl font-bold">ตะกร้าสินค้า</h1>
      {/* Border */}
      <div className="border-b-0 rounded-md shadow-md p-2  ">
        {/* Card */}
        <div className="bg-white p-2 rounded-md shadow-md mb-2 border-b-0">
          {/* Row 1 */}
          <div className="flex justify-between mb-2">
            {/* Left */}
            <div className="flex gap-2 items-center">
              <div
                className="w-16 h-16 bg-gray-200 
                              rounded-md flex text-center items-center"
              >
                No Image
              </div>
              <div>
                <p className="font-bold">title</p>
                <p className="text-sm">description</p>
              </div>
              <div>
                <p className="font-bold">title</p>
                <p className="text-sm">description</p>
              </div>
            </div>
            {/* Right */}
            <div
              className="text-red-600 p-2"
            >
              <Trash2 className="w-6 h-6" />
            </div>
          </div>

          {/* Row 2  */}
          <div className="flex justify-between">
            {/* Left */}
            <div className="border rounded-sm px-2 py-1 flex items-center">
              <button

                className="px-2 py-1 bg-gray-200 
                              rounded-sm hover:bg-gray-500"
              >
                -
              </button>

              <span className="px-4">1</span>

              <button

                className="px-2 py-1 bg-gray-200 
                              rounded-sm hover:bg-gray-500"
              >
                +
              </button>
            </div>
            {/* Right */}
            <div className="font-bold text-blue-500">Price</div>
          </div>
        </div>
        {/* Total */}
        <div className="flex justify-between px-2">
          <span>รวม</span>
          <span>price</span>
        </div>
        {/* Button */}
        <button
          className="mt-4 bg-green-500 hover:bg-green-700
                   text-white w-full py-2 rounded-md shadow-md"
        >
          ดำเนินการชำระเงิน
        </button>
      </div>
    </div>
  )
}

export default CartCard
