import React from 'react';
import List from './list';
import { countries, genres } from '../lib/data';

export default function Mobilemenu() {
  return (
    <nav className="bg-black w-full md:w-full h-auto absolute top-[48px] md:top-[55px] pt-10 lg:hidden" role="menu">
      <div className="text-white h-[50px] pl-3 flex items-center" role="menuitem">Home</div>
      <hr className="text-white opacity-30" />
      
      <div>
        <p className="text-white pl-3 h-[50px] flex items-center" role="menuitem">Genre</p>
        <List data={genres} />
      </div>
      <hr className="text-white opacity-30" />
      
      <div>
        <p className="text-white pl-3 flex items-center h-[50px]" role="menuitem">Countries</p>
        <List data={countries} />
      </div>
      <hr className="text-white opacity-30" />
      
      <div className="text-white h-[60px] flex pl-3 items-center" role="menuitem">Movies</div>
      <hr className="text-white opacity-30" />
      
      <div className="text-white h-[60px] flex pl-3 items-center" role="menuitem">TV Series</div>
      <hr className="text-white opacity-30" />
      
      <div className="text-white h-[60px] flex pl-3 items-center" role="menuitem">Top IMDb</div>
    </nav>
  );
}
