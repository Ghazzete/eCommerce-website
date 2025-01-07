import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white">ShopEase</h2>
          <p className="mt-4 text-sm">
            ShopEase is your one-stop destination for all your shopping needs. Explore, shop, and enjoy exclusive deals every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and stay updated on the latest deals and offers.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-primary text-white rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <p className="text-sm mb-4">
            Connect with us on social media for the latest updates and exclusive offers.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
