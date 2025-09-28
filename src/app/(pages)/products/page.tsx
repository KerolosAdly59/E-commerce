import AddInputSearch from '@/app/_components/AddInputSearch/AddInputSearch'
import getAllProducts from '@/app/apis/allProducts'
import React from 'react'




const Products = async () => {
    const data = await getAllProducts()

    
  
  
  return (
<>
<head>
       <title> Products</title>
    </head>
    <div className="px-5 md:px-0 my-12 w-full md:w-[80%] mx-auto bg-white">
      <div className="flex flex-wrap">
              <AddInputSearch products={data} />

        
      </div>
    </div>
    </>
  )
}

export default Products
