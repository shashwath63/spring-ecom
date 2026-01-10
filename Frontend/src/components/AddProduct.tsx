import React,{useState} from 'react'

function AddProduct() {
    const [product,setProduct] = useState<any>({})
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        console.log(product)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-2">
            <label className="col-span-6" htmlFor="name"><span>Name:</span>
            <input id='name'type="text" className='border border-black rounded mt-2 p-2 w-full' placeholder='Name' />
            </label>
            <label className="col-span-6" htmlFor="description"><span>Description:</span>
            <input type="text" className='border border-black rounded mt-2 p-2 w-full' placeholder='Description' />
            </label>
            <label className="col-span-6" htmlFor="brand"><span>Brand:</span>
            <input type="text" className='border border-black rounded mt-2 p-2 w-full' placeholder='brand' />
            </label>
            <label className="col-span-6" htmlFor="price"><span>Price:</span>
            <input type="number" className='border border-black rounded mt-2 p-2 w-full' placeholder='Price' />
            </label>
            <label className="col-span-6" htmlFor="category"><span>Category:</span>
            <input type='text' className='border border-black rounded mt-2 p-2 w-full' placeholder='category'/>
            </label>
            <label className="col-span-6" htmlFor="stockQuantity"><span>Stock Quantity:</span>
            <input type="number" className='border border-black rounded mt-2 p-2 w-full' placeholder='Stock Quantity' />
            </label>
            <label className="col-span-6" htmlFor="productAvailable"><span>Product Available:</span>
            <input type="checkbox" className='rounded ' placeholder='Product available' />
            </label>
            <label className="col-span-6" htmlFor="image"><span>Image:</span>
            <input type="file" className='border border-black rounded mt-2 p-2 w-full' placeholder='Image' />
            </label>
            <button type="submit" className='border border-black rounded'>Add Product</button>
            </div>
        </form>
    </div>

  )
}

export default AddProduct
