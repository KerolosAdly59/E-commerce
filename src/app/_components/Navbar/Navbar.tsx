"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import logo from "./../../../src/screens/freshcart-logo.svg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { cartContext } from '@/Context/CartContext';
import { Badge } from "@/components/ui/badge"

const Navbar = () => {

  const { data: session, status } = useSession()

  const { numOfCartItems }: any = useContext(cartContext)


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
        <ul className='flex flex-col md:flex-row gap-6 text-center items-center ms-5'>

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
          {status === "unauthenticated" && <Image src={logo} alt='logo' />}

        </ul>


        {/* icons && buttons */}
        <div className='flex flex-col md:flex-row gap-2 text-center items-center'>


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
                <h1 className='text-blue-500 font-bold'>{session.user.name}</h1>

                <button className='cursor-pointer' onClick={() => signOut({
                  callbackUrl: "/login"
                })}>
                  Logout
                </button>
              </div>

            </div>
          </>}
          {status === "unauthenticated" && <> <div>
            <Link href="/login">
              Login
            </Link>
          </div>
            <div>
              <Link href="/register">
                Register
              </Link>
            </div></>}


        </div>
      </div>
    </div>
  )
}

export default Navbar
