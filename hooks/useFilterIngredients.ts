import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"

interface ReturnProps {
   ingredients: Ingredient[]
   loading: boolean
}


export const useFilterIngredients = (): ReturnProps => {
   const [ingredients, setIngredients] = useState<Ingredient[]>([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const getIngredients = async () => {
         setLoading(true)

         try {
            const data = await Api.ingredients.getAll()
            setIngredients(data)
         } catch (error) {
            console.error(error)
         }

         setLoading(false)
      }

      getIngredients()
   }, [])

   return { ingredients, loading }
}