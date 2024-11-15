import { useState } from "react";
import Logo from './Logo';
import FaCart from './FaCart';
import UserLogin from './UserLogin';
import Navigations from './Navigations';
import Searchbar from "./Searchbar";

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  
  const toggleSearch = () => setSearchVisible((prevState) => !prevState);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        };

  return (
    <nav  className="bg-white flex fixed shadow-md mt-8 sm:flex items-center justify-between min-h-[64px] relative">
      <div className="flex justify-left items-center ml-[-30px]">
        <Logo />
      </div>
      <div className="flex justify-center ml-[-50px]">
        <Navigations toggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <Searchbar 
        searchQuery={searchQuery} 
        searchVisible={searchVisible}
        toggleSearch={toggleSearch} 
        handleSearchChange={handleSearchChange}
        />
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