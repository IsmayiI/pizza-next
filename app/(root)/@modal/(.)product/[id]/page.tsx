import { Container, GroupVariants, ProductImage, Title } from "@/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"

interface Props {
   params: { id: string }
}

export default async function ProductPage({ params: { id } }: Props) {
   return <h1>PRODUCT {id}</h1>
}