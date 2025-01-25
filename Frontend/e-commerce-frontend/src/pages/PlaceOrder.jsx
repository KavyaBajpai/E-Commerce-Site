import React, { useContext } from 'react'
import { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
const PlaceOrder = () => {

  const [method, setMethod]= useState('cod')
  //using navigate to set the path to orders page
  const {navigate} = useContext(ShopContext)
  return (
    //adding code for palce order page
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        {/* Left Side */}
      <div className='flex flex-col gap-4 sm:max-w-[480px]'>
         <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
         </div>

         <div className='flex gap-3'>
            <input placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
            <input placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
            </div> 
            
            <input placeholder='Email' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="email" name="" id="" />
            <input placeholder='Street' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="email" name="" id="" />
           
            <div className='flex gap-3'>
            <input placeholder='City' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
            <input placeholder='State' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
            </div> 

            <div className='flex gap-3'>
            <input placeholder='Pincode' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
            <input placeholder='Country' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
            </div> 

            
            <input placeholder='Phone Number' className='border border-gray-300 rounded py-1.5 px-1.5 w-full' type="text" name="" id="" />
           
           
         
      </div>
         {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
         <CartTotal/>
        </div>

        <div className='mt-12 text-2xl'>
          <Title text1={'PAYMENT'} text2={'METHODS'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className={`${method==='stripe' ? 'bg-green-200' : ''} flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
              
              <img src={assets.stripe_logo} className='h-5 mx-4'/>
            </div>

            <div onClick={()=>setMethod('razorpay')} className={`${method==='razorpay' ? 'bg-green-200' : ''} flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
             
              <img src={assets.razorpay_logo} className='h-5 mx-4'/>
            </div>

            <div onClick={()=>setMethod('cod')} className={`${method==='cod' ? 'bg-green-200' : ''} flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
              
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
 
            <div className='w-full text-end mt-10'>
             <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
