import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// UI Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Icons
import { ShoppingCart, Star } from 'lucide-react';

// Mock Product Data (replace with actual data fetching in a real application)
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Vintage Bluetooth Speaker',
    description: 'A classic design with modern sound quality. Enjoy your favorite tunes with a retro touch and powerful bass.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1543161642-0f1e8e8e7a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWxlY3Ryb25pY3MsY29uc3VtZXJfZWxlY3Ryb25pY3x8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1627883907409-f6224ce3f7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BlYWtlcixhdWRpb3x8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1505740420928-5e560c06f2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BlYWtlcixhdWRpb3x8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
    ],
    rating: 4.5,
    reviews: 120,
    availability: 'In Stock',
  },
  {
    id: '2',
    name: 'Smartwatch Pro X',
    description: 'Track your fitness, receive notifications, and stay connected with this advanced smartwatch. Featuring a vibrant display and long-lasting battery.',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c21hcnR3YXRjaHx8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1609100185121-6a2c00a0e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c21hcnR3YXRjaHx8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1579586337278-f7ad519823d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c21hcnR3YXRjaHx8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
    ],
    rating: 4.8,
    reviews: 350,
    availability: 'Low Stock',
  },
  {
    id: '3',
    name: 'Noise-Cancelling Headphones',
    description: 'Immerse yourself in pure audio with superior noise cancellation and comfortable earcups, perfect for travel or focused work.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06f2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhZHBob25lc3x8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1585298723682-7adabf47f408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhZHBob25lc3x8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1590650113899-c2ba655bc18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhZHBob25lc3x8fHx8fHwxNzIyNjYyOTc5&ixlib=rb-4.0.3&q=80&w=1080',
    ],
    rating: 4.2,
    reviews: 210,
    availability: 'In Stock',
  },
  {
    id: '4',
    name: 'Portable Power Bank',
    description: 'Never run out of battery again with this high-capacity portable power bank. Fast charging for all your devices.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1590650113899-c2ba655bc18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHBvd2VyJTIwYmFua3xlbnwwfHwwfHx8MTcwMTI3NTY1NXww&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1583483492864-4a4f89b9d3e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHBvd2VyJTIwYmFua3xlbnwwfHwwfHx8MTcwMTI3NTY1NXww&ixlib=rb-4.0.3&q=80&w=1080',
      'https://images.unsplash.com/photo-1579586337278-f7ad519823d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBvd2VyJTIwYmFua3xlbnwwfHwwfHx8MTcwMTI3NTY1NXww&ixlib=rb-4.0.3&q=80&w=1080'
    ],
    rating: 4.6,
    reviews: 500,
    availability: 'In Stock',
  }
];

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = params;

  const product = MOCK_PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    notFound(); // Use Next.js notFound for 404 pages
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-100px)]">
      <Card className="flex flex-col md:flex-row gap-8 p-6 md:p-10 shadow-lg dark:bg-zinc-900 dark:border-zinc-800">
        <div className="md:w-1/2 flex items-center justify-center">
          {/* Product Image Carousel */}
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={image}
                          alt={`${product.name} image ${index + 1}`}
                          width={500}
                          height={500}
                          className="object-cover rounded-md"
                          priority={index === 0} // Prioritize first image
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="md:w-1/2 space-y-6">
          <CardHeader className="p-0">
            <CardTitle className="text-4xl font-extrabold text-gray-900 dark:text-gray-50">
              {product.name}
            </CardTitle>
            <CardDescription className="text-md text-gray-600 dark:text-gray-400 mt-2">
              {product.description}
            </CardDescription>
          </CardHeader>

          <div className="flex items-center space-x-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`}
              />
            ))}
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            ${product.price.toFixed(2)}
          </div>

          <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Availability: <span className={product.availability === 'In Stock' ? 'text-green-600' : 'text-orange-500'}>{product.availability}</span>
          </div>

          <CardFooter className="flex p-0 pt-4">
            <Button className="w-full py-3 text-lg flex items-center gap-2 bg-primarylw hover:bg-primarylw/90 text-white">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
