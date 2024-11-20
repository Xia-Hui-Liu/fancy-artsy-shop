import React from 'react';
import Image from 'next/image';

const trendingProducts = [
  { name: 'Deep Pour Resin', src: '/images/trending/deepPourResin.jpg', alt: 'Deep Pour Resin' },
  { name: 'Crystal Clear Resin', src: '/images/trending/crystalClearResin.jpg', alt: 'Crystal Clear Resin' },
  { name: 'UV Resin Kit', src: '/images/trending/uvResinKit.jpg', alt: 'UV Resin Kit' },
  { name: 'Resin Molds', src: '/images/trending/resinMolds.jpg', alt: 'Resin Molds' },
];

const TrendingSection: React.FC = () => {
  return (
    <section className="w-full mt-8 px-4">
      <h3 className="text-2xl font-semibold text-center mb-6">Hottest Buying Trends</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trendingProducts.map((product, index) => (
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
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
