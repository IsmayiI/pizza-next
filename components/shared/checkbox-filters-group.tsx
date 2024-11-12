'use client'

import { ChangeEvent, useState } from "react";
import { Input, Skeleton } from "../ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

interface Item extends FilterCheckboxProps { }

interface Props {
   title: string;
   name: string;
   items: Item[];
   defaultItems?: Item[];
   selected?: Set<string>;
   limit?: number;
   loading?: boolean;
   searchInputPlaceholder?: string;
   className?: string;
   onclickCheckbox?: (id: string) => void;
   defaultValue?: string[];
}

export const CheckboxFiltersGroup = ({
   title,
   name,
   items,
   defaultItems,
   selected,
   limit = 5,
   loading,
   searchInputPlaceholder = 'Поиск...',
   className,
   onclickCheckbox,
   defaultValue,
}: Props) => {

   const [showAll, setShowAll] = useState(false)
   const [seacrh, setSeacrh] = useState('')

   if (loading) {
      return (
         <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {Array.from({ length: limit }).map((_, index) => (
               <Skeleton key={index} className="h-6 mb-4 rounded-[8px] bg-gray-100" />
            ))}

            <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />

         </div>
      )
   }

   const list = showAll
      ? items.filter(item => item.text.toLowerCase().includes(seacrh.toLowerCase()))
      : (defaultItems || items).slice(0, limit)

   const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSeacrh(e.target.value)
   }

   return (
      <div className={className}>
         <p className="font-bold mb-3">{title}</p>

         {showAll && (
            <div className="mb-5">
               <Input
                  value={seacrh}
                  onChange={onChangeSearch}
                  placeholder={searchInputPlaceholder}
                  className="bg-gray-50 border-none" />
            </div>
         )}

         <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {list.map((item, index) => (
               <FilterCheckbox
                  onCheckedChange={() => onclickCheckbox?.(item.value)}
                  checked={selected?.has(item.value)}
                  key={index}
                  value={item.text}
                  text={item.text}
                  name={name}
                  endAdornment={item.endAdornment}
               />
            ))}
         </div>

         {items.length > limit && (
            <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
               <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                  {showAll ? 'Скрыть' : '+ Показать все'}
               </button>
            </div>
         )}
      </div>
   )
}