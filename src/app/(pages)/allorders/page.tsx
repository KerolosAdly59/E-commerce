import { getUserOrder } from '@/app/apis/getUserOrders'
import { CartItem, Order, Orders } from '@/types/userOrder';
import Image from 'next/image';
import React from 'react'




const AllOrders = async () => {

  const data: Orders = await getUserOrder()

  


  return (

    <>
    <head>
       <title>  All Products</title>
    </head>
    <div className='md:w-[80%] mx-auto w-full my-10 px-5 md:px-0'>
      <div className=' allOrders'>
        {data.map(function (order: Order, idx: number) {
          return <div key={idx} className='p-5 bg-slate-50 mb-5 '>

            <div className='flex border-b-1 border-green-700/35 pb-5'>
              {order.cartItems.map(function (item: CartItem, idx: number) {
                return <div key={idx} className='w-1/6 me-3'>

                  <Image src={item.product.imageCover} alt={item.product.title} width={200} height={200} className='w-full' />
                  <h2 className='line-clamp-1'>{item.product.title}</h2>
                </div>
              })}

            </div>
            <div className="mt-5">
              <h2 className='text-green-600'> paymentMethodType:{order.paymentMethodType}</h2>
              <h2 className='text-green-600'> totalOrderPrice:{order.totalOrderPrice}EGP</h2>

            </div>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default AllOrders
