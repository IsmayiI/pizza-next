'use client'

import { Dialog } from "@/components/ui"
import { DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { IProductWithRelations } from "@/@types"
import { ChoosePizzaForm, ChooseProductForm } from "../forms"

interface Props {
   className?: string
   product: IProductWithRelations
}

export const ChooseProductModal = ({ className, product }: Props) => {
   const router = useRouter()
   const isPizzaForm = Boolean(product.items[0].pizzaType)

   return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
         <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
            {
               isPizzaForm
                  ? <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
                  : <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
            }
         </DialogContent>
      </Dialog>
   )
}