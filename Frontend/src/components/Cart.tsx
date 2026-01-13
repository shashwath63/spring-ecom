import React,{useState,useEffect} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router'
function Cart() {
    const navigate = useNavigate()
    const [cart,setCart] = useState<any>([])
     const cartData= localStorage.getItem("cart")
    const cartItems = cartData ? JSON.parse(cartData) : []
useEffect(()=>{
    setCart(cartItems)
},[cartData])

    const viewItem = (id:any)=>{
        navigate(`/item/${id}`)
    }

    const removeFromCart = (id: any) => {
        if (cartData) {
            const index = cartItems.findIndex((item: any) => item.id === id);
            if (index !== -1) {
                if (cartItems[index].quantity > 1) {
                    cartItems[index].quantity -= 1;
                } else {
                    cartItems.splice(index, 1);
                }
                localStorage.setItem("cart", JSON.stringify(cartItems));
                setCart(cartItems);
            }
        }
    };
    const addToCart = (id:any) =>{
        const cart = localStorage.getItem("cart")
        if(cart){
            const parsedCart = JSON.parse(cart)
            parsedCart.map((cartItem:any)=>{
                if(cartItem.id === id){
                    cartItem.quantity++
                }
            })
            localStorage.setItem("cart",JSON.stringify(parsedCart))
        }else{
            const cart = []
            cart.push(id)
            localStorage.setItem("cart",JSON.stringify(cart))
        }
        setCart(cartItems)
    }
    const buyItem = (id:any)=>{
        navigate(`/buy/${id}`)
    }

  return (
    <div>
        {cart.map((item:any)=>{
            return(
                <div key={item?.id} className='border border-grey p-2 m-2 flex flex-col gap-4'>
                    <div onClick={()=>{viewItem(item.id)}} ><img src={item?.image} alt="" />
                    <p>{item?.name}</p>
                    <p className='text-sm'>{item?.price}</p>
                    <p className='text-sm flex flex-wrap'>{item?.description}</p>
                    <p className='text-sm'>{item?.stockQuantity}</p>
                    </div>
                    <div className='flex gap-2'>
                    <button onClick={()=>{addToCart(item.id)}} className='p-1 rounded border border-black w-3/4'>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={()=>{removeFromCart(item.id)}} className='p-1 rounded border border-black w-1/4'>-</button>
                    </div>
                    <button className='rounded border border-black p-1' onClick={()=>{buyItem(item?.id)}}>
                        Buy</button>
                </div>
            )
        })}
    </div>
  )
}

export default Cart
