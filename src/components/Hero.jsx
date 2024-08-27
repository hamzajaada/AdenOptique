import React from 'react';
import { PT } from '../assets';

const Hero = () => {
  return (
    <div className='w-full relative mt- bg-red-300'>
      <img src={PT} alt="" className='w-[100%]  h-[82vh] object-cover' />
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
      </div>
    </div>
  );
}

export default Hero;
