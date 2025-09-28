import React from 'react'
import { Card } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { product } from '@/types/product.type';
import AddBtnCart from '../AddBtnCart/AddBtnCart';
import AddIconCart from '../AddIconCart/AddIconCart';

const HomeCard = ({ product }: { product: product }) => {
  return (

    <div className="p-3 w-full ms:w-1/2 md:w-1/3 lg:w-1/4 lx:w-1/5 bg-white">

      <div className="inner  ">

        <Card className="p-2 gap-2   border-0 shadow-[0px_0px_0px_0_#4fa74f] hover:shadow-[1px_1px_10px_0_#4fa74f] duration-400 group cursor-pointer">
          <Link href={`ProductDetails/${product.id}`}>
            <CardHeader className="p-0">
              <Image width={500} height={500} className="w-full" src={product.imageCover} alt={product.title} />

            </CardHeader>
            <CardContent className="p-0">
              <p className="font-bold text-[#4fa74f] mb-3">{product.category.name}</p>
              <p className="line-clamp-1">{product.title}</p>
            </CardContent>
            <CardFooter className="p-0">
              <div className="w-full flex justify-between items-center">
                <p>{product.price}</p>
                <p>{product.ratingsAverage}<i className="fa-solid fa-star text-yellow-300"></i></p>
              </div>
            </CardFooter>
          </Link>
          <div className='relative'>
            <div className='mx-auto w-[60%] my-1 translate-y-[400%] group-hover:translate-y-[0%] duration-500 opacity-0 group-hover:opacity-100 transform-all '>
              <AddBtnCart id={product.id} />
            </div>
            <AddIconCart id={product.id} />
          </div>
        </Card>

      </div>

    </div>

  )
}

export default HomeCard
