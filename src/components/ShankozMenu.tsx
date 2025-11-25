import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BurgerItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const burgerItems: BurgerItem[] = [
  {
    id: '1',
    name: 'Classic Shankoz Burger',
    description: 'Our signature beef patty, fresh lettuce, tomato, onion, pickles, and Shankoz sauce.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Spicy Inferno Burger',
    description: 'Fiery jalapeños, pepper jack cheese, crispy onions, and a spicy ghost pepper aioli.',
    price: '$14.49',
    image: 'https://images.unsplash.com/photo-1627997970030-f70bb07833f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Mushroom Swiss Delight',
    description: 'Sautéed mushrooms, melted Swiss cheese, caramelized onions, and garlic aioli.',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1605789725732-c6517a618f92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    name: 'BBQ Bacon Beast',
    description: 'Crispy bacon, tangy BBQ sauce, cheddar cheese, and onion rings on a brioche bun.',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    name: 'Vegan Garden Burger',
    description: 'Plant-based patty, fresh avocado, sprouts, vegan mayo, and a whole wheat bun.',
    price: '$13.49',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    name: 'Double Trouble Burger',
    description: 'Two juicy beef patties, double cheese, extra pickles, and our special Shankoz sauce.',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1596200213076-2e557b667246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

export function ShankozMenu() {
  return (
    <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Shankoz Burger Menu
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Taste the difference with our handcrafted burgers made from the freshest ingredients.
            </p>
          </div>
        </div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-4">
          {burgerItems.map((item, i) => (
            <BentoGridItem
              key={item.id}
              className={`
                col-span-1 
                ${i === 0 || i === 3 ? 'md:col-span-2' : ''}
                ${i === 1 || i === 4 ? 'md:col-span-1' : ''}
                ${i === 2 || i === 5 ? 'md:col-span-1' : ''}
              `}
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 flex flex-col items-start p-4 md:p-6 pb-2">
                  <CardTitle className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-300 drop-shadow-md">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-grow p-4 md:p-6 pt-0">
                  {/* Additional content if needed */}
                </CardContent>
                <CardFooter className="relative z-10 flex justify-between items-center p-4 md:p-6 pt-2">
                  <span className="text-3xl font-extrabold text-white drop-shadow-lg">
                    {item.price}
                  </span>
                  <Button variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
