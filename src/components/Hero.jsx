import React from 'react';
import { PT ,T1 } from '../assets';

const Hero = () => {
  return (
    <div className='w-full h-full  bg-white relative  grid lg:grid-cols-2 '>
      <div className='   py-10 pl-40'>
        <img src={T1} className='w-96 h-66   rounded-md' alt="" />
      </div>
      <div className=' flex justify-center items-center '>

        <div className=' w-full  '>
           <h1 className='text-black text-4xl md:text-6xl font-poppins tracking-[1px] font-bold mb-4 '>
           Explorez  <span className="text-move text-8xl  " >Y</span>O<span className="text-move  text-8xl " >S</span> UNNYS   votre expert opticien.
        </h1>
        <p className='text-black font-medium  font-poppins text-[20px]  mb-8 '>
          Découvrez nos collections de lunettes de vue et de soleil.
        </p>
        <button className='px-6 py-3 bg-move font-poppins rounded-md  cursor-pointer text-[16px] tracking-[2px] hidden sm:block  text-white font-semibold  transition duration-300'>
          Découvrez Nos Produits
        </button>
        </div>
     
      </div>
      {/* <img src={PT} alt="" className='w-[100%]  h-[82vh] object-cover' />
      <div className='absolute inset-0 flex flex-col    ml-96 justify-center items-center w-[80%]     bg-transparent bg-opacity-50'>
        <h1 className='text-black text-4xl md:text-6xl font-bold mb-4 text-center'>
          Bienvenue chez Votre Opticien
        </h1>
        <p className='text-black   text-lg md:text-2xl mb-8 text-center'>
          Découvrez nos collections de lunettes de vue et de soleil.
        </p>
        <button className='px-6 py-3 bg-move text-white rounded-lg text-lg md:text-xl hover:bg-blue-700 transition duration-300'>
          Découvrez Nos Produits
        </button>
      </div> */}
    </div>
  );
}

export default Hero;
