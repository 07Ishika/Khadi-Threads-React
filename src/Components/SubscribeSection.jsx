import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If valid:
    setError(""); // clear error
    setShowPopup(true);
    setEmail(""); // clear input
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <div id="contact" className="bg-[#fdfaf6] text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive updates on new collections, special offers, and styling tips
        </p>

        <div className="flex justify-center items-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${
              error ? "border-red-500" : "border-gray-400"
            } rounded px-4 py-2 w-72 focus:outline-none`}
          />
          <button
            onClick={handleSubscribe}
            className="flex items-center gap-2 bg-[#832e10] text-white px-4 py-2 rounded hover:bg-[#6b230b] transition"
          >
            Subscribe <FaPaperPlane />
          </button>
        </div>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        <p className="text-sm text-gray-500 mt-4">
          No spam. Only handcrafted goodness in your inbox.
        </p>
      </div>

      <div className="bg-[#832e10] text-white text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Join the movement. Wear what matters.
        </h2>
        <button className="bg-white text-[#832e10] font-medium px-6 py-3 rounded hover:bg-gray-100 transition">
          Explore Our Collection
        </button>
      </div>

      {/* ✅ Popup Notification */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded shadow-lg transition-opacity animate-fade-in-out z-50">
          🎉 Thanks for subscribing!
        </div>
      )}
    </>
  );
};

export default SubscribeSection;
