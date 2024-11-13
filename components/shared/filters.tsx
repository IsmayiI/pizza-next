'use client'

import { useFilterIngredients } from "@/hooks"
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { RangeSlider } from "./range-slider"
import { Title } from "./title"
import { useEffect, useRef, useState } from "react"
import { useSet } from "react-use"
import qs from "qs"
import { useRouter, useSearchParams } from "next/navigation"

interface Props {
   className?: string
}

interface PriceProps {
   priceFrom?: number
   priceTo?: number
}

interface Queryfilters extends PriceProps {
   sizes: string
   pizzaTypes: string
   ingredients: string
}

export const Filters = ({ className }: Props) => {
   const searchParams = useSearchParams() as unknown as Map<keyof Queryfilters, string>
   const router = useRouter()
   const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients(searchParams.get('ingredients')?.split(','))
   const [price, setPrice] = useState<PriceProps>({
      priceFrom: Number(searchParams.get('priceFrom')) || undefined,
      priceTo: Number(searchParams.get('priceTo')) || undefined
   })

   const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get("sizes")?.split(',') || []));
   const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []));



   useEffect(() => {

      const filters = {
         ...price,
         sizes: Array.from(sizes),
         pizzaTypes: Array.from(pizzaTypes),
         ingredients: Array.from(selectedIngredients),
      }

      const query = qs.stringify(filters, {
         arrayFormat: "comma"
      })

      router.push(`?${query}`, { scroll: false })

   }, [pizzaTypes, sizes, price, selectedIngredients])


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
               value={[price.priceFrom || 0, price.priceTo || 1000]}
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
            selected={selectedIngredients}
         />
      </div>
   )
}