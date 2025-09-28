import GetAllCategories from '@/app/apis/AllCategories'
import React from 'react'
import SwiperCAtegory from '../SwiperCategory/SwiperCategory'
import { category } from '@/types/categoey.type'

const CategorySlide = async () => {
    const data:category[] = await GetAllCategories()
  return (
    <div className='mb-3'>
      <SwiperCAtegory categories={data} />
      
    </div>
  )
}

export default CategorySlide
