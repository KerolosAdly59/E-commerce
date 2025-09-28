"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { GetUserWishListAction } from "@/app/WishListActions/getUserWishList"
import { AddToWishListAction } from "@/app/WishListActions/addToWishList"
import { toast } from "sonner"
import { removeWishListAction } from "@/app/WishListActions/removeWishList"

type WishlistContextType = {
  wishlist: any[]
  toggleWishlist: (id: string) => Promise<void>
  isLoading: boolean
    removeWishList: (id: string) => Promise<void>
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([])
       const [isLoading, setIsLoading] = useState(false)
  

  useEffect(() => {
    
    getUserWishList()
  }, [])

  async function getUserWishList() {
    setIsLoading(true)

    try {
          const { data } = await GetUserWishListAction()
                setWishlist(data)

  
    } catch (error) {

    setIsLoading(false)
      
    }
    setIsLoading(false)
    
  }

  const toggleWishlist = async (id: string) => {
    const addData = await AddToWishListAction(id)

    if (addData.status === "success") {
      toast.success("✅ it has been successfully added", {
        duration: 2000,
        position: "top-right",
        style:{
          background:"green",
          color:"white",
          paddingBlock:"25px"

        }
      })
      setWishlist((prev) => [...prev, { _id: id }])
    } else {
      toast.error("❌ failed to add this product to wishlist", {
        duration: 2000,
        position: "top-right",
      })
    }
  }

    const removeWishList = async (id: string) => {
    try {
      const data = await removeWishListAction(id)
      if (data.status === "success") {
        setWishlist((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error("❌ Failed to remove product")
      }
    } catch (error) {
      console.error(error)
      toast.error("⚠️ Something went wrong")
    }
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist ,isLoading ,removeWishList}}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) throw new Error("useWishlist must be used within WishlistProvider")
  return context
}
