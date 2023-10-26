import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
    
  return (
    <footer className="bg-gradient-to-bl from-rose-100 to-teal-100 text-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl">
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-4">
          &copy; {currentYear} Trade Snap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
