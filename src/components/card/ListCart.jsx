import React from 'react';
import { ListCheck } from 'lucide-react';
import useEcomStore from '../../store/ecomStore';
import { Link } from 'react-router-dom';
import { createUserCart } from '../../api/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ListCart = () => {
  const card = useEcomStore((state) => state.carts);
  const user = useEcomStore((s) => s.user);
  const token = useEcomStore((s) => s.token);
  const getTotalPrice = useEcomStore((state) => state.getTotalPrice);
  const navigate = useNavigate();

  const handleSaveCart = async () => {
    await createUserCart(token, { card })
      .then((res) => {
        toast.success('บันทึกใส่ตะกร้าเรียบร้อย', { position: 'top-center' });
        navigate('/checkout');
      })
      .catch((err) => {
        toast.warning(err.response.data.message);
      });
  };

  return (
    <div
   
      className="bg-white rounded-lg p-6 shadow-lg space-y-6 w-full mx-auto"


    >
      {/* Header */}
      <div className="flex gap-4 mb-4">
        <ListCheck size={36} />
        <p className="text-2xl font-bold">รายการสินค้า {card.length} รายการ</p>
      </div>

  <div className="flex gap-8">
  {/* List */}
  <div className="w-3/5"> {/* เพิ่มความกว้างตรงนี้ */}
    {card.map((item, index) => (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        key={index}
        className="bg-white p-6 rounded-md shadow-md mb-2"
      >
        <div className="flex justify-between mb-2">
          <div className="flex gap-2 items-center">
            {item.images && item.images.length > 0 ? (
              <img className="w-40 h-30 rounded-md" src={item.images[0].url} />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                No Image
              </div>
            )}
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="font-normal text-red-500">จำนวน {item.count} ชิ้น</p>
            </div>
          </div>
          <div className="font-bold text-blue-500">
            ฿ {item.price * item.count}
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Summary */}
  <div className="w-2/5"> {/* เพิ่มความกว้างตรงนี้ */}
    <div className="bg-white p-4 rounded-md shadow-md space-y-4">
      <p className="text-2xl font-bold">ยอดรวม</p>
      <div className="flex justify-between">
        <span>รวมสุทธิ</span>
        <span className="text-2xl font-bold">{'฿' + getTotalPrice()}</span>
      </div>

      <div className="flex flex-col gap-2">
        {user ? (
          <Link>
            <button
              disabled={card.length < 1}
              onClick={handleSaveCart}
              className="bg-red-500 w-full rounded-md text-white py-2 shadow-md hover:bg-red-700"
            >
              สั่งซื้อ
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 w-full rounded-md text-white py-2 shadow-md hover:bg-blue-700">
              Login
            </button>
          </Link>
        )}

        <Link to="/shop">
          <button className="bg-gray-500 w-full rounded-md text-white py-2 shadow-md hover:bg-gray-700">
            แก้ไขรายการ
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default ListCart;
