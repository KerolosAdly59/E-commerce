import React from 'react'
import SingleProduct from '@/app/apis/SingleProduct'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AddBtnCart from '@/app/_components/AddBtnCart/AddBtnCart'




const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } =  params
  const data = await SingleProduct(id)
  return (
    <>
    <head>
       <title>  Product Details</title>
    </head>
    <div className='w-full px-5 md:w-[80%] md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row'>
      <div className='w-full md:w-1/3'>
        <Image width={800} height={800} src={data.imageCover} className='w-full' alt={data.category.name} />
      </div>
      <div className='w-full md:w-2/3 m-10 md:m-0 p-10'>
      <h1 className='text-2xl text-green-500 font-bold'>{data.title}</h1>
    <p className='my-5'>{data.description}</p>
    <p>{data.category.name}</p>
    <div className="w-full flex justify-between items-center my-5">
                  <p>{data.price}</p>
                  <p>{data.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></p>
                </div>
    <AddBtnCart id={id}/>
      </div>
    </div>
    </>
  )
}

export default ProductDetails
