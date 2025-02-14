import React from 'react'
import { Trash2, Minus, Plus, ListCheck } from "lucide-react";
import useEcomStore from '../../store/ecomStore';
import { Link } from "react-router-dom";

const ListCart = () => {
  const carts = useEcomStore((state) => state.carts)
  const getTotalPrice = useEcomStore((state) => state.getTotalPrice);

  const actionUpdateQuantity = useEcomStore(
    (state) => state.actionUpdateQuantity
  )
  const actionRemoveProduct = useEcomStore(
    (state) => state.actionRemoveProduct
  )
  return (
    <div className="bg-gray-100 rounded-sm p-4">
      {/* Header */}
      <div className="flex gap-4 mb-4">
        <ListCheck size={36} />
        <p className="text-2xl font-bold">รายการสินค้า {carts.length} รายการ</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          {/* List */}
          {
            carts.map((item, index) =>
            (
              <div key={index} className="bg-white p-6 rounded-md shadow-md mb-2">
                {/* Row 1 */}
                <div className="flex justify-between mb-2">
                  {/* Left */}
                  <div className="flex gap-2 items-center">
                    {item.images && item.images.length > 0 ? (
                      <img
                        className="w-40 h-30 rounded-md"
                        src={item.images[0].url}
                      />
                    ) : (
                      <div
                        className="w-16 h-16 bg-gray-200 
                            rounded-md flex text-center items-center"
                      >
                        No Image
                      </div>
                    )}

                    <div>
                      <p className="font-bold">{item.title}</p>

                      <p className="font-normal text-red-500">
                        จำนวน  {item.count} ชิ้น</p>

                    </div>
                  </div>
                  <div>
                  <div className="font-bold text-blue-500 flex text-center">
                  ฿ {item.price * item.count}
                  </div>
                </div>
                </div>




              </div>

            )
            )
          }

        </div>

        {/* ---------------------------------------------------- */}

        <div className="bg-white p-4 rounded-md shadow-md space-y-4">
          <p className="text-2xl font-bold">ยอดรวม</p>
          <div className="flex justify-between">
          
            <span>รวมสุทธิ</span>
            <span className="text-2xl font-bold">
              {'฿' + getTotalPrice()}
            </span>
          </div>
<br /><br /><br />
          <div className="flex flex-col gap-2">
            <Link>
              <button
                // disabled={cart.length < 1}
                // onClick={handleSaveCart}
                className="bg-red-500 w-full
                    rounded-md text-white py-2 shadow-md hover:bg-red-700
                    "
              >
                สั่งซื้อ
              </button>
            </Link>
            <Link to={"/shop"}>
              <button
                className="bg-gray-500 w-full 
                    rounded-md text-white py-2 shadow-md hover:bg-gray-700
                    "
              >
                แก้ไขรายการ
              </button>
            </Link>
          </div>
        </div>

      </div>


    </div>

  )
}

export default ListCart
