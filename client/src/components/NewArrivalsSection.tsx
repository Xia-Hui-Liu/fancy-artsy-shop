import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchNewArrivals } from '@/services/api';
import { Product } from '@/types/product';


const NewArrivalsSection: React.FC = () => {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    const getNewArrivals = async () => {
      try {
        const arrivals = await fetchNewArrivals();
        console.log(arrivals);
        setNewArrivals(arrivals);
      } catch (error) {
        console.error('Failed to load new arrivals:', error);
      }
    };

    getNewArrivals();
  }, []);
  return (
    <section className="w-full mt-8 px-4">
      <h3 className="text-2xl font-semibold text-center mb-6">New Arrivals</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newArrivals.map((product, index) => (
          <div
            key={index}
            className="relative group rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-lg font-semibold">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSection;
