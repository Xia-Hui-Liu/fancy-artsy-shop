import Link from "next/link";
import { useEffect } from "react";

interface NavigationsProps {
  toggle: () => void;
  isMenuOpen: boolean;
}

const Navigations: React.FC<NavigationsProps> = ({ toggle, isMenuOpen }) => {
  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/products", text: "Products" },
    { href: "/contacts", text: "Contacts" },
  ];

  // Close the menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only close if clicked outside of the mobile menu or the button
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
        className="md:hidden p-2 menu-toggle-button"
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
          className="text-gray-400 w-8 h-8 sm:w-8 sm:h-8"
        >
        <path
          fill="currentColor"
          d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
        />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white md:hidden flex flex-col gap-y-4 text-gray-500 shadow-lg p-4 w-56 rounded-lg mobile-menu z-50">
          {menuItems.map(({ href, text }, index) => (
            <li key={index} className="w-full">
              <Link href={href}>
                <span className="block py-2 px-4 text-base font-semibold hover:text-blue-600 transition-colors duration-300">
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Menu (hidden on mobile) */}
      <ul className="hidden md:flex gap-x-6 text-gray-500">
        {menuItems.map(({ href, text }, index) => (
          <li key={index}>
            <Link href={href}>
              <span className="text-base hover:text-blue-600 transition-colors duration-300">
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
