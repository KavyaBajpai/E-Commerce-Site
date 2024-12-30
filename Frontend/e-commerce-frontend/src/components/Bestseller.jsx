import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {
  
    const {products} = useContext(ShopContext);
    const [bestsellerProducts,setBestsellerProducts] = useState([]);

    useEffect(() => {
        const bestsellers = products.filter(product => product.bestseller === true);
        setBestsellerProducts(bestsellers.slice(0,5))
    },[])
  
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BESTSELLER'} text2={' PRODUCTS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
        </div>
        
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
             bestsellerProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
             ))
           }
        </div>
    </div>
  )
}

export default Bestseller