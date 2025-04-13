import React, { useState } from 'react';
import heroimg from '../Assets/image.png'; // Make sure this path is correct
import { Search } from 'lucide-react';

const FeaturedProducts = [
  {
    id: 1,
    name: "Khadi Men's Shirt",
    image: '/images/kurta.jpg',
    price: 1299,
    description: 'Breathable fabric, modern cut',
    isNew: true,
  },
  {
    id: 2,
    name: 'Organic Cotton Scarf',
    image: '/images/scarf.jpg',
    price: 699,
    description: 'Versatile accessory for all seasons',
    isNew: false,
  },
  {
    id: 3,
    name: 'Khadi Palazzo Pants',
    image: '/images/pants.jpg',
    price: 1199,
    description: 'Comfortable and stylish everyday wear',
    isNew: false,
  },
  {
    id: 4,
    name: 'Khadi Silk Saree',
    image: '/images/saree.jpg',
    price: 4999,
    description: 'Luxurious blend of khadi and silk',
    isNew: true,
  },
  {
    id: 5,
    name: 'Handloom Dupatta',
    image: '/images/dupatta.jpg',
    price: 899,
    description: 'Pure cotton with traditional border',
    isNew: false,
  },
  {
    id: 6,
    name: 'Classic Khadi Kurta',
    image: '/images/classic.jpg',
    price: 1499,
    description: 'Hand-spun cotton, traditional craftsmanship',
    isNew: false,
  },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const productFound = FeaturedProducts.some((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (productFound) {
      setMessage('Yes, we have the product! Visit our product section to explore more.');
      setEmoji('🎉');
    } else {
      setMessage('Sorry, no products match your search. Try something else.');
      setEmoji('😞');
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchQuery('');
  };

  return (
    <section
      id='hero' className="h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
      }}
    >
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">
          Experience the Purity of <br />
          <span className="italic font-bold text-6xl md:text-7xl">Khadi</span>
        </h1>
        <p className="text-lg mt-2 mb-6">
          Handwoven elegance. Sustainable fashion. Proudly Indian.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex justify-center mb-6">
          <div className="relative w-1/2 sm:w-1/3 lg:w-1/4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full py-3 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
          </div>
        </form>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#shop"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Shop Now →
          </a>
          <a
            href="#our-story"
            className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg"
          >
            Explore Our Legacy
          </a>
        </div>

        {/* ↓ Scroll to Why Khadi */}
        <a href="#why-khadi" className="mt-10 text-3xl animate-bounce block cursor-pointer">
          ↓
        </a>
      </div>

      {/* Modal Popup for Search Result */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <p className="text-2xl font-semibold text-center">{emoji} {message}</p>
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
