import { Container, ProductImage } from "@/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"

interface Props {
   params: { id: string }
}

export default async function ProductPage({ params: { id } }: Props) {
   const product = await prisma.product.findUnique({ where: { id: Number(id) } })

   if (!product) notFound()

   return (
      <Container className="flex flex-col my-10">
         <ProductImage imageUrl={product.imageUrl} size={40} />
      </Container>
   )
}