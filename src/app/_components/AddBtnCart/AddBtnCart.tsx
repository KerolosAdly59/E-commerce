"use client"

import { Button } from '@/components/ui/button'
import { cartContext } from '@/Context/CartContext';
import React, { useContext } from 'react'
import { toast } from 'sonner';

const AddBtnCart = ({id}:{id:string}) => {
const {addProductToCart}:any=useContext(cartContext)

    async function handleAddCart(){
      const data =await addProductToCart(id)

        if(data.status==="success"){
            toast.success(data.message,{
                duration:2000,
                position:"top-center"
            })
        }
        else{
            toast.error("faild to add this product to cart",{
                duration:2000,
                position: "top-center"
            }
            )
        }
    }
  return (
    <div>
                <Button variant="default" className='w-full  bg-[#4fa74f] hover:bg-green-900 cursor-pointer' onClick={handleAddCart}>+ Add To Cart</Button>

    </div>
  )
}

export default AddBtnCart
