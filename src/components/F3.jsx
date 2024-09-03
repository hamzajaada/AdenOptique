import React from 'react'
import { f4 ,f44 , f444 , f4444} from '../assets'

const F3 = () => {
  return (
    
    <div >
      <p className=' font-poppins font-medium cursor-pointer text-[44px] text-center uppercase'>
We’ve got your eyes covered
</p>
      <div className=' w-full h-auto  bg-white px-24  mt-24 grid lg:grid-cols-2 mb-10  space-x-5'>
    <div className='  flex justify-center '>
      <div className='grid grid-cols-2 space-x-10'>
        <img src={f4}  className=' w-[95vh]  rounded-md' alt="" />
        <img src={f44}  className='   h-[45vh] mt-36  rounded-md' alt="" />
      </div>
      
    </div>
    <div className='  flex justify-center '>
      <div className='grid grid-cols-2 space-x-10'>
        <img src={f444}  className=' w-[95vh]  rounded-md' alt="" />
        <img src={f4444}  className='   h-[45vh] mt-36  rounded-md' alt="" />
      </div>
      
    </div>
    </div>
  </div>
  )
}

export default F3