'use client'
import { cn } from "@/lib/utils"


type Variant = {
   name: string
   value: string
   disabled?: boolean
}

interface Props {
   items: readonly Variant[]
   onClick?: (value: Variant['value']) => void
   selectedValue?: Variant['value']
   className?: string
}

export const GroupVariants = ({ className, items, onClick, selectedValue }: Props) => {
   return (
      <div className={cn(className, 'flex justify-between p-1 rounded-3xl bg-[#F3F3F7]')}>
         {items.map((item) => (
            <button
               key={item.name}
               onClick={() => onClick?.(item.value)}
               className={cn('flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm', {
                  'bg-white shadow': item.value === selectedValue,
                  'text-gray-500 opacity-50 pointer-events-none': item.disabled,
               })}
            >
               {item.name}
            </button>
         ))}
      </div>
   )
}