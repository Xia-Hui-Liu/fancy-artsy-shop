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
    <nav  className="bg-white flex fixed shadow-md mt-8 sm:flex items-center justify-between min-h-[64px] relative">
      <div className="flex justify-left items-center ml-[-30px]">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Navigations toggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 ">
        <FaCart cartCount={cartCount} />
      </div>
      <div className="mr-5 md:mr-10">
        <UserLogin />
      </div>
    </nav>
  );
};

export default Navbar;