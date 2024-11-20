import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { title: 'EPOXY RESIN', href: '/epoxy-resin', src: '/images/castingResin/crystalClearEpoxyResin/Crystal-Clear-Epoxy-Resin32.jpeg', alt: 'Epoxy Resin' },
  { title: 'UV RESIN', href: '/uv-resin', src: '/images/castingResin/crystalClearEpoxyResin/Crystal-Clear-Epoxy-Resin32.jpeg', alt: 'UV Resin' },
  { title: 'RESIN MOLDS', href: '/resin-molds', src: '/images/castingResin/crystalClearEpoxyResin/Crystal-Clear-Epoxy-Resin32.jpeg', alt: 'Resin Molds' },
  { title: 'TOOLS', href: '/diy-tools-accessories', src: '/images/castingResin/crystalClearEpoxyResin/Crystal-Clear-Epoxy-Resin32.jpeg', alt: 'DIY Tools & Accessories' },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="w-full mt-8 px-4">
      <h3 className="text-2xl font-semibold text-center mb-6">Shop by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={category.href} passHref>
            <div className="block text-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center mx-auto hover:scale-125">
                <Image
                  src={category.src}
                  alt={category.alt}
                  width={80}
                  height={80}
                  className="object-contain transition-all duration-300"
                />
              </div>
              <h6 className="mt-2 text-sm md:text-base font-semibold">{category.title}</h6>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
