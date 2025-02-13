import React from 'react'
import useEcomStore from '../../store/ecomStore';
import { useState, useEffect } from 'react'
import { readProduct, updateProduct } from '../../api/product';
import Uploadfile from './Uploadfile';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom'


const initialState = {

    title: "Chocolate dubai",
    description: "test",
    price: 79,
    quantity: 20,
    categoryId: '',
    images: []

}
const FormEditproduct = () => {
    const token = useEcomStore((state) => state.token)
    const { id } = useParams()
    const navigate = useNavigate()
    const getCategory = useEcomStore((state) => (state.getCategory))
    const categories = useEcomStore((state) => state.categories)
    const [form, setForm] = useState(initialState)
    useEffect(() => {
        getCategory()
        fatchProduct(token, id, form)
    }, [])

    const fatchProduct = async (token, id, form) => {
        try {
            // code
            const res = await readProduct(token, id, form)
           // console.log('res from backend', res)
            setForm(res.data)
        } catch (err) {
            //console.log('Err fetch data', err)
        }
    }
    console.log(form)

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await updateProduct(token, id, form)
            console.log(res)
            toast.success(`เเก้ไขข้อมูล ${res.data.title} สำเร็จ`)
            navigate('/admin/product')
        } catch (err) {
            console.log(err)
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
                    <option value="" disabled>Please Select</option>
                    {categories.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))}
                </select>

                <Uploadfile form={form} setForm={setForm} />

                <button

                    className="bg-blue-500 text-white p-3 rounded-md shadow-md hover:scale-105 hover:-translate-y-1 hover:duration-200"
                >
                    เเก้ไขสินค้า
                </button>

                <hr className="my-6" />


            </form>
        </div>
    );

}

export default FormEditproduct
