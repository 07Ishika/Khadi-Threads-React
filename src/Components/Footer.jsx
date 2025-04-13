import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf6] text-gray-800 pt-12 pb-6 border-t border-t-[#832e10]/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Description */}
        <div>
          <h3 className="text-xl font-semibold mb-3">KhadiThreads</h3>
          <p className="text-sm mb-4">
            Celebrating India's rich textile heritage through authentic, sustainable khadi fashion.
          </p>
          <div className="flex gap-4 text-xl text-[#832e10]">
            <FaInstagram className="hover:opacity-75 cursor-pointer" />
            <FaFacebookF className="hover:opacity-75 cursor-pointer" />
            <FaTwitter className="hover:opacity-75 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#832e10] cursor-pointer">About Us</li>
            <li className="hover:text-[#832e10] cursor-pointer">Products</li>
            <li className="hover:text-[#832e10] cursor-pointer">Our Story</li>
            <li className="hover:text-[#832e10] cursor-pointer">Sustainability</li>
            <li className="hover:text-[#832e10] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: info@khadithreads.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>
              Address: 123 Craft Lane, Textile District, <br />
              New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-sm text-center text-gray-600 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>© 2023 KhadiThreads. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made with <span className="text-red-500">♡</span> in India</p>
      </div>
    </footer>
  );
};

export default Footer;
