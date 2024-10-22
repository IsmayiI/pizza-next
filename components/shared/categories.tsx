'use client'
import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category";

interface Props {
   className?: string
}

const cats = [
   { title: 'Пиццы', id: 1 },
   { title: 'Комбо', id: 2 },
   { title: 'Закуски', id: 3 },
   { title: 'Коктейли', id: 4 },
   { title: 'Кофе', id: 5 },
   { title: 'Напитки', id: 6 },
   { title: 'Десерты', id: 7 }
]

export const Categories = ({ className }: Props) => {
   const activeId = useCategoryStore((state) => state.activeId)

   return (
      <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
         {cats.map(({ id, title }) => (
            <a
               href={`#${title}`}
               key={id}
               className={cn(
                  'flex items-center font-bold h-11 rounded-2xl px-5',
                  activeId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
               )}
            >
               <button>{title}</button>
            </a>
         ))}
      </div>
   )
}