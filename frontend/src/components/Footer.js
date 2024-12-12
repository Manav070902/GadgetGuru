import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Gadget Guru</h5>
            <p className="text-sm">
              Your one-stop shop for the latest gadgets and electronics.
              Discover innovative products and unbeatable deals.
            </p>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Customer Service</h5>
            <ul>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gray-400">
                <FaFacebook size="1.5em" />
              </Link>
              <Link to="#" className="hover:text-gray-400">
                <FaTwitter size="1.5em" />
              </Link>
              <Link to="#" className="hover:text-gray-400">
                <FaInstagram size="1.5em" />
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          {/* <div className="w-full md:w-1/4">
            <h5 className="text-xl font-bold mb-4">Newsletter</h5>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 mb-2 text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Gadget Guru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
