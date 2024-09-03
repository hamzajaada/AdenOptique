import React from 'react'
import { f55 } from '../assets'
const F5 = () => {
  return (
    <div className=' w-full h-auto  grid lg:grid-cols-2 '>
      
      <div className=' flex items-center pl-36 '>
        <div>
        <h1 className=' font-poppins mb-4 cursor-pointer text-[36px] font-semibold' >Take 15% off two (or more!) prescription pairs</h1>
        <p className=' font-poppins mb-4 font-medium cursor-pointer text-[16px]'>Restrictions apply..</p>
        <button className="py-3 px-5  font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Shop Sunglasses</button>

        </div>
        
      </div>
      <div className='flex  pl-32 justify-center'>
        <div>
        <img src={f55}  className='w-[55vh]  rounded-md' alt="" />
        </div>
       

      </div>

    </div>
  )
}

export default F5