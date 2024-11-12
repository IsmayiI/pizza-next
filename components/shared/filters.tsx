'use client'

import { useFilterIngredients } from "@/hooks"
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { FilterCheckbox } from "./filter-checkbox"
import { RangeSlider } from "./range-slider"
import { Title } from "./title"
import { useState } from "react"

interface Props {
   className?: string
}

interface PriceProps {
   priceFrom: number
   priceTo: number
}

export const Filters = ({ className }: Props) => {
   const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()
   const [price, setPrice] = useState<PriceProps>({ priceFrom: 0, priceTo: 1000 })

   const items = ingredients.map((item) => ({
      text: item.name,
      value: String(item.id),
      type: 'ingredient',
   }))

   const updatePrice = (name: keyof PriceProps, value: number) => {
      setPrice((prev) => ({
         ...prev,
         [name]: value,
      }))
   }


   return (
      <div className={className}>
         <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

         <div className="flex flex-col gap-4">
            <FilterCheckbox type="первый" text="Можно собирать" value="1" />
            <FilterCheckbox type="первый" text="Новинки" value="2" />
         </div>

         <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">
               <Input type="number" placeholder="0" min={0} max={1000}
                  value={`${price.priceFrom}`}
                  onChange={(e) => updatePrice('priceFrom', +e.target.value)} />
               <Input type="number" min={100} max={1000} placeholder="1000"
                  value={`${price.priceTo}`}
                  onChange={(e) => updatePrice('priceTo', +e.target.value)} />
            </div>
            <RangeSlider min={0} max={1000} step={10}
               value={[price.priceFrom, price.priceTo]}
               onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })} />
         </div>

         <CheckboxFiltersGroup
            className="mt-5"
            title="Ингредиенты"
            defaultItems={items}
            items={items}
            limit={6}
            loading={loading}
            onclickCheckbox={onAddId}
            selectedIds={selectedIds}
         />
      </div>
   )
}