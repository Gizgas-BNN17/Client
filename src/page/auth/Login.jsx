import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useEcomStore from '../../store/ecomStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //JavaScript
  const navigate = useNavigate()
  const actionLogin = useEcomStore((state) => state.actionLogin)
  const user = useEcomStore((state) => state.user)
  console.log('user : ', user)

  const [form, setForm] = useState(
    {
      email: '',
      password: '',
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
    //Send to Back
    try {
      //console.log(form)
      const res = await actionLogin(form)
      const role = res.data.payload.role
      console.log('res : ', role)
      roleRedirect(role)
      toast.success('Login Compete')
    }
    catch (err) {
      console.log(err)
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
    }

  }

  const roleRedirect = (role) => {
    if (role === 'admin') {
      navigate('/admin')
    } else {
      navigate('/user')
    }
  }
  //JavaScript
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
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
  
          <button
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Login
