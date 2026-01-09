import { useEffect,useState } from 'react'
import { useParams } from 'react-router'
function Item() {
const param = useParams()
const [product,setProduct] = useState<any>({})
const [image,setImage] = useState<any>(null)
useEffect(()=>{
    const fetchItem=async()=>{
        const res = await fetch(`http://localhost:8080/api/product/${param.id}`)
        const data = await res.json()
        setProduct(data)
        setImage(`http://localhost:8080/api/product/${param.id}/image`)
    }
    fetchItem()
},[param.id])
  return (
    <div className='p-2 border border-gray-200 flex justify-center items-center flex-col gap-2'>
        {image && <img src={image} alt={product?.name} className="w-64 h-64 object-cover" />}
        <p className='text-lg'>{product?.name}</p>
        <p className='text-sm'>{product?.price}</p>
        <p className='text-sm'>{product?.description}</p>
        <p className='text-sm'>{product?.stockQuantity}</p>
    </div>
  )
}

export default Item
