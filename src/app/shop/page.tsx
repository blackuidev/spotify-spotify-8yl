"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ShopPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 scroll-m-20 tracking-tight lg:text-5xl">
        Our Products
      </h1>

      <div className="max-w-xl mx-auto mb-10">
        <Input
          placeholder="Search products..."
          className="w-full p-4 text-lg border-2 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primarylw focus:border-transparent transition-all duration-200"
        />
      </div>

      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
        Discover our wide range of amazing products. More coming soon!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for future product cards */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card
            key={item}
            className="flex flex-col justify-between items-center p-6 bg-white dark:bg-[#1d1c1cff] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-gray-200 dark:border-[#1a1b1b]"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold mb-2">
                Product {item}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Image</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A brief description of product {item}, highlighting its key features.
              </p>
              <Button className="w-full bg-primarylw hover:bg-primarylw/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" className="text-lg px-8 py-3 rounded-full border-2 border-primarylw text-primarylw hover:bg-primarylw hover:text-white transition-colors duration-200">
          Load More Products
        </Button>
      </div>
    </div>
  );
}
