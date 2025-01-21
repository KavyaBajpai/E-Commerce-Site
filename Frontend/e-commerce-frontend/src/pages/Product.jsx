import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState();
  const [image, setImage] = useState();
  
  const fetchProductData = async () => {
    
    products.map((item)=>{
      console.log(item.id);
      if(item.id=== productId){
        setProductData(item);
        console.log("hello");
        return null;
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => { 
      await fetchProductData();
    }
    fetchData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'> 
       {/* Product Images */}

       <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
           {
             productData.image.map((item, index) => (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'></img>
             ))
           }
        </div>
       </div>
     </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
