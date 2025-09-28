import GetAllBrands from '@/app/apis/allBrands'
import React from 'react'
import BrandsItems from '../../_components/BrandsItems/BrandsItems';



const Brands =async () => {

  const data=await GetAllBrands()
  console.log(data);
  
  return (
    <>
    <head>
       <title>  Brands</title>
    </head>
    
       <div className='md:w-[85%] mx-auto bg-white'>
            <h1 className='text-5xl text-center text-green-600 font-semibold py-10' >All Brands</h1>
            <BrandsItems brands={data} />
          </div>
          </>
    
  )
}

export default Brands
