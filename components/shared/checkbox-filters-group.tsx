'use client'

import { ChangeEvent, useState } from "react";
import { Input } from "../ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

interface Item extends FilterCheckboxProps { }

interface Props {
   title: string;
   items: Item[];
   defaultItems: Item[];
   limit?: number;
   searchInputPlaceholder?: string;
   className?: string;
   onChange?: (values: string[]) => void;
   defaultValue?: string[];
}

export const CheckboxFiltersGroup = ({
   title,
   items,
   defaultItems,
   limit = 5,
   searchInputPlaceholder = 'Поиск...',
   className,
   onChange,
   defaultValue,
}: Props) => {

   const [showAll, setShowAll] = useState(false)
   const [seacrh, setSeacrh] = useState('')

   const list = showAll
      ? items.filter(item => item.text.toLowerCase().includes(seacrh.toLowerCase()))
      : defaultItems.slice(0, limit)

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
                  onCheckedChange={(ids) => console.log(ids)}
                  checked={false}
                  key={index}
                  value={item.value}
                  text={item.text}
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