import React from 'react';
import Image from 'next/image';

const newArrivals = [
  { name: 'Resin Starter Kit', src: '/images/newArrivals/resinStarterKit.jpg', alt: 'Resin Starter Kit' },
  { name: 'Color Pigments', src: '/images/newArrivals/colorPigments.jpg', alt: 'Color Pigments' },
  { name: 'Coating Resin', src: '/images/newArrivals/coatingResin.jpg', alt: 'Coating Resin' },
  { name: 'Silicone Molds', src: '/images/newArrivals/siliconeMolds.jpg', alt: 'Silicone Molds' },
];

const NewArrivalsSection: React.FC = () => {
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
              src={product.src}
              alt={product.alt}
              width={300}
              height={300}
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
