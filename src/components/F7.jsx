import React from 'react'
import { f7 } from '../assets'

const F7 = () => {
  return (
    <div
      className='w-full bg-blue-100 flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${f7})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-full h-[70vh] flex flex-col justify-center items-center bg-cover'>
        <div className='text-center text-white'>
          <p className='text-3xl font-bold'>Eyewear home</p>
          <p className='text-lg'>Modern store template</p>
        </div>
        <button className='py-3 px-10 mt-5  font-poppins   cursor-pointer text-[16px] tracking-[1px] hidden sm:block   text-white font-semibold   bg-move rounded-md'>
          Shop
        </button>
      </div>
    </div>
  )
}

export default F7
