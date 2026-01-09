import React,{useState,useEffect} from 'react'
import Header  from './Header'
import { useNavigate } from 'react-router'
function Home() {
    const navigate = useNavigate()
    const [products, setProducts] = useState<any>([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch("http://localhost:8080/api/products")
            const data = await response.json()
            setProducts(data);
        }
        fetchProducts()
    },[])
    const addToCart = (item:any)=>{
        const cart = localStorage.getItem("cart")
        if(cart){
            const parsedCart = JSON.parse(cart)
            const existingItemIndex = parsedCart.findIndex((cartItem:any) => cartItem.id === item.id)

            if(existingItemIndex !== -1){
                parsedCart[existingItemIndex].quantity = (parsedCart[existingItemIndex].quantity || 0) + 1;
            } else {
                parsedCart.push({...item, quantity: 1})
            }
            localStorage.setItem("cart",JSON.stringify(parsedCart))
        }
        else{
            localStorage.setItem("cart",JSON.stringify([{...item, quantity: 1}]))
        }
        console.log(localStorage.getItem("cart"));

    }
    const viewItem = (id:any)=>{
        navigate(`/item/${id}`)
    }
  return (
    <div>
    <div className='flex flex-wrap p-2 gap-2'>{products.map((item:any)=>{
        return(
            <div key={item?.id} className='border border-grey p-2 flex flex-col gap-2'>
                <div  onClick={()=>{viewItem(item.id)}} ><img src={item?.image} alt="" />
                <p>{item?.name}</p>
                <p className='text-sm'>{item?.price}</p>
                <p className='text-sm flex flex-wrap'>{item?.description}</p>
                <p className='text-sm'>{item?.stockQuantity}</p>
                </div>
                <button onClick={()=>{addToCart(item)}} className='p-1 rounded border border-black'>Add to Cart</button>
            </div>
        )
    })}</div>
    </div>
  )
}

export default Home
