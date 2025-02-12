import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Register = () => {
  //JavaScript
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
      return alert('Confrim Password is not matc !!')
    }
    console.log(form)
    //Send to Back
    try {
      const res = await axios.post('http://localhost:5000/api/register', form)
      console.log(res.data)
      toast.success(res.data)
    } catch (err) {
      const errMsg = err.response?.data?.message

      toast.error(errMsg)
      console.log(err)
    }
  }

  //JavaScript
  return (
    <div>
      Register
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
        confirmPassword
        <input className="border"
          onChange={handleOnChange}
          name='confirmPassword'
          type="text"
        />
        <button className='bg-blue-300 rounded-b-md'>Register</button>
      </form>

    </div>
  )
}

export default Register
