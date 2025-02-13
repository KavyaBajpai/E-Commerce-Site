import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const {products, currency} = useContext(ShopContext);
  return (
    <div className='broder-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <p>Hi</p>
      <div>
        { 
          products.slice(1,4).map((item, index)=> (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                 <img src={item.image[0]} className='w-16 sm:w-20'/>
                 <div>
                   <p className='sm:text-base font-medium'>{item.name}</p>
                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                     <p className='text-lg'>{currency}{item.price}</p>
                     <p>Quantity: 1</p>
                     <p>Size: M</p>
                   </div>
                   <p className='mt-2'>Purchase Date: <span className='text-gray-400'>26.01.25</span></p>
                 </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                 <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm text-base'>Ready to ship</p>
                 </div>
                 <button className='text-sm text-gray-700 border border-gray-300 rounded py-1.5 px-3'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Orders
