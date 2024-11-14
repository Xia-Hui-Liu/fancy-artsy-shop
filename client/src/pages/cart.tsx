import React from 'react';
import { CartProvider } from '../context/CartContext'; 
import Cart from '../components/Cart'; 
import Navbar from '../components/Navbar';

const CartPage: React.FC = () => {
  return (
    <CartProvider>
      <div className="container mx-auto px-4 py-8">
        <Navbar cartCount={0} /> 
        <Cart />
      </div>
    </CartProvider>
  );
};

export default CartPage;
