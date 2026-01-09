import React from 'react'
import { useNavigate } from 'react-router'
function Header() {
    const navigate = useNavigate()
    const openCart = () => {
        navigate('/cart')
    }
    const navigateHome = () => {
        navigate('/')
    }
  return (
    <div className='bg-black text-white p-2 flex justify-between' > <p onClick={()=>{navigateHome()}}>Logo</p>
        <div className='flex flex-row-reverse justify-end gap-2'>
        <p className='border border-white p-1 rounded' onClick={()=>{openCart()}}>Cart</p>
        <p><input className='border border-white p-1 rounded' type="text" placeholder='Search'/></p>

        </div>
    </div>
  )
}

export default Header
