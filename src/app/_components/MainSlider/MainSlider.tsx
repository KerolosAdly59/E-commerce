"use client"
import Image from 'next/image'
import React from 'react'
import banner1 from './../../../src/screens/slider/grocery-banner.png'     
import banner2 from './../../../src/screens/slider/grocery-banner-2.jpeg'     
import slider1 from './../../../src/screens/slider/slider-image-1.jpeg'     
import slider2 from './../../../src/screens/slider/slider-image-2.jpeg'     
import slider3 from './../../../src/screens/slider/slider-image-3.jpeg'     
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

const MainSlider = () => {
    
  return (
    <div className='mb-10 flex bg-amber-100 justify-between'>
      <div className='w-2/3'>
      <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          speed={500}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
      <SwiperSlide>
        <Image src={slider1} alt='' className='h-[400px] object-cover' />
       </SwiperSlide>
      <SwiperSlide>
        <Image src={slider2} alt='' className='h-[400px] object-cover' />
       </SwiperSlide>
      <SwiperSlide>
        <Image src={slider3} alt='' className='h-[400px] object-cover' />
       </SwiperSlide>


    </Swiper>
      </div>
      <div className='w-1/3'>
      <Image className='h-[200px] object-cover' src={banner1} alt='' />
      <Image className='h-[200px] object-cover' src={banner2} alt='' />
      </div>
    </div>
  )
}

export default MainSlider
