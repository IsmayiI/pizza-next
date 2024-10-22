import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
   return (
      <>
         <Container className="mt-10">
            <Title text="Все пиццы" size="lg" className="font-extrabold" />
         </Container>
         <TopBar />
         <Container className="mt-10 pb-14">
            <div className="flex gap-[80px]">

               {/* Фильтрация */}
               <div className="w-[250px]">
                  <Filters />
               </div>

               {/* Список товаров */}
               <div className="flex-1">
                  <div className="flex flex-col gap-16">
                     <ProductsGroupList title="Пиццы" categoryId={1} items={[
                        {
                           id: 1,
                           name: 'название',
                           imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                           items: [{ price: 100 }]
                        }
                     ]} />
                     <ProductsGroupList title="Закуски" categoryId={2} items={[
                        {
                           id: 2,
                           name: 'name',
                           imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                           items: [{ price: 200 }]
                        }
                     ]} />
                  </div>
               </div>

            </div>
         </Container>
      </>
   )
}
