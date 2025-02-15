//rafce
import React from 'react'
import ContentCarousel from '../components/home/ContentCarousel'
import BestSell from '../components/home/BestSell'

const Home = () => {
  return (
    <div className='bg-white'>
      <ContentCarousel />
  <hr />
      <p className="text-2xl text-center my-4 font-bold ">สินค้าขายอย่างดี</p>
      <BestSell/>

      {/* <p className="text-2xl text-center my-4">สินค้าใหม่</p>
      <NewProduct /> */}

<hr /><hr />

    </div>
  )
}

export default Home
