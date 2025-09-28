"use client"

import { GetCashPayment } from '@/app/apis/cashPayment'
import { GetOnlinePayment } from '@/app/apis/onlinePayment'
import { checkOutSchema, CheckOutSchemaType } from '@/app/schema/checkOut.schema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cartContext } from '@/Context/CartContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'



const CheckOut = () => {

    const router = useRouter()

    const { cartId, clearCart } = useContext(cartContext)!


    const form = useForm<CheckOutSchemaType>({
        defaultValues: {

            details: "",
            phone: "",
            city: ""

        },
        resolver: zodResolver(checkOutSchema)

    })
    
    async function handleCashPayment(values: CheckOutSchemaType) {

        try {
            const data = await GetCashPayment(cartId, values)
            toast.success(data.status, {
                position: "top-right",
                duration: 1000

            })
            clearCart()

            router.push("/allorders")

        } catch (error) {
            console.log(error);


        }

    }
    async function handleOnlinePayment(values: CheckOutSchemaType) {

        try {
            const data = await GetOnlinePayment(cartId, values)

            if (data.status === "success") {
                window.location.href = data.session.url
            }
        } catch (error) {
            console.log(error);


        }

    }


    return (
        <>
        
       
        <div className='w-full md:w-1/2 my-10 mx-auto px-5 md:px-0'>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(()=>{})} >
                    <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel > Details</FormLabel>
                                <FormControl>
                                    <Input type='text' {...field} className='mb-4' />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel > Phone</FormLabel>
                                <FormControl>
                                    <Input type='tel' min={11} {...field} className='mb-4' />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel > City</FormLabel>
                                <FormControl>
                                    <Input type='text' {...field} className='mb-4' />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button onClick={form.handleSubmit(handleCashPayment)} > Cash Payment</Button>
                    <Button onClick={form.handleSubmit(handleOnlinePayment)} className='ms-5'>Online Payment</Button>                </form>
            </Form>


        </div>
         </>
    )
}

export default CheckOut
