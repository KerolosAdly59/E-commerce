"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import logo from "./../../../src/screens/freshcart-logo.svg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { cartContext } from '@/Context/CartContext';
import { Badge } from "@/components/ui/badge"
import { Menu, X } from 'lucide-react';

const Navbar = () => {

  const { data: session, status } = useSession()

  const { numOfCartItems }: any = useContext(cartContext)

  const  [isOpen, setIsOpen] = useState(false)




  const path = usePathname()
  return (
    <div className='bg-slate-100 py-5'>
      <div className='w-full md:w-[85%] mx-auto flex flex-col md:flex-row gap-6 justify-between items-center'>
        {/* logo && links */}
        <li>

          <Link href="/">
            <Image src={logo} alt='logo' className='w-full' />
          </Link>
        </li>



        <button
          className="md:hidden cursor-pointer text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className='hidden md:flex flex-col md:flex-row gap-6 text-center items-center ms-5'>

          {status === "authenticated" && <>

            <li >

              <Link className={path === "/" ? "text-neutral-300" : ""} href="/">
                Home
              </Link>
            </li>
            <li className=''>

              <Link className={path === "/cart" ? "text-neutral-300" : ""} href="/cart">
                Cart

              </Link>
            </li>
            <li className=''>

              <Link className={path === "/cart" ? "text-neutral-300" : ""} href="/allorders">
                All Orders

              </Link>
            </li>
            <li>

              <Link className={path === "/products" ? "text-neutral-300" : ""} href="/wishList">
                Wish list
              </Link>
            </li>
            <li>

              <Link className={path === "/products" ? "text-neutral-300" : ""} href="/products">
                products
              </Link>
            </li>
            <li>

              <Link className={path === "/categories" ? "text-neutral-300" : ""} href="/categories">
                Categories
              </Link>
            </li>
            <li>

              <Link className={path === "/brands" ? "text-neutral-300" : ""} href="/brands">
                Brands
              </Link>
            </li></>}
          {status === "loading" && <>
            <h1>Loading</h1>
          </>}
          {status === "unauthenticated" && <p></p>}

        </ul>


        {/* icons && buttons */}
        <div className=' md:flex flex-col md:flex-row gap-2 text-center items-center'>


          {status === "authenticated" && <>
            <div className='flex flex-wrap gap-3 items-center'>
              <div className='relative px-3'>
                <Link href="/cart">
                  <Badge className='absolute -top-[40%] left-8 text-[15px]  bg-green-600 px-2.5 py-'>
                    {numOfCartItems}
                  </Badge>
                  <i className='fa-solid fa-cart-shopping text-4xl text-gray-700'></i>
                </Link>
              </div>
              <div>
                <h1 className='text-blue-500 font-bold'>Welcome {session.user.name}</h1>

                <button className='cursor-pointer pt-2' onClick={() => signOut({
                  callbackUrl: "/login"
                })}>
                  Logout
                </button>
              </div>

            </div>
          </>}
          {status === "unauthenticated" && <> <div>
            <Link className='hidden md:block' href="/login">
              Login
            </Link>
          </div>
            <div>
              <Link className='hidden md:block' href="/register">
                Register
              </Link>
            </div></>}


        </div>
      </div>
            {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-center text-center">
          {status === "authenticated" && <>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
            <Link href="/allorders" onClick={() => setIsOpen(false)}>All Orders</Link>
            <Link href="/wishList" onClick={() => setIsOpen(false)}>Wish list</Link>
            <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link href="/brands" onClick={() => setIsOpen(false)}>Brands</Link>
          </>}

          

          {status === "unauthenticated" && <>
            <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
          </>}
        </div>
      )}
    
    </div>
  )
}

export default Navbar
