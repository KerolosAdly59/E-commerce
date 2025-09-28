"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"




const ForgetPassword = () => {


    const forgetPasswordSchema = z.object({
        email: z.string().min(1,"email is required").email("invalid email address"),
    })
    type ForgetPasswordType = z.infer<typeof forgetPasswordSchema >

    const form = useForm<ForgetPasswordType>({
        defaultValues:{
            email:""
        },
        resolver:zodResolver(forgetPasswordSchema)
    })

const onSubmit = (values: ForgetPasswordType) => {
    console.log("Email submitted:", values.email)
  }




  return (
    <>

    <div className='w-full md:w-[85%] mx-auto my-15'>
      <h3 className='text-4xl font-semibold text-gray-800'>please enter your verification code</h3>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-5 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-normal text-[18px]'>Email</FormLabel>
              <FormControl>
                <Input className='py-6' placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="outline" type="submit" className="w-[20%] md:w-[9%] py-6 text-[20px] mt-3 text-green-700 border-green-700  hover:text-white hover:bg-green-700 transition-all duration-500">
          Verify
        </Button>
      </form>
    </Form>
    </div>
    </>
  )
}

export default ForgetPassword
