import { AddToCartAction } from '@/app/Cart Actions/addToCart'
import { ClearCartAction } from '@/app/Cart Actions/clearCart'
import { getUserCartAction } from '@/app/Cart Actions/getUserCart'
import { removeCartItemAction } from '@/app/Cart Actions/removeCart'
import { updateCartAction } from '@/app/Cart Actions/updateCart'
import { Cart, ProductCart } from '@/types/cart.type'
import React, { createContext, useEffect, useState } from 'react'


interface CartContextType {
  isLoading: boolean
  numOfCartItems: number
  totalCartPrice: number
  Products: ProductCart[]
  cartId: string
  addProductToCart: (id: string) => Promise<any> | void
  updateCart: (id: string, count: number) => Promise<void> | void
  removeCartItem: (id: string) => Promise<any> | void
  clearCart: () => Promise<void> | void
}

export const cartContext = createContext <CartContextType | null>(null)


const  CartContextProvider = ({children}:{children:React.ReactNode}) => {
 
     const [numOfCartItems, setNumOfCartItems] = useState(0)
     const [totalCartPrice, setTotalCartPrice] = useState(0)
     const [Products, setProducts] = useState<ProductCart[]>([])
     const [isLoading, setIsLoading] = useState(false)
     const [cartId, setCartId] = useState("")
    
    async function addProductToCart(id:string){
        try {
            const data =await AddToCartAction(id)

            getUserCart()
            return data
        } catch (error) {
            console.log(error);
            
        }
    }

  async function  getUserCart(){
    setIsLoading(true)
    
    try {
        const data:Cart  =await getUserCartAction()

        setNumOfCartItems(data.numOfCartItems)
        setTotalCartPrice(data.data.totalCartPrice)
        setProducts(data.data.products)
        setIsLoading(false)
        setCartId(data.cartId)
    } catch (error) {
        setIsLoading(false)
        
    }
 }

 async function updateCart(id:string,count:number) {
    try {

        const data =await updateCartAction(id,count)
        
        setNumOfCartItems(data.numOfCartItems)
        setTotalCartPrice(data.data.totalCartPrice)
        setProducts(data.data.products)
    } catch (error) {
        console.log(error);
        
    }
    
 }

  async function removeCartItem(id:string) {
    try {

        const data =await removeCartItemAction(id)
        
        setNumOfCartItems(data.numOfCartItems)
        setTotalCartPrice(data.data.totalCartPrice)
        setProducts(data.data.products)

        return data
    } catch (error) {
        console.log(error);
        
    }
    
 }

 async function clearCart() {
    try {
        const data = await ClearCartAction()
                setNumOfCartItems(0)
        setTotalCartPrice(0)
        setProducts([])
    } catch (error) {
        console.log(error);
        
        
    }
    
 }
  useEffect(function(){

    getUserCart()

 },[])
 

 
    return (
    <cartContext.Provider value={{
        isLoading,
        numOfCartItems,
        totalCartPrice,
        Products,
        addProductToCart,
        updateCart,
        removeCartItem,
        clearCart,
        cartId

    }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider
