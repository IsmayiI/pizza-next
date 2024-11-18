import { Ingredient, Product, ProductItem } from "@prisma/client";

export interface IProductWithRelations extends Product {
   items: ProductItem[]
   ingredients: Ingredient[]
}