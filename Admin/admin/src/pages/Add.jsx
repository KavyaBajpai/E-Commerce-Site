import React from 'react'
import { assets } from '../assets/assets'
const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2 font-medium text-xl'>Upload Images</p>
        <div className='flex gap-4'>
          <label htmlFor="image1">
            <img className='w-20'src={assets.upload_area}></img>
            <input type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area}></img>
            <input type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area}></img>
            <input type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area}></img>
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='mt-2 w-full'>
        <p className='font-medium text-xl mb-2'>Product Name</p>
        <input type="text" className='w-full max-w-[500px] border border-gray-300 rounded-md px-3 py-2' placeholder='Type Here' required />
      </div>

      <div className='mt-2 w-full'>
        <p className='font-medium text-xl mb-2'>Product Description</p>
        <textarea type="text" className='w-full max-w-[500px] border border-gray-300 rounded-md px-3 py-2' placeholder='Type Here' required />
      </div>

      <div className='flex flex-col sm:flex-row sm:gap-4 gap-2 w-full'>
        <div className='mb-3'>
          <p className='font-medium text-xl mb-2'>Product Category</p>
          <select className='px-3 py-2 border border-gray-300 rounded-md'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='mb-3'>
          <p className='font-medium text-xl mb-2'>Product Subcategory</p>
          <select className='px-3 py-2 border border-gray-300 rounded-md'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className='mb-3'>
          <p className='font-medium text-xl mb-2'>Product Price</p>
          <input className='px-3 py-2 border border-gray-300 rounded-md' type="number" placeholder='Type Here' required />
        </div>
      </div>

      <div className='mb-3'>
        <p className='font-medium text-xl mb-2'>Product Sizes</p>
        <div className='flex flex-row gap-3'>
          <div>
            <p className='bg-slate-300 px-3 py-1 cursor-pointer'>S</p>
          </div>

          <div>
            <p className='bg-slate-300 px-3 py-1 cursor-pointer'>M</p>
          </div>

          <div>
            <p className='bg-slate-300 px-3 py-1 cursor-pointer'>L</p>
          </div>

          <div>
            <p className='bg-slate-300 px-3 py-1 cursor-pointer'>XL</p>
          </div>

          <div>
            <p className='bg-slate-300 px-3 py-1 cursor-pointer'>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <input className='w-5 h-5'type="checkbox" id="bestseller"/>
        <label className=' cursor-pointer font-medium text-xl' htmlFor="bestseller">Add to Bestsellers</label>
      </div>

      <button type="submit" className='w-1/3 py-2 px-3 mt-4 bg-black text-white rounded-md'>ADD PRODUCT</button>
    </form>
  )
}

export default Add
