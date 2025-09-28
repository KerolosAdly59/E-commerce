"use client"

import { AddToWishListAction } from '@/app/WishListActions/addToWishList'
import { GetUserWishListAction } from '@/app/WishListActions/getUserWishList'
import { useWishlist } from '@/Context/WishListContext'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const AddIconCart = ({ id }: { id: string }) => {

   const { wishlist, toggleWishlist  } = useWishlist()

  const isInWishlist = wishlist.some((item) => item._id === id)



    return (
        <>
            <i onClick={() =>toggleWishlist(id)} className={`${isInWishlist ? " text-red-800" : " text-black"}   fas fa-heart text-[25px] absolute top-2 right-2 `}></i>

        </>
    )
}

export default AddIconCart
