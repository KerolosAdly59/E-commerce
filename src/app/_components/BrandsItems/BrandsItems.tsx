"use client"

import GetSpecificBrand from '@/app/apis/specificBrands'
import { Button } from '@/components/ui/button'
import { Brands } from '@/types/brands'
import Image from 'next/image'
import React, { useState } from 'react'

const BrandsItems = ({ brands }: { brands: Brands[] }) => {

  const [details, setDetails] = useState<any>([])
  const [selectedBrand, setSelectedBrand] = useState<any>(null);


  async function GetBrandDetails(id: any) {

    const data = await GetSpecificBrand(id)
    console.log(data);
    setDetails(data)

  }


  return (
    <div>
      <div className='w-full flex flex-wrap relative'>

        {brands.map((brand, idx) => (
          <div key={idx} onClick={() => brand._id && GetBrandDetails(brand._id)} className='p-2 w-full md:w-1/4 '>
            <div onClick={() => setSelectedBrand(brand)} className='m-1 border-2 rounded-[7px] hover:shadow-[1px_1px_10px_0_#4fa74f] duration-400'>
              <div className=''>
                <Image className='w-full' width={200} height={200} src={brand.image} alt={brand.name} />
              </div>
              <p className='text-center pb-8  '>{brand.name}</p>
            </div>
          </div>
        ))}


      </div>
      {selectedBrand && (
        <div  onClick={()=>setSelectedBrand(null)} className='fixed inset-0 flex items-center justify-center bg-gray-200/50 bg-opacity-50 z-50'>
          <div onClick={(e) => e.stopPropagation()} className='bg-white py-7 rounded-[8px]   shadow-lg relative bottom-40  max-w-md w-full'>
            <i onClick={()=>setSelectedBrand(null)} className='fas fa-close text-[24px]  text-gray-600 right-5 absolute top-2 hover:text-black cursor-pointer '></i>
            <div className='flex flex-wrap justify-between items-center  py-5 border-y-2 my-4  '>
              <div className='px-8'>
                <p className=' text-center py-2 text-4xl font-medium text-green-600'>{details.name}</p>
                <p className='    '>{details.slug}</p>

              </div>
              <div className='w-1/2'>
                <Image className='w-full' width={400} height={400} src={details.image} alt={details.name} />
              </div>
            </div>
            <div className='mb-9'>
              <Button onClick={() => setSelectedBrand(null)} className='cursor-pointer absolute right-5 bg-gray-600 text-[20px]'>Close</Button>

            </div>
          </div>
        </div>

      )}


    </div>
  )
}

export default BrandsItems
