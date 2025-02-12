// rafce
import React from 'react'
import AppRoutes from './routes/AppRoutes'
import '../src/index.css'
import { ToastContainer } from 'react-toastify';

const App = () => {
  //Javascript
  //return html 1 element if add element = <> </>
  return (
    <div>
      <ToastContainer />
      <AppRoutes />
    </div>
  )
}

export default App