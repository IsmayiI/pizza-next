import { useRouter } from "next/navigation"
import { useEffect } from "react"
import qs from "qs"
import { IFilters } from "./use-filters"


export const useQueryFilters = ({ pizzaTypes, sizes, selectedIngredients, price }: IFilters) => {
   const router = useRouter()

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

}