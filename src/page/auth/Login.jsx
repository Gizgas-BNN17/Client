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
    <div>
      Login
      <br /><br />
      <form action="" onSubmit={handleOnSubmit}>
        Email
        <input className="border"
          onChange={handleOnChange}
          name='email'
          type="email"

        />
        <br />
        <br />
        Password
        <input className="border"
          onChange={handleOnChange}
          name='password'
          type="text"
        />
        <br />
        <br />

        <button className='bg-blue-300 rounded-b-md'>Login</button>
      </form>

    </div>
  )
}

export default Login
