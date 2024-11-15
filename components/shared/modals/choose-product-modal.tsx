'use client'

import { Dialog } from "@/components/ui"
import { DialogContent } from "@/components/ui/dialog"
import { Title } from "../title"
import { Product } from "@prisma/client"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface Props {
   className?: string
   product: Product
}

export const ChooseProductModal = ({ className, product }: Props) => {
   const router = useRouter()

   return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
         <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
            <Title text={product.name} />
         </DialogContent>
      </Dialog>
   )
}