import { cn } from "@/lib/utils"


interface Props {
   className?: string
   imageUrl: string
   size: number
}

export const ProductImage = ({ className, imageUrl, size }: Props) => {
   return (
      <div className={className}>
         <img
            src={imageUrl}
            alt="Logo"
            className={cn("relative left-2 top-2 transition-all duration-300", {
               'w-[300px] h-[300px]': size === 20,
               'w-[400px] h-[400px]': size === 30,
               'w-[500px] h-[500px]': size === 40,
            })}
         />

         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 border-gray-200 rounded-full w-[450px] h-[450px]"></div>
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 border-gray-100 rounded-full w-[370px] h-[370px]"></div>
      </div>
   )
}