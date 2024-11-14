import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

const Home: React.FC = () => {
  const { cart, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch(console.error); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar cartCount={cart.length} />
      <div className="flex justify-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;