"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category?: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="w-[300px] flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1 truncate">
          {product.name}
        </CardTitle>
        {product.category && (
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {product.category}
          </CardDescription>
        )}
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
            ${product.price.toFixed(2)}
          </p>
          {product.rating !== undefined && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => onAddToCart && onAddToCart(product.id)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
