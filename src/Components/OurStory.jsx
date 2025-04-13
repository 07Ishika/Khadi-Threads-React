import React from 'react';
import artisan from '../Components/Assets/artisanimg.jpeg'; // Ensure this path is correct
import closeupkhadiimg from '../Components/Assets/closeupkhadiimg.jpeg'; // Ensure this path is correct

const OurStory = () => {
  return (
    <section id="our-story" className="bg-[#fdfaf6] px-6 py-20 font-serif">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left - Image with overlay */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={artisan}
            alt="Indian artisan weaving khadi fabric"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
          <img
            src={closeupkhadiimg}
            alt="Close up of khadi fabric"
            className="absolute bottom-[-30px] right-[-30px] w-40 h-40 object-cover rounded-lg shadow-xl border border-gray-200 bg-white"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="italic text-lg text-gray-700 mb-4">
            "Khadi is not just fabric. It’s freedom. It’s a movement that threads India’s spirit."
          </p>
          <p className="text-gray-600 mb-4">
            The journey of KhadiThreads began with a simple idea – to honor the legacy of India's freedom movement while creating sustainable fashion for modern times. Every piece of fabric we use is hand-spun and hand-woven by skilled artisans across rural India.
          </p>
          <p className="text-gray-600 mb-6">
            By choosing Khadi, you're not just wearing clothes; you're wearing a piece of history and supporting a community of craftspeople who pour their hearts into creating these timeless garments.
          </p>

          {/* Quote Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <p className="italic text-gray-800 mb-2">
              "Khadi is the sun of the village solar system."
            </p>
            <p className="font-semibold text-gray-700">– Mahatma Gandhi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
