import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'; 
import { FaUser } from 'react-icons/fa'; 

interface NavbarProps {
  cartCount: number; 
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
      <Link href="/" className="text-lg font-bold">
        <Image src={'/images/logo.jpg'} alt={'fancy-artsy'} width={139} height={32} />
      </Link>

      <div className="flex items-center space-x-6"> 
        <Link href="/cart" className="relative flex items-center">
          <FaShoppingCart 
            className="h-6 w-6" 
            style={{ color: '#234B67' }} 
          />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
              {cartCount}
            </span>
          )}
        </Link>
        <Link href="/login" className="flex items-center">
          <FaUser 
            className="h-6 w-6" 
            style={{ color: '#234B67' }} 
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
