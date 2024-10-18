import { Categories } from "./categories"
import { Container } from "./container"
import { SortPopup } from "./sort-popup"

interface Props {
   className?: string
}

export const TopBar = ({ className }: Props) => {
   return (
      <div className='sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10'>
         <Container className='flex items-center justify-between'>
            <Categories />
            <SortPopup />
         </Container>
      </div>
   )
}