import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { categories } from '@/lib/constants';
import { Category } from '@/lib/types';
import { cn } from '@/lib/utils';

const Categories = () => {
  return (
    <MaxWidthWrapper>
      <section className="my-16 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category: Category) => (
            <Link
              key={category.id}
              href={`/blog?category=${category.slug}`}
              className={cn("px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center text-center font-medium shadow-sm hover:shadow-md")}>
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Categories;