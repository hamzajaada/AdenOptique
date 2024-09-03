import React, { useState } from "react";
import { G1, G2 } from "../assets";
import { FaStar } from "react-icons/fa"; // Importer l'icône d'étoile

const F2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Glasses'); // État pour suivre la sélection

  return (
    <div className="w-full h-auto bg-white ">
      <div className="w-full h-auto  ">
        <div className="w-full h-24 pt-5 text-center text-[35px] tracking-[3px] uppercase font-semibold mb-4">
          <p>Browse bestselling styles</p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="w-[75vh] h-16 rounded-s-xl shadow-xl rounded-r-md mt-5 bg-shadow space-x-4 grid lg:grid-cols-4 py-2">
            <div
              onClick={() => setSelectedCategory('Glasses')} // Met à jour la sélection
              className={`rounded-s-xl text-center pt-3 ${
                selectedCategory === 'Glasses' ? 'rounded-r-xl bg-white shadow-xl font-poppins font-medium cursor-pointer text-[16px]' : 'font-poppins font-medium cursor-pointer text-[16px]'
              }`}
            >
              Glasses
            </div>
            <div
              onClick={() => setSelectedCategory('SunGlasses')} // Met à jour la sélection
              className={`rounded-s-xl rounded-r-xl text-center pt-3 ${
                selectedCategory === 'SunGlasses' ? 'rounded-r-xl shadow-xl bg-white font-poppins font-medium cursor-pointer text-[16px]' : 'font-poppins font-medium cursor-pointer text-[16px]'
              }`}
            >
              SunGlasses
            </div>
            <div
              onClick={() => setSelectedCategory('Kids')} // Met à jour la sélection
              className={`rounded-s-xl rounded-r-xl text-center pt-3 ${
                selectedCategory === 'Kids' ? 'rounded-r-xl shadow-xl bg-white font-poppins font-medium cursor-pointer text-[16px]' : 'font-poppins font-medium cursor-pointer text-[16px]'
              }`}
            >
              Kids
            </div>
            <div
              onClick={() => setSelectedCategory('Accesoires')} // Met à jour la sélection
              className={`rounded-s-xl rounded-r-xl text-center pt-3 ${
                selectedCategory === 'Accesoires' ? 'rounded-r-xl shadow-xl bg-white font-poppins font-medium cursor-pointer text-[16px]' : 'font-poppins font-medium cursor-pointer text-[16px]'
              }`}
            >
              Accesoires
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto space-x-4    grid lg:grid-cols-4">
      <div className=" pb-5">
          <div className="flex items-center">
            <div className="w-full h-64 rounded-t-lg flex justify-center">
              <img src={G1} alt="" className="mx-auto h-full object-contain" />
            </div>
          </div>
          <div className="w-full   h-40 items-cente py-8 px-3 bg-shadow">
            <div className="  flex justify-between">
                <p className="font-poppins font-medium cursor-pointer text-[16px]">Crane</p>
            <p className="font-poppins font-medium cursor-pointer text-[16px]">96 $</p>
            </div>
          
            <div className=" flex ">
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            </div>
            <div className="w-full my-2   flex justify-center " >
            <button className="py-3 px-5  font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Buy Now</button>

            </div>
         
          </div>
        </div>
        <div className=" pb-5">
          <div className="flex items-center">
            <div className="w-full h-64 rounded-t-lg flex justify-center">
              <img src={G2} alt="" className="mx-auto h-full object-contain" />
            </div>
          </div>
          <div className="w-full h-40 items-center py-8 px-3 bg-shadow">
            <div className="  flex justify-between">
                <p className="font-poppins font-medium cursor-pointer text-[16px]">Crane</p>
            <p className="font-poppins font-medium cursor-pointer text-[16px]">96 $</p>
            </div>
          
            <div className=" flex ">
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            </div>
            <div className="w-full my-2   flex justify-center " >
            <button className="py-3 px-5  font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Buy Now</button>

            </div>
         
          </div>
        </div>
        <div className=" pb-5">
          <div className="flex items-center">
            <div className="w-full h-64 rounded-t-lg flex justify-center">
              <img src={G1} alt="" className="mx-auto h-full object-contain" />
            </div>
          </div>
          <div className="w-full h-40 items-center py-8 px-3 bg-shadow">
            <div className="  flex justify-between">
                <p className="font-poppins font-medium cursor-pointer text-[16px]">Crane</p>
            <p className="font-poppins font-medium cursor-pointer text-[16px]">96 $</p>
            </div>
          
            <div className=" flex ">
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            </div>
            <div className="w-full my-2   flex justify-center " >
            <button className="py-3 px-5  font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Buy Now</button>

            </div>
         
          </div>
        </div>
        <div className=" pb-5">
          <div className="flex items-center">
            <div className="w-full h-64 rounded-t-lg flex justify-center">
              <img src={G2} alt="" className="mx-auto h-full object-contain" />
            </div>
          </div>
          <div className="w-full h-40 items-center py-8 px-3 bg-shadow">
            <div className="  flex justify-between">
                <p className="font-poppins font-medium cursor-pointer text-[16px]">Crane</p>
            <p className="font-poppins font-medium cursor-pointer text-[16px]">96 $</p>
            </div>
          
            <div className=" flex ">
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            <FaStar className="text-yellow-500 text-xl" /> {/* Icône d'étoile */}
            </div>
            <div className="w-full my-2   flex justify-center " >
            <button className="py-3 px-5  font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Buy Now</button>

            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default F2;
