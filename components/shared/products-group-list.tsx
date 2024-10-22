'use client';

import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
   title: string,
   items: any[]
   categoryId: number
   className?: string,
   listClassName?: string,
}

export const ProductsGroupList = ({ title, items, className, listClassName, categoryId }: Props) => {
   const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
   const intersectionRef = useRef(null);
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.4,
   });

   useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveCategoryId(categoryId);
      }
   }, [intersection?.isIntersecting]);

   return (
      <div className={className} id={title} ref={intersectionRef}>
         <Title text={title} size="lg" className="font-extrabold mb-5" />
         <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((item) => (
               <ProductCard
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.items[0].price}
               />
            ))}
         </div>
      </div>
   );
};
