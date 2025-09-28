
import CategoriesClient from '@/app/_components/CategoriesClient/CategoriesCleint';
import GetCategory from '@/app/apis/category'
import React from 'react'




const Categories = async () => {

  const data = await GetCategory()

  

  

  return (

    <>
    <head>
       <title>  Categories</title>
    </head>
    <div className='md:w-[85%] mx-auto bg-white'>
                    <CategoriesClient categories={data}/>

    </div>
</>

  )
}


export default Categories
