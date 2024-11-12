import React, { useState } from 'react'
// import List from './List'
import { countries, genres } from '../lib/data'
import { Icon } from '@iconify/react';
import Search from './Search';
import Card from './Card';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import logoIcon from "../assets/logo.png";
import List from './List';

const navitems = [
  {
    key:"home",
    label:"Home",
    path:'/home',
  },
  {
    key:"genre",
    label:"Genre",
    path:"/genre"
  },
  {
    key:"country",
    label:"Country",
    path:"/country"
  },
  {
    key:"movies",
    label:"Movies",
    path:'/movie',
  },
  {
    key:"tvseries",
    label:"TV Series",
    path:'/tvseries',
  },
  {
    key:"topimdb",
    label:"Top IMDb",
    path:'/topimdb',
  },
]
export default function Navbar() {
  const [opensearch,setopensearch]=useState(false);
  const [menu,setmobilemenu]=useState(false)
  return (


    <>
    <div className="flex flex-row justify-between bg-black">

      <div className="flex ">
        <div className='md:flex flex justify-center items-center lg:hidden md:ml-3' onClick={()=>setmobilemenu(!menu)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path className='' fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16" />
          </svg>
         
        </div>
        
          <div className="lg:w-[220px] w-[180px] md:p-2 lg:ml-0 md:ml-3 h-auto flex items-center bg-[#323744] px-[20px] md:w-[200px]">
            <img className='md:w-[150px] mx-auto' src={logoIcon} alt="" />
          </div>
      </div>
      {menu && <Mobilemenu />}
    <div className="hidden lg:flex flex-row  gap-10  ml-3 w-full h-[65px] items-center ">
      
    {
     navitems.map((it) => it.key != "genre" && it.key !== "country" ? (
       <Link to={it.path} className="text-white  " key={it.key}>
         {it.label}
       </Link>
     ) : (
      <div className='text-white flex  items-center gap-2 group'>
        <p>
          {it.label}
        </p>
        <p className='relative'>
        <Icon icon="iconamoon:arrow-down-2-light" />
        <div className='absolute left-1 hidden group-hover:block'>
        {
          it.key == 'genre' ? (
              <List data={genres} />
            ) : (
            <List data={countries} />
          )
        }
        </div>
        </p>
        
      </div>
     ))
    }
   
    </div>

    <div className="flex flex-row gap-4 lg:gap-[30px] mr-[25px]">
      <div className="flex flex-row items-center gap-2 justify-center"onClick={()=>setopensearch(!opensearch)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18"height="18" viewBox="0 0 12 12">
	      <path fill="white" fill-rule="evenodd" d="M8.5 5.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-.393 3.668a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd" />
        </svg>
      <div className=" hidden lg:block text-white">Search</div>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
	    <path className="w-[50px]"  fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M6 40.8V42h36v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C35.92 28 33.68 28 29.2 28H18.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8" />
      </svg>  
      <div className="hidden lg:block text-white">Login</div>
      </div>
    </div>
    {opensearch && <Search/>}
    
    </div> 
  
    </>
  )
}
 