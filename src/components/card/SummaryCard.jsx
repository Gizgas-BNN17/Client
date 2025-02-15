import React, { useState, useEffect } from "react";
import { listUserCart, saveAddress } from "../../api/user";
import useEcomStore from "../../store/ecomStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CircleCheckBig } from 'lucide-react';

const SummaryCard = () => {
  const token = useEcomStore((state) => state.token);
  const clearCart = useEcomStore((state) => state.clearCart);
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    hdlGetUserCart(token);
  }, []);

  const hdlGetUserCart = (token) => {
    listUserCart(token)
      .then((res) => {
        setProducts(res.data.product);
        setCartTotal(res.data.cardTotal);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hdlSaveAddress = () => {
    if (!address) {
      return toast.warning("Please fill address");
    }
    saveAddress(token, address)
      .then((res) => {
        toast.success(res.data.message);
        setAddressSaved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hdlGoToPayment = () => {
    if (!addressSaved) {
      return toast.warning("กรุณากรอกที่อยู่");
    }
    toast.success("สั่งซื้อเรียบร้อย !!! ");
    clearCart();
    navigate("/shop");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-8">
        {/* Left: Address Section */}
      {
        !addressSaved ? (
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-xl space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-gray-800">ที่อยู่ในการจัดส่ง</h1>

          </div>


          <textarea
            required
            onChange={(e) => setAddress(e.target.value)}
            placeholder="กรุณากรอกที่อยู่"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={hdlSaveAddress}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
          >
            บันทึกที่อยู่
          </button>
        </div>
        ) : (
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-xl space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-gray-800">ที่อยู่ในการจัดส่ง</h1>
            <CircleCheckBig color="green" />
          </div>


          <textarea
            required
            onChange={(e) => setAddress(e.target.value)}
            placeholder="กรุณากรอกที่อยู่"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={hdlSaveAddress}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
          >
            บันทึกที่อยู่
          </button>
        </div>
        )
      }


        {/* Right: Order Summary Section */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-6">
          <h1 className="text-xl font-semibold text-gray-800">คำสั่งซื้อของคุณ</h1>
          {/* Item List */}
          {products?.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <div>
                <p className="font-semibold text-gray-800">{item.product.title}</p>
                <p className="text-sm text-gray-500">
                  จำนวน : {item.count} x {item.product.price} ฿
                </p>
              </div>
              <div>
                <p className="text-red-500 font-semibold">
                  ฿ {item.count * item.product.price}
                </p>
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-600">ค่าจัดส่ง:</p>
              <p className="text-gray-800">฿ 0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">ส่วนลด:</p>
              <p className="text-gray-800">฿ 0.00</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-lg">
            <p>ยอดรวมสุทธิ:</p>
            <p className="text-neutral-900">฿ {cartTotal}</p>
          </div>

          <div className="mt-4">
            <button
              onClick={hdlGoToPayment}
              disabled={!addressSaved}
              className="w-full bg-green-500 text-white py-2 rounded-md shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition-all"
            >
              ดำเนินการชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
