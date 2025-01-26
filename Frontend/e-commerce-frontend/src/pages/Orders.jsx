import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const {products, currency} = useContext(ShopContext);
  return (
    <div className='broder-t pt-5'>
      
    </div>
  )
}

export default Orders
