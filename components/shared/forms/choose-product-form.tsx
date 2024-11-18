import { cn } from "@/lib/utils";
import { Title } from "../title";
import { Button } from "@/components/ui";


interface Props {
   imageUrl: string;
   name: string;
   onClickAdd?: VoidFunction;
   className?: string
}

const textDetails = '30см, традиционное тесто 30'
const totalPrice = 350

export const ChooseProductForm = ({ className, imageUrl, name, onClickAdd }: Props) => {

   return (
      <div className={cn(className, 'flex flex-1')}>
         <div className="flex items-center justify-center flex-1 relative w-full">
            <img
               src={imageUrl}
               alt={name}
               className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
            />
         </div>

         <div className="w-[490px] p-7 bg-[#FCFCFC]">
            <Title text={name} size="md" className="font-extrabold mb-1" />
            <p className="text-gray-400">{textDetails}</p>
            <Button
               className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
               Добавить в корзину за {totalPrice} ₽
            </Button>
         </div>
      </div>
   )
}