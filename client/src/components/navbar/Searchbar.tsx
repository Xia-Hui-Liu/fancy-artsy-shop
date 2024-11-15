import { FaSearch, FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";

interface SearchbarProps {
  searchVisible: boolean;
  searchQuery: string;
  toggleSearch: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  searchVisible,
  searchQuery,
  toggleSearch,
  handleSearchChange,
}) => {
  const categories = [
    {
      category: "Resin",
      items: ["Epoxy Resin", "Casting Resin", "UV Resin"],
    },
    {
      category: "Resin Molds",
      items: ["Silicone Molds", "Jewelry Molds", "Coaster Molds"],
    },
    {
      category: "Color",
      items: ["Dyes", "Pigments", "Color Powders"],
    },
    {
      category: "Accessories",
      items: ["Mixing Cups", "Stirring Sticks", "Gloves"],
    },
  ];

  const filteredCatalogs = categories.map(({ category, items }) => ({
    category,
    items: items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  // Close search if clicked outside the search window
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (searchVisible && !target.closest('.search-menu') && !target.closest('.search-toggle-button')) {
        toggleSearch();
      }
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [searchVisible, toggleSearch]);

  return (
    <div className="relative flex items-center">
      {/* Search Icon Button */}
      <button onClick={toggleSearch} className="p-2 search-toggle-button">
        <FaSearch className="text-2xl" />
      </button>

      {/* Search Input Field and Dropdown */}
      {searchVisible && (
        <div className="fixed inset-0 flex justify-center items-start mt-20 search-menu z-50">
          <div className="bg-white shadow-md rounded-md p-4 w-[80%] max-w-screen-lg max-h-[87vh] overflow-y-auto relative">
            {/* Search Input Container */}
            <div className="relative">
              {/* Close Button (Inside the Search Window, over the input) */}
              <button
                onClick={toggleSearch}
                className="absolute  ml-64 text-gray-500 hover:text-gray-300 z-10"
              >
                <FaTimes className="text-x" />
              </button>

              {/* Search Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md mt-5 mb-2"
              />
            </div>

            {/* Dropdown Menu with Categories */}
            <div className="p-4 bg-white border border-gray-300 rounded-md shadow-sm">
              {filteredCatalogs.map(({ category, items }, index) => (
                <div key={index} className="mb-4">
                  <h6 className="text-base font-medium mb-2">{category}</h6>
                  {items.length > 0 ? (
                    <ul className="ml-0 list-none">
                      {items.map((item, idx) => (
                        <li
                          key={idx}
                          className="p-1 cursor-pointer hover:bg-gray-100 rounded-md"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">No matching items</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
