import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
        <Navbar />
        <SearchBox />
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/collection' element={<Collections/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/cart' element={<Cart/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/orders' element={<Orders/>} />
           <Route path='/placeOrder' element={<PlaceOrder/>} />
           <Route path='/product/:productId' element={<Product/>} />
           <Route path='/verify' element={<Verify/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
