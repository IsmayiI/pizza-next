import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';

interface Props {
   title: string,
   items: any[]
   categoryId: number
   className?: string,
   listClassName?: string,
}

export const ProductsGroupList = ({ title, items, className, listClassName, categoryId }: Props) => {
   return (
      <div className={className}>
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
