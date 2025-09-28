"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { product } from './../../../types/product.type'
import HomeCard from '../HomeCard/HomeCard';



const AddInputSearch  = ({ products }:{products:product[]}) => {
  const [search, setSearch] = useState<string>("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <Input
        className="w-full focus:shadow-[0px_0px_0px_4px] focus:shadow-blue-300  md:w-[80%] mx-auto my-3"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className='flex flex-wrap'>
      {filtered.map(function(product:product, idx:number) {
          return (<HomeCard key={idx} product={product} />
        )})}
        </div>
    </div>
  );
};

export default AddInputSearch;
