import { useState } from "react";
import Logo from './Logo';
import FaCart from './FaCart';
import UserLogin from './UserLogin';
import Navigations from './Navigations';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-white shadow-md p-2 sm:p-4 flex flex-wrap justify-between items-center mt-2 h-10 sm:h-14 w-full mx-auto mb-20 mb-6 min-h-[64px] relative">
      <div className="flex justify-start items-center">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Navigations toggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <div className="flex justify-end items-center space-x-2 sm:space-x-4">
        <FaCart cartCount={cartCount} />
      </div>
      <div>
        <UserLogin />
      </div>
    </nav>
  );
};

export default Navbar;