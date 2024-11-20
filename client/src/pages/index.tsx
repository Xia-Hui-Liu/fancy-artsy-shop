import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
import Announcementbar from '@/components/Announcementbar';
import ServicesSection from '@/components/ServicesSection';
import CategoriesSection from '@/components/CategoriesSection';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="w-full">
      <Announcementbar />
      <Navbar cartCount={cart.length} />
      <div className="w-full">
        <Image
          src="/images/blackfriday.webp"
          alt="Black Friday Promotion"
          layout="responsive"
          width={600}
          height={300}
          priority
        />
      </div>
      <ServicesSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;
