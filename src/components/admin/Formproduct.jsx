import React from 'react'
import useEcomStore from '../../store/ecomStore';
import { useState, useEffect } from 'react'
import { createProduct } from '../../api/product';
import Uploadfile from './Uploadfile';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";

const initialState = {

    title: "ชื่อสินค้า",
    description: "รายละเอียดสิ้นค้า",
    price: 0,
    quantity: 0,
    categoryId: '',
    images: []

}
const Formproduct = () => {
    const token = useEcomStore((state) => state.token)
    const getCategory = useEcomStore((state) => (state.getCategory))
    const categories = useEcomStore((state) => state.categories)
    const getProduct = useEcomStore((state) => (state.getProduct))
    const products = useEcomStore((state) => state.products)
    const [form, setForm] = useState(initialState)
    console.log(products)
    useEffect(() => {
        getCategory(token)
        getProduct(token, 100)
    }, [])

    // console.log(categories)

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(form)
        try {
            const res = await createProduct(token, form);
            //  console.log(res);
            // setForm(initialState);
            // getProduct();
            toast.success(`เพิ่มข้อมูล ${res.data.title} สำเร็จ`);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
          

            <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-700">เพิ่มข้อมูลสินค้า</h1>
                <input
                    className="w-full border rounded-md p-2"
                    value={form.title}
                    onChange={handleOnChange}
                    placeholder="Title"
                    name="title"
                />
                <input
                    className="w-full border rounded-md p-2"
                    value={form.description}
                    onChange={handleOnChange}
                    placeholder="Description"
                    name="description"
                />
                <input
                    type="number"
                    className="w-full border rounded-md p-2"
                    value={form.price}
                    onChange={handleOnChange}
                    placeholder="price"
                    name="price"
                />
                <input
                    type="number"
                    className="w-full border rounded-md p-2"
                    value={form.quantity}
                    onChange={handleOnChange}
                    placeholder="quantity"
                    name="quantity"
                />
                <select
                    className="w-full border rounded-md p-2"
                    name="categoryId"
                    onChange={handleOnChange}
                    required
                    value={form.categoryId}
                >
                    <option value="" disabled>กรุณาเลือกประเภทสินค้า</option>
                    {categories.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))}
                </select>

                <Uploadfile form={form} setForm={setForm} />

                <button
                    className="bg-blue-500 text-white p-3 rounded-md shadow-md hover:scale-105 hover:-translate-y-1 hover:duration-200"
                >
                    เพิ่มสินค้า
                </button>

                <hr className="my-6" />

                <table className="w-full border-collapse bg-white shadow-lg rounded-md">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-3 text-left">No</th>
                            <th className="border p-3 text-left">รูปภาพ</th>
                            <th className="border p-3 text-left">ชื่อสินค้า</th>
                            <th className="border p-3 text-left">รายละเอียด</th>
                            <th className="border p-3 text-left">ราคา</th>
                            <th className="border p-3 text-left">จำนวน</th>
                            <th className="border p-3 text-left">จำนวนที่ขายได้</th>
                            <th className="border p-3 text-left">วันที่อัปเดท</th>
                            <th className="border p-3 text-left">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 even:bg-gray-100">
                                <td className="border p-3">{index + 1}</td>
                                <td className="border p-3">
                                    {item.images.length > 0 ? (
                                        <img
                                            className="w-24 h-24 rounded-lg shadow-md"
                                            src={item.images[0].url}
                                            alt="Product"
                                        />
                                    ) : (
                                        <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center shadow-sm">
                                            No Image
                                        </div>
                                    )}
                                </td>
                                <td className="border p-3">{item.title}</td>
                                <td className="border p-3">{item.description}</td>
                                <td className="border p-3">{item.price}</td>
                                <td className="border p-3">{item.quantity}</td>
                                <td className="border p-3">{item.sold}</td>
                                <td className="border p-3">{item.updatedAt}</td>
                                <td className="border p-3 flex justify-center items-center gap-2">
                                    <Link
                                        to={'/admin/product/' + item.id}
                                        className="bg-yellow-500 text-white p-9 w-full rounded-md shadow-md hover:scale-105 hover:-translate-y-1 hover:duration-100 text-center"
                                    >
                                        <Pencil  className="w-6 h-6" />
                                    </Link>
                                    <button
                                        className="bg-red-500 text-white p-9 w-full rounded-md shadow-md hover:scale-105 hover:-translate-y-1 hover:duration-100 text-center"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <Trash  className="w-6 h-6" />
                                    </button>
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );

}

export default Formproduct
