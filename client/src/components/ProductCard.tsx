import React from 'react';
import Image from 'next/image';
import '@fontsource/inter/600.css'; 
import '@fontsource/inter/700.css'; 
import { Product } from '../types/product';

const ProductCard: React.FC<{ product: Product; onAddToCart: () => void }> = ({ product, onAddToCart }) => {
 
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i < rating ? '#F7B559' : 'white',
            WebkitTextStroke: i >= rating ? '1px #F7B559' : 'none',
            width: '68px',         
            height: '12px',        
            marginRight: '2px',     
            fontSize: '12px',       
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return ( 
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-48 h-72 relative flex flex-col justify-between" style={{ width: '200px', height: '300px' }}>
        <div className="relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}  
            height={163} 
            className="object-cover" 
          />
          <div
            className="absolute bottom-0 right-1"
            style={{
              backgroundColor: 'white', 
              color: 'black',            
              width: '88px',             
              height: '32px',            
              padding: '7px 8px',       
              borderRadius: '16px',     
              display: 'flex',           
              alignItems: 'center',     
              justifyContent: 'center',   
              fontSize: '12px',          
              fontWeight: 'bold'         
            }}
          >
            <span
              style={{             
                fontFamily: 'Inter', 
                fontWeight: 600,             
                fontSize: '12px',            
                textAlign: 'center'         
              }}
            >
              {product.price.toLocaleString('sv-SE')} SEK
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col items-center">
          <h2
            className="text-center"
            style={{ color: product.color, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px' }}
          >
            {product.name}
          </h2>
          <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '10px' }}>
            Ratings
          </p>
          <p className="text-center">{renderStars(product.rating)}</p>
          <button
            onClick={onAddToCart}
            style={{
              backgroundColor: product.color, 
              color: 'white',                  
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 700,                 
              fontSize: '10px',                
              width: '184px',                  
              height: '40px',                  
              borderRadius: '6px',            
              marginTop: '8px'                 
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
  );
};

export default ProductCard;
