
"use client"
import Loading from '@/app/loading'
import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import { ProductCart } from '@/types/cart.type'
import Image from 'next/image'
import { toast } from 'sonner'
import Link from 'next/link'



const Cart = () => {

  const { isLoading, totalCartPrice, Products, updateCart, removeCartItem, clearCart,numOfCartItems }: any = useContext(cartContext)

  async function removeItem(id: string) {

    const data = await removeCartItem(id)

    if (data.status === "success") {
      toast.success("success to remove this product from cart", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "green",
          color: "white",
          paddingBlock: "25px",
        }
      })
    }
    else {
      toast.error("faild to remove this product from cart", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "green",
          color: "white",
          paddingBlock: "25px",
        }
    })
    }


  }

  async function updateCartItem(id: string, count: number) {

    const data = await updateCart(id, count)

    if (data.status === "success") {
      toast.success("success to update this product from cart", {
        duration: 2000,
        position: "top-center"
      })
    }
    else {
      toast.error("faild to update this product from cart", {
        duration: 2000,
        position: "top-center"
      }
      )
    }


  }


  if (isLoading) {
    return <Loading />
  }
  if (Products.length == 0) {
    return <div className='flex items-center justify-center h-screen'>
      <h1 className='text-3xl text-red-600 font-bold'>No Data to display it</h1>
    </div>
  }
  return (

    <>
    
    <head>
       <title>  Cart</title>
    </head>
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-50'>

      <div className='p-5'>
        <h1 className='text-2xl font-bold'>Shop Cart :</h1>
        <p className='my-3 text-green-600 font-mono'> Total Price :{totalCartPrice}EGP</p>
        <div className='flex flex-wrap justify-between'>
          <Button onClick={clearCart} className=' p-5 bg-blue-600  '> Clear Cart</Button>
        <div>
          <Button  className='mb-5 ms-6 p-5 bg-blue-600'> 
          <Link href="/checkOut" className='text-2xl'>Check Out</Link>
        </Button>
        <h2 className='text-green-600 text-[20px]'>total number of items:{numOfCartItems}</h2>
        </div>
        </div>

        <div className='allProduucts'>

          {Products.map(function (product: ProductCart, idx: number) {
            return <div key={idx} className='flex items-center justify-between py-3 border-b-[1px] border-green-300'>
              <div className='flex items-center gap-5'>
                <div>
                  <Image alt='' src={product.product.imageCover} height={200} width={200} />
                </div>
                <div>
                  <h1>{product.product.title}</h1>
                  <p className='my-3 text-green-700'> Price :{product.price} EGp</p>
                  <button  className='text-red-700 cursor-pointer text-[20px] bg-transparent ' onClick={() => removeItem(product.product.id)}> <i className='fas fa-trash'></i>Remove</button>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <Button className='bg-transparent border-[1px] py-5 border-green-400 text-[18px] font-normal cursor-pointer text-black hover:bg-transparent hover:text-black hover:border-green-400' onClick={() => updateCartItem(product.product.id, product.count - 1)}>-</Button>
                <p>{product.count}</p>
                <Button className='bg-transparent border-[1px] py-5 border-green-400 text-[18px] font-normal cursor-pointer text-black hover:bg-transparent hover:text-black hover:border-green-400' onClick={() => updateCartItem(product.product.id, product.count + 1)}>+</Button>
              </div>

            </div>
          })}
        </div>
      </div>

    </div>
    </>
  )
}

export default Cart
