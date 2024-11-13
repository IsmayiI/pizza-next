import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useSet } from "react-use"

interface IPrice {
   priceFrom?: number
   priceTo?: number
}

interface IQueryfilters extends IPrice {
   sizes: string
   pizzaTypes: string
   ingredients: string
}

export interface IFilters {
   pizzaTypes: Set<string>
   sizes: Set<string>
   selectedIngredients: Set<string>
   price: IPrice
}

interface ReturnProps extends IFilters {
   togglePizzaTypes: (id: string) => void
   toggleSizes: (id: string) => void
   toggleIngredients: (id: string) => void
   setPrice: (price: IPrice) => void
   updatePrice: (name: keyof IPrice, value: number) => void
}

export const useFilters = (): ReturnProps => {
   const searchParams = useSearchParams() as unknown as Map<keyof IQueryfilters, string>

   const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || []));

   const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get("sizes")?.split(',') || []));

   const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []));

   const [price, setPrice] = useState<IPrice>({
      priceFrom: Number(searchParams.get('priceFrom')) || undefined,
      priceTo: Number(searchParams.get('priceTo')) || undefined
   })

   const updatePrice = (name: keyof IPrice, value: number) => {
      setPrice((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   return {
      togglePizzaTypes, pizzaTypes,
      toggleSizes, sizes,
      toggleIngredients, selectedIngredients,
      setPrice, updatePrice, price,
   }
}