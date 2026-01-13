import React, { FormEvent, useRef,useState } from 'react';

function AddProduct() {
    const products = [{
        name:"Name",
        type:"text",
        placeholder:"Name",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    },{
        name:"Brand",
        type:"text",
        placeholder:"Brand",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    },{
        name:"Description",
        type:"text",
        placeholder:"Description",
        value:"",
        required:true,
        ref:useRef<HTMLTextAreaElement>(null)
    },{
        name:"Price",
        type:"number",
        placeholder:"Price",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    },{
        name:"Category",
        type:"text",
        placeholder:"Category",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    },{
        name:"Stock Quantity",
        type:"number",
        placeholder:"Stock Quantity",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    },{
        name:"Release Date",
        type:"date",
        placeholder:"Release Date",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null),
        defaultValue: new Date().toISOString().split('T')[0]
    },{
        name:"Product Available",
        type:"checkbox",
        placeholder:"Product Available",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    },{
        name:"Image File",
        type:"file",
        placeholder:"Image File",
        value:"",
        required:true,
        ref:useRef<HTMLInputElement>(null)
    }]
    const [error, setError] = useState('');
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        products.forEach((product) => {
            if (product.required && !product.ref.current?.value) {
                setError(`${product.name} is required`);
                return;
            }
        });


        setError('');
        const image = products[9].ref.current?.files?.[0];
        const product = products.map((product)=>{
            return{
                name:product.ref.current?.value,
                type:product.type,
                placeholder:product.placeholder,
                value:product.ref.current?.value,
                ref:product.ref,
                defaultValue:product.defaultValue
            }
        })
        const formData = new FormData();
        formData.append('imageFile', image as Blob);
        formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));

        try {
            const response = await fetch('http://localhost:8080/api/product', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Product added successfully');
                console.log('Product added successfully');
            } else {
                console.error('Error adding product');
                alert('Error adding product');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding product');
        }
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-4 m-4">
                    {products.map((product)=>{
                        return(
                            <div className="col-span-6">
                                <label htmlFor={product?.name} className="block mb-1">{product?.name}<span className="text-red-500">{product?.required ? " *" : ""}</span></label>
                                <input
                                    id={product?.name}
                                    name={product?.name}
                                    type={product?.type}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    ref={product?.ref}
                                    placeholder={product?.placeholder}
                                    defaultValue={product?.defaultValue}
                                />
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                        )
                    })}
                    <div className="col-span-12">
                        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">
                            Add Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
