import { Category } from "@prisma/client"
import { Categories } from "./categories"
import { Container } from "./container"
import { SortPopup } from "./sort-popup"

interface Props {
   categories: Category[]
   className?: string
}

export const TopBar = ({ className, categories }: Props) => {
   return (
      <div className='sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10'>
         <Container className='flex items-center justify-between'>
            <Categories categories={categories} />
            <SortPopup />
         </Container>
      </div>
   )
}