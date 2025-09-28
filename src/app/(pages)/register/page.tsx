"use client"
import { registerSchema, RegisterSchemaType } from '@/app/schema/register.Schema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'



const register = () => {
  const router = useRouter();


  const form = useForm<RegisterSchemaType>({
    defaultValues:{
      name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    },
    resolver: zodResolver(registerSchema)

  })
   async function  handleRegister(values:RegisterSchemaType){
    try {
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
      toast.success(data.message,{
        position: "top-center",
        duration: 3000
      })
      router.push("/login")
      
    } catch (error:any) {
      console.log(error,"error")
      toast.error(error.response.data.message,{
        position:"top-center",
        duration:3000
      })

      
    }
  }
  return (
    <>
    <head>
       <title>  Register</title>
    </head>
    <div className='mx-auto my-12 px-5 md:px-0 w-full md:w-1/2'>
      <p className='text-center font-bold text-3xl mb-10'>Register Form</p>
<Form  {...form}>
  <form  onSubmit={form.handleSubmit(handleRegister)}>
      <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>

      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input type="text" placeholder="" {...field} />
      </FormControl>
      <FormDescription></FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
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
/>  <FormField
  control={form.control}
  name="rePassword"
  render={({ field }) => (
    <FormItem>

      <FormLabel>confirm password</FormLabel>
      <FormControl>
        <Input type="password" placeholder="" {...field} />
      </FormControl>
            <FormDescription></FormDescription>

      <FormMessage />
    </FormItem>
  )}
/>  <FormField
  control={form.control}
  name="phone"
  render={({ field }) => (
    <FormItem>

      <FormLabel>phone namber</FormLabel>
      <FormControl>
        <Input type="tel" placeholder="" max={11} {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
      <Button className='my-5  w-1/8 text-[20px] absolute right-100 cursor-pointer bg-transparent border-1 border-black text-gray-800 hover:bg-transparent'>Register</Button>
  </form>
</Form>

    </div>
    </>
  )
}

export default register
