"use client"
import { useEffect, useState } from "react"
import GetSpecificCategory from "@/app/apis/specificCategory"
import { FormItem } from "@/components/ui/form"
import GetCategory from "@/app/apis/category"
import { category } from "@/types/categoey.type"

export default function SpecificCategory({ categoryId }: { categoryId: string }) {
  const [details, setDetails] = useState<any[]>([])
  const [nameCategory, setNameCategory] = useState<any>({})

  useEffect(() => {
    async function fetchDetails() {
      const data = await GetSpecificCategory()
      const categories = await GetCategory()
      
      const category :category = categories.find((item: any) => item._id === categoryId)
      const found = data.filter((item: any) => item.category === categoryId)
      setDetails(found)
      setNameCategory(category)

      
      
    }
    fetchDetails()
  }, [categoryId])

  return (
    <div className="mt-6 p-4  rounded">
          <h2 className="text-center font-bold my-2 text-green-500 text-3xl">{nameCategory.name}</h2>
      {details.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div>
          
          <div className="flex flex-wrap   w-full">
          {details.map((item, i) => (
            <div key={i} className="p-1 w-full ms:w-1/2 md:w-1/3 ">
            <p className="    border-[3px] rounded-[7px] p-2 hover:shadow-[#4fa74f] hover:shadow-md" >{item.name}</p>
            </div>
          ))}
          </div>
          </div>
        
      )}
    </div>
  )
}
