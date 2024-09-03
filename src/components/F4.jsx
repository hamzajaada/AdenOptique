import React from 'react'
import { f5 } from '../assets'
const F4 = () => {
  return (
    <div className=' w-full h-auto   grid lg:grid-cols-2 '>
      <div className='flex  j justify-center'>
        <div>
        <img src={f5}  className='w-[55vh]  rounded-md' alt="" />
        </div>
       

      </div>
      <div className=' flex items-center px-16'>
        <div>
        <h1 className=' font-poppins mb-4 cursor-pointer text-[36px] font-semibold' >Lenses with benefits, included in every pair</h1>
        <p className=' font-poppins mb-4 font-medium cursor-pointer text-[16px]'>All of our eyeglasses come with built-in protection against smudges, scratches, and UV light.</p>
        <button className="py-3 px-5  font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Explore our lens options</button>

        </div>
        
      </div>

    </div>
  )
}

export default F4