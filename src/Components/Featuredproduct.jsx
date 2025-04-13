import React from 'react';
import { Eye, ShoppingCart } from 'lucide-react'; // Install lucide-react for icons
import Mensshirt from '../Components/Assets/product/mensshirt.jpeg'; // Ensure this path is correct
import cottonscarf from '../Components/Assets/product/cottonscarf.jpeg'; // Ensure this path is correct
import palazzo from '../Components/Assets/product/palazzo.jpeg'; // Ensure this path is correct
import silksaree from '../Components/Assets/product/silksaaree.jpeg'; // Ensure this path is correct
import Dupatta from '../Components/Assets/product/dhupatta.jpeg'; // Ensure this path is correct
import kurta from '../Components/Assets/product/kurta.jpeg'; // Ensure this path is correct

const products = [
  {
    id: 1,
    name: "Khadi Men's Shirt",
    image: Mensshirt,
    price: 1299,
    description: 'Breathable fabric, modern cut',
    isNew: true,
  },
  {
    id: 2,
    name: 'Organic Cotton Scarf',
    image: cottonscarf,
    price: 699,
    description: 'Versatile accessory for all seasons',
    isNew: false,
  },
  {
    id: 3,
    name: 'Khadi Palazzo Pants',
    image: palazzo,
    price: 1199,
    description: 'Comfortable and stylish everyday wear',
    isNew: false,
  },
  {
    id: 4,
    name: 'Khadi Silk Saree',
    image: silksaree,
    price: 4999,
    description: 'Luxurious blend of khadi and silk',
    isNew: true,
  },
  {
    id: 5,
    name: 'Handloom Dupatta',
    image: Dupatta,
    price: 899,
    description: 'Pure cotton with traditional border',
    isNew: false,
  },
  {
    id: 6,
    name: 'Classic Khadi Kurta',
    image: kurta,
    price: 1499,
    description: 'Hand-spun cotton, traditional craftsmanship',
    isNew: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop"className="bg-[#fdfaf6] py-16 px-6 text-center font-serif">
      <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
      <p className="text-gray-600 mb-12 text-lg">
        Discover our carefully curated collection of authentic khadi garments
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden group"
          >
            {/* Product Image + Hover Icons */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              {/* Hover icons */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                <button className="bg-white p-2 rounded-full hover:bg-[#8a4f2e] hover:text-white transition">
                  <Eye size={20} />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-[#8a4f2e] hover:text-white transition">
                  <ShoppingCart size={20} />
                </button>
              </div>

              {/* Badge */}
              {product.isNew && (
                <span className="bg-[#8a4f2e] text-white text-xs font-semibold px-2 py-1 rounded absolute top-2 left-2">
                  New Arrival
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-base font-medium">₹{product.price}</span>
                <a href="#" className="text-[#8a4f2e] font-semibold">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button below cards */}
      <button className="mt-10 bg-[#8a4f2e] text-white font-semibold py-2 px-6 rounded hover:bg-[#733d21] transition">
        View All Products
      </button>
    </section>
  );
};

export default FeaturedProducts;
