import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { FaChevronRight } from 'react-icons/fa'

interface NavigationsProps {
  toggle: () => void;
  isMenuOpen: boolean;
}

const Navigations: React.FC<NavigationsProps> = ({ toggle, isMenuOpen }) => {
  const menuItems = [
    { href: "/expoxy-resin", text: "RESIN" },
    { href: "/collections/resin-molds", text: "RESIN MOLDS" },
    { href: "/collections/color", text: "COLOR" },
    { href: "/diy-tools-accesories", text: "ACCESSORIES" },
    { href: "/collections/new-arrival", text: "NEW ARRIVAL" },
    { href: "/holiday-sale", text: "BLACK FRIDAY" },
    { href: "/collections/diy-projects-instruction", text: "INSPIRATION" },
    { href: "/suppor", text: "SUPPORT" }
  ];

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-toggle-button')) {
        toggle();
      }
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen, toggle]);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className="lg:hidden p-2 menu-toggle-button"
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="text-gray-400 w-8 h-8 md:w-12 md:h-12"
        >
        <path
          fill="currentColor"
          d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
        />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="absolute top-full left-1/3 transform -translate-x-1/2 bg-white lg:hidden flex flex-col gap-y-4 text-gray-500 shadow-lg p-4 w-72 h-[100vh] overflow-y-auto rounded-lg mobile-menu z-50">
          {menuItems.map(({ href, text }, index) => (
            <li key={index} className="w-full border-b border-black-200">
              <Link href={href}>
                <span className="flex justify-between items-center py-2 px-4 text-sm font-semibold hover:text-blue-600 transition-colors duration-300">
                  {text}
                  <FaChevronRight className="text-black-200 ml-2" />
                </span>
              </Link>
            </li>
          ))}
          <div className="py-4 mt-16 border-t border-black-200">
            <div className="flex justify-evenly mb-4">
              <Link href="https://www.facebook.com/fancyartsy82/">
                <Image
                  src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                  alt="facebook"
                  width={20} 
                  height={20} 
                  className="transition-transform transform hover:scale-110"
                />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image
                  src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                  alt="instagram"
                  width={20}  
                  height={20} 
                  className="transition-transform transform hover:scale-110"
                />
              </Link>
              <Link href="https://twitter.com/">
                <Image
                  src="https://img.icons8.com/fluent/48/000000/twitter.png"
                  alt="twitter"
                  width={20}  
                  height={20}
                  className="transition-transform transform hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </ul>
      )}
      
      {/* Desktop Menu (hidden on mobile) */}
      <ul className="hidden lg:flex gap-x-5 text-black-500">
        {menuItems.map(({ href, text }, index) => (
          <li key={index}>
            <Link href={href}>
              <span className="text-xs hover:text-blue-600 transition-colors duration-300">
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigations;
