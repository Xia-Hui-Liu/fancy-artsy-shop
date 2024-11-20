// import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import ProductCard from '../components/ProductCard';
// import { fetchProducts } from '../services/api';
import Navbar from '../components/navbar/Navbar';
import { useCart } from '../context/CartContext';
// import { Product } from '../types/product';
// import PhotoAlbum from '@/components/photoalbum/photoalbum';
import Announcementbar from '@/components/Announcementbar';
import { FaPlane } from 'react-icons/fa';
import { FaRetweet as FaReturn } from 'react-icons/fa'; 
import { FaServicestack } from 'react-icons/fa';

const Home: React.FC = () => {
  const { cart, addToCart } = useCart();
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetchProducts()
  //     .then((data) => setProducts(data))
  //     .catch(console.error); 
  // }, []);

  // const images = products.map(i => i.imageUrl);

  return (
    <div className="w-full">
      <Announcementbar />
      <Navbar cartCount={cart.length} />
      <div className="w-full"> 
        <Image 
          src='/images/blackfriday.webp' 
          alt='black friday' 
          layout='responsive'
          width={600} 
          height={300}  
          priority 
        />
      </div>
      <div>
        <div className="overflow-x-auto w-full mt-2">
          <div className="flex flex-nowrap justify-center items-center p-2 md:justify-center lg:justify-center">
            <div className="flex flex-col items-center m-2 md:mx-10 lg:mx-12">
              <FaPlane className="text-xl mb-2" />
              <p className="text-xs sm:text-sm md:text-lg font-medium">Free Shipping</p>
              <p className="text-xs sm:text-xs md:text-sm text-gray-600">Over $30 for US</p>
            </div>
            <div className="flex flex-col items-center m-2 md:mx-10 lg:mx-12">
              <FaReturn className="text-xl mb-2" />
              <p className="text-xs sm:text-sm md:text-lg font-medium">Returns & Refunds</p>
              <p className="text-xs sm:text-xs md:text-sm text-gray-600">Within 30 days</p>
            </div>
            <div className="flex flex-col items-center m-2 md:mx-10 lg:mx-12">
              <FaServicestack className="text-xl mb-2" />
              <p className="text-xs sm:text-sm md:text-lg font-medium">Customer Service</p>
              <p className="text-xs sm:text-xs md:text-sm text-gray-600">Chat & Mails</p>
            </div>
          </div>
        </div>
    </div>
  </div>
    
  );
};

export default Home;
