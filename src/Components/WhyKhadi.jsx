import React from "react";
import { FaLeaf, FaTshirt, FaWind, FaFlag } from "react-icons/fa";

const WhyKhadi = () => {
  const features = [
    {
      icon: <FaLeaf className="text-3xl text-[#8a4f2e]" />,
      title: "Eco-Friendly Fabric",
      description:
        "Sustainable, biodegradable materials that respect our planet and reduce your carbon footprint.",
    },
    {
      icon: <FaTshirt className="text-3xl text-[#8a4f2e]" />,
      title: "Handmade by Indian Artisans",
      description:
        "Each piece empowers skilled craftspeople and preserves generations of traditional knowledge.",
    },
    {
      icon: <FaWind className="text-3xl text-[#8a4f2e]" />,
      title: "Naturally Breathable Material",
      description:
        "Perfect for all seasons, Khadi adapts to your body temperature for maximum comfort.",
    },
    {
      icon: <FaFlag className="text-3xl text-[#8a4f2e]" />,
      title: "100% Indian Craft",
      description:
        "Continuing the legacy of self-reliance and celebrating authentic Indian craftsmanship.",
    },
  ];

  return (
    <section id="why-khadi" className="bg-[#f6f0ea] py-16 px-6 text-center font-serif">
      <h2 className="text-4xl font-bold mb-4">Why Khadi</h2>
      <p className="text-gray-600 mb-12 text-lg">
        More than just clothing, it's a conscious choice for a better future
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm p-6 text-left transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyKhadi;
