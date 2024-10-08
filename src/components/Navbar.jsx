import React from "react";
import { useState } from "react";
import { close, logobb,   instagram , facebook, linkedin,  Menu} from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full border-b-2    h-20 bg-white  px-10 flex  ">
      <div className=" flex items-center pt-5 pb-9 ">
        <div>
            <p className=" font-poppins font-semibold cursor-pointer text-[16px]   uppercase tracking-[2px] "><span className="text-move text-[24px] " >Y</span>O<span className="text-move text-[24px] " >S</span>UNNYS</p> 
        </div>

      </div>
      <div>
        
      </div>
      <ul className="list-none sm:flex  h-20   hidden justify-end items-center flex-1">
        <div className="  sm:flex   pr-48  border-r-2 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-medium cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  text-black `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))}
        </div>
       
        <button className="py-3 px-5 ml-10 font-poppins  cursor-pointer text-[16px] tracking-[1px] hidden sm:block  text-white font-semibold   bg-move rounded-md">Stores</button>
        <div className="grid grid-cols-3  gap-4 ml-5  ">
          <img  className="hidden sm:block bg-move" src={instagram}/>
        <img className="hidden sm:block bg-move" src={facebook}/>
        </div>
        
      </ul>
      {/* Small screen */}
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : Menu}
        alt="menu"
        className=" object-contain text-move   w-10"
        onClick={()=> settoggle(!toggle)}
        />
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 z-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
      <ul className="list-none flex  flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mb-4"
            }  text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
