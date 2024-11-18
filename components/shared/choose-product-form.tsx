import { cn } from "@/lib/utils";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { GroupVariants } from "./group-variants";
import { Button } from "../ui";

interface Props {
   imageUrl: string;
   name: string;
   ingredients: any[];
   items?: any[];
   onClickAdd?: VoidFunction;
   className?: string
}

const textDetails = '30см, традиционное тесто 30'
const totalPrice = 350

export const ChooseProductForm = ({ className, imageUrl, ingredients, name, items, onClickAdd }: Props) => {

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
            <GroupVariants selectedValue="2" items={[
               {
                  name: "Маленькая",
                  value: "1",
               },
               {
                  name: "Средняя",
                  value: "2",
               },
               {
                  name: "Большая",
                  value: "3",
                  disabled: true
               }
            ]} />

            <Button
               className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
               Добавить в корзину за {totalPrice} ₽
            </Button>
         </div>
      </div>
   )
}