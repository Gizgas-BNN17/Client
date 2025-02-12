import React, { useState, useEffect } from 'react'
import useEcomStore from '../../store/ecomStore';
import { createCategory,removeCategory } from '../../api/category';
import { toast } from 'react-toastify';

const Formcategory = () => {
  const [name, setName] = useState('')
  //const [categories, setCategories] = useState([])
  const categories = useEcomStore((state)=>state.categories)
  const getCategory = useEcomStore((state)=>(state.getCategory))
  const token = useEcomStore((state) => state.token)
  useEffect(() => {
    getCategory(token)
  }, [])

 
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name) {
      return toast.warning('Please fill date')
    }
    console.log("token / name ", token, name)
    try {
      const res = await createCategory(token, { name })
      console.log(res)
      toast.success(`AddCategory ${res.data.name} Success !!`)
      getCategory(token)
    } catch (err) {
      console.log(err)
    }
  }
  const handleRemove = async (id) => {
   
    console.log("token / id ", token, id)
    try {
      const res = await removeCategory(token,id)
      console.log(res)
      toast.success(`Delete ${res.data.name} Success !!`)
      getCategory(token)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(name)
  // return (
  //   <div className='container mx-auto p-4 bg-white shadow-md'>
  //     <h1>Category Management</h1>
  //     <form className='my-4' onSubmit={handleSubmit}>
  //       <input
  //         onChange={(e) => (
  //           setName(e.target.value)
  //         )}
  //         className='border'
  //         type="text"
  //       />
  //       <button className='bg-blue-500'>Add Categgory</button>
  //     </form>
  //     <hr />
  //     <ul className='list-none'>
  //       {
  //         categories.map((item, index) =>
  //           <li className='flex justify-between my-2' key={index}>
  //             <span>{item.name}</span>
  //             <button className='bg-red-500' onClick={()=>handleRemove(item.id)}>Delete</button>
  //           </li>
  //         )
  //       }
  //       <li>
  //         Cate
  //       </li>
  //     </ul>
  //   </div>
  // )
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">จัดการประเภทสินค้า</h1>
  
      {/* Form */}
      <form className="flex space-x-2 items-center mb-6" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="text"
          placeholder="Enter new category name"
        />
        <button
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md shadow-md hover:bg-blue-600 hover:scale-105 transform transition"
        >
          Add Category
        </button>
      </form>
  
      <hr className="my-4" />
  
      {/* Category List */}
      <ul className="list-none border border-gray-300 rounded-md divide-y divide-gray-300">
        {categories.map((item, index) => (
          <li
            className="flex justify-between items-center p-3 hover:bg-gray-100"
            key={index}
          >
            <span className="text-gray-800">{item.name}</span>
            <button
              className="bg-red-500 text-white text-sm px-3 py-1 rounded-md shadow-md hover:bg-red-600 hover:scale-105 transform transition"
              onClick={() => handleRemove(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
}

export default Formcategory
