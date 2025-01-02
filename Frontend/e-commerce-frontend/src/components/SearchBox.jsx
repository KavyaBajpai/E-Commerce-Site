import React from 'react'
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
const SearchBox = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center py-2 flex justify-center items-center gap-2'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 rounded-2xl pr-4'>
           <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm p-2 rounded' type="text" placeholder='Search here'></input>
        </div>
        <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' />
    </div>
  ) : null
}

export default SearchBox
