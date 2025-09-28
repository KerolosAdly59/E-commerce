"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { loginSchema, LoginSchemaType } from '@/app/schema/login.shema';
import {signIn} from "next-auth/react"
import Link from 'next/link'


const Login = () => {


  const form = useForm<LoginSchemaType>({
    defaultValues:{
      
    email:"",
    password:"",
      },
    resolver: zodResolver(loginSchema)

  })
   async function  handleRegister(values:LoginSchemaType){
    

    const res = await signIn("credentials",{
      email: values.email,
      password: values.password,
      redirect:false  ,
      callbackUrl: "/"
    })

    if(res?.ok){
      toast.success("login success",{
         position: "top-center",
         duration: 3000
       })
      
       window.location.href=res.url ||"/"

    }
    else {
       toast.error(res?.error,{
         position: "top-center",
         duration: 3000
       })

    }
    
  }
  return (

    
    <div className='mx-auto my-12 px-5 md:px-0 w-full md:w-1/2'>
      <p className='text-center font-bold text-3xl mb-10'>Register Form</p>
<Form  {...form}>
  <form  onSubmit={form.handleSubmit(handleRegister)}>
    
  <FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>

      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="" {...field} />
      </FormControl>
      <FormMessage />

    </FormItem>
  )}
/>  <FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>

      <FormLabel>password</FormLabel>
      <FormControl>
        <Input type="password" placeholder="" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  

<Link href="/forgetPassword" className='block mt-3 font-semibold hover:text-green-700 transition-all duration-700 text-[20px]'>forget your password ?</Link>
      <Button className=' w-full  md:w-1/8  text-[20px] md:absolute right-100 cursor-pointer bg-transparent border-1 border-black text-gray-800 hover:bg-transparent '>Login</Button>
  </form>
</Form>

    </div>
    
  )
}

export default Login
