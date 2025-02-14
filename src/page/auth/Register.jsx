import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //JavaScript
  const navigate = useNavigate()
  const [form, setForm] = useState(
    {
      email: '',
      password: '',
      confirmPassword: '',
    }
  )
  const handleOnChange = (e) => {
    //code
    console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = async (e) => {
    //Code
    e.preventDefault()
    //Conditions
    if (form.password !== form.confirmPassword) {
      // return alert('Confrim Password is not matc !!')
      toast.error('Confrim Password is not matc !!')
    }else{
      try {
        const res = await axios.post('http://localhost:5000/api/register', form)
        console.log(res.data)
        toast.success(res.data)
      } catch (err) {
        const errMsg = err.response?.data?.message
  
        toast.error(errMsg)
        console.log(err)
      }
      navigate('/login')

    }
    console.log(form)
    //Send to Back
   
  }

  //JavaScript
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form action="" onSubmit={handleOnSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
              name="email"
              type="email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
              name="password"
              type="password"
              required
            />
          </div>
  
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleOnChange}
              name="confirmPassword"
              type="password"
              required
            />
          </div>
  
          <button
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Register
