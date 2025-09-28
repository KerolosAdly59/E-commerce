import * as z from "zod";

export const checkOutSchema = z.object({

    details: z.string().min(5,"min length5").max(30,"max length30"),
    phone: z.string().regex(/^01[0125][0-9]{8}/,"invalid phone number"),
    city: z.string().min(3,"min length3").max(15,"max length 15")
})


export type CheckOutSchemaType =z.infer<typeof checkOutSchema>