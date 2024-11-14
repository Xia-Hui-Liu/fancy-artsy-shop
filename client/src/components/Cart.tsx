import React, { useMemo } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

const Cart: React.FC = () => {
  const { cart, clearCart } = useCart();

  const totalCost = useMemo(() => 
    cart.reduce((sum, item) => sum + item.price, 0), 
    [cart]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center">
                <Image 
                  src={item.imageUrl}
                  alt={item.name}
                  width={80}   
                  height={80}  
                  className="w-20 h-20 object-cover"
                />
                  <p className="font-semibold m-10">{item.name}</p>
                  <p>{item.price.toLocaleString('sv-SE')} SEK</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex items-center justify-between">
        <div className="font-semibold text-gray-700">
          Total: {totalCost.toLocaleString('sv-SE')} SEK
        </div>
        <button onClick={clearCart} className="bg-[#DC840A] text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Delete all
        </button>
        <button className="bg-[#DC840A] text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
