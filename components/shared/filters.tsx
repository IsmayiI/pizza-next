'use client'

import { useFilterIngredients } from "@/hooks"
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { RangeSlider } from "./range-slider"
import { Title } from "./title"
import { useState } from "react"
import { useSet } from "react-use"

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

   const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
   const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));


   const items = ingredients.map((item) => ({
      text: item.name,
      value: String(item.id),
   }))

   const updatePrice = (name: keyof PriceProps, value: number) => {
      setPrice((prev) => ({
         ...prev,
         [name]: value,
      }))
   }


   console.log(selectedIds);



   return (
      <div className={className}>
         <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

         {/* Тип теста */}
         <CheckboxFiltersGroup
            className="mb-5"
            title="Тип теста"
            name="pizzaTypes"
            onclickCheckbox={togglePizzaTypes}
            selected={pizzaTypes}
            items={[
               { text: 'Тонкое', value: '1' },
               { text: 'Традиционное', value: '2' },
            ]}
         />

         {/* Размеры */}
         <CheckboxFiltersGroup
            className="mb-5"
            title="Размеры"
            name="sizes"
            onclickCheckbox={toggleSizes}
            selected={sizes}
            items={[
               { text: '20 см', value: '20' },
               { text: '30 см', value: '30' },
               { text: '40 см', value: '40' },
            ]}
         />

         {/* Цена */}
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

         {/* Ингредиенты */}
         <CheckboxFiltersGroup
            className="mt-5"
            title="Ингредиенты"
            name="ingredients"
            defaultItems={items}
            items={items}
            limit={6}
            loading={loading}
            onclickCheckbox={onAddId}
            selected={selectedIds}
         />
      </div>
   )
}