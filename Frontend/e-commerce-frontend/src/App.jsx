import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Card from './pages/Card'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/collection' element={<Collections/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/card' element={<Card/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/orders' element={<Orders/>} />
           <Route path='/placeOrder' element={<PlaceOrder/>} />
           <Route path='/product' element={<Product/>} />
        </Routes>
    </div>
  )
}

export default App
