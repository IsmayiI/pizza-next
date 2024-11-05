'use client'

import { useFilterIngredients } from "@/hooks"
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { FilterCheckbox } from "./filter-checkbox"
import { RangeSlider } from "./range-slider"
import { Title } from "./title"

interface Props {
   className?: string
}

export const Filters = ({ className }: Props) => {
   const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()

   const items = ingredients.map((item) => ({
      text: item.name,
      value: String(item.id),
      type: 'ingredient',
   }))


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
               <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
               <Input type="number" min={100} max={1000} placeholder="1000" />
            </div>
            <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
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