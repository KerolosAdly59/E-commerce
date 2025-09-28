"use client"
import React, { useState } from 'react'
import Category from '@/app/_components/Category/Category'
import SpecificCategory from '../SpecificCategory/SpecificCategory'
import { category } from '@/types/categoey.type'

export default function CategoriesClient({ categories }: { categories: category[] }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)

  return (
    <div>
      <div className="flex flex-wrap w-full ">
        {categories.map((cat) => (
          <div className='p-3 w-full ms:w-1/2 md:w-1/3' key={cat._id}  onClick={() => setSelectedCategoryId(cat._id ) }>
            <Category category={cat}  />
          </div>
        ))}
      </div>

      {selectedCategoryId && (
        <SpecificCategory categoryId={selectedCategoryId}   />
      )}
    </div>
  )
}
