"use client"

import Loading from '@/app/loading'
import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext'
import { useWishlist } from '@/Context/WishListContext'
import Image from 'next/image'
import React, { useContext } from 'react'



const WishList = () => {


  const { wishlist, isLoading ,removeWishList } = useWishlist()

const {addProductToCart}:any=useContext(cartContext)

  

  

  if (isLoading) {
    return <Loading />
  }

  if (wishlist.length == 0) {

    return <div className='flex items-center justify-center h-screen'>
      <h1 className='text-3xl text-red-600 font-bold'>No Data to display it</h1>
    </div>

  }
  return (
    <>
    
    <div className='w-full md:w-[85%] mx-auto my-10 px-5 md:px-0 bg-slate-50'>

      <div className='py-5 px-14'>
        <h1 className='text-4xl py-8 font-bold'>My Wish List</h1>

        <div className='allProduucts'>

          {wishlist.map(function (product: any, idx: number) {
            return <div key={idx} className='flex items-center justify-between py-3 border-b-[1px] border-green-300'>
              <div className='flex items-center gap-5'>
                <div>
                  <Image  alt={product.title} src={product.imageCover} height={200} width={200} />
                </div>
                <div>
                  <h1 className='font-bold text-3xl'>{product.title}</h1>
                  <p className='my-3 text-green-700 font-bold text-2xl'>{product.price}  EGp</p>
                  <button  className='text-red-700 cursor-pointer text-[20px]' onClick={() => removeWishList(product._id)}><i className='fas fa-trash'></i> Remove</button >
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <Button onClick={()=>addProductToCart(product._id)}  className='bg-transparent border-[1px] py-5 border-green-400 text-[18px] font-normal cursor-pointer text-black hover:bg-transparent hover:text-black hover:border-green-400' >add To Cart</Button>
                </div>

            </div>
          })}
        </div>
      </div>

    </div>
    </>
  )
}

export default WishList
