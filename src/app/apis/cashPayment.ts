"use server"

import { getMyToken } from "@/utilities/token";
import axios from "axios";

export async function GetCashPayment(id : string ,values:object){


        const token =await getMyToken()

        
        

        if(!token){
            throw Error("Login First")
        }

        const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}`,values,{
            headers:{
                token :token as string
            }
        })
        return data
}