

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRecycle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <div className="flex items-center text-2xl font-bold mb-4">
            <FaRecycle className="mr-2 text-green-300" />
            Waste Exchange
          </div>
          <p className="text-sm text-gray-300">
            Building a sustainable future by connecting waste producers with recyclers and innovators.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Exchange</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-green-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-300"><FaTwitter /></a>
            <a href="#" className="hover:text-green-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-yellow-700 pt-4">
        © {new Date().getFullYear()} Waste Exchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

