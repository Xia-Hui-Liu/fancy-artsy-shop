import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

interface FaCartProps {
  cartCount: number;
}

const FaCart: React.FC<FaCartProps> = ({ cartCount }) => {
  return (
    <>
      <Link href='/cart' className="relative">
        <FaShoppingCart 
        className="h-6 w-6" 
        style={{ color: '#234B67' }} />
        {cartCount > 0 && (
          <span 
          suppressHydrationWarning
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs sm:text-sm">
            {cartCount}
          </span>
        )}
      </Link>
    </>
  );
};

export default FaCart;