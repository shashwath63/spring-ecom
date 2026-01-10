import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'
import Item from './components/Item'
import AddProduct from './components/AddProduct'
function App() {
  return (
  <>
  <Header />
   <Routes>
    <Route path='/item/:id' element={<Item />} />
    <Route path='/cart' element={<Cart />} />
       <Route path='/' element={<Home />} />
       <Route path='/addProduct' element={<AddProduct />} />
    </Routes>
   </>
  )
}

export default App
