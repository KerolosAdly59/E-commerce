"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { category } from '@/types/categoey.type';

const SwiperCAtegory = ({categories}:{categories:category[]}) => {
  return (
    <div>
       <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={5}
          speed={300}
          loop= {true}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
      {categories.map( ( Category , idx:number)=> <SwiperSlide key={idx}>
          <Image width={500} height={500} src={Category.image} alt={Category.name} className='h-[200px] object-cover w-full'/>
          <h2 className='text-center font-bold text-gray-700 my-2'>{Category.name}</h2>
       </SwiperSlide>)}
      


    </Swiper>
    </div>
  )
}

export default SwiperCAtegory
