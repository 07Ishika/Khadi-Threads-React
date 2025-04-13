import React, { useState, useEffect } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.3 } // when 30% of Hero is visible, navbar is transparent
    );

    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1
          className={`text-2xl md:text-3xl font-serif font-medium ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          Khadi<span className="text-orange-600">Threads</span>
        </h1>

        {/* Nav Links */}
        <nav
          className={`hidden md:flex space-x-10 text-lg font-normal ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          <a href="#hero" className="hover:text-orange-600">
            Home
          </a>
          <a href="#shop" className="hover:text-orange-600">
            Shop
          </a>
          <a href="#our-story" className="hover:text-orange-600">
            Our Story
          </a>
          <a href="#contact" className="hover:text-orange-600">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div
            className={`relative bg-opacity-80 rounded-full p-2 ${
              isScrolled ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <FiSearch
              size={18}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            />
          </div>

          <div
            className={`relative bg-opacity-80 rounded-full p-2 ${
              isScrolled ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <FiShoppingBag
              size={18}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            />
            <span
              className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
              style={{ visibility: isScrolled ? 'visible' : 'hidden' }}
            >
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
