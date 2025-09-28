"use client"

import { useWishlist } from '@/Context/WishListContext'

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
