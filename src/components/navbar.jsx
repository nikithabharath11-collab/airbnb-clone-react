import {
  FaAirbnb,
  FaSearch,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {

  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >

      {/* Navbar Container */}

      <div className="mx-4 md:mx-10 mt-4 px-6 py-4 rounded-3xl backdrop-blur-md bg-white/10 border border-white/30 shadow-xl flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <FaAirbnb className="text-pink-500 text-4xl drop-shadow-lg" />

          <h1 className="text-2xl font-bold text-white tracking-wide">
            Airbnb
          </h1>

        </div>

        {/* Search Bar */}

        <div className="flex flex-wrap justify-center items-center border border-white/30 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md shadow-lg gap-3">

          <p className="text-sm font-medium text-white">
            Anywhere
          </p>

          <p className="text-sm font-medium text-white">
            Any Week
          </p>

          <p className="text-sm text-gray-200">
            Add Guests
          </p>

          {/* Search Button */}

          <motion.button
            whileHover={{ scale: 1.15 }}
            onClick={() => setShowSearch(!showSearch)}
            className="bg-pink-500 p-3 rounded-full text-white shadow-lg"
          >

            <FaSearch />

          </motion.button>

        </div>

        {/* Mobile Menu Button */}

        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

        {/* Desktop User Menu */}

        <div className="hidden md:flex items-center gap-3">

          <p className="text-white font-medium">
            Become a Host
          </p>

          <FaUserCircle className="text-3xl text-white" />

        </div>

      </div>

      {/* Search Popup */}

      {showSearch && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-28 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 w-[90%] md:w-[500px] z-50"
        >

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Trending Searches 🔥
          </h2>

          <div className="flex flex-wrap gap-3">

            <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-200 transition">
              Maldives
            </button>

            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition">
              Dubai
            </button>

            <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-200 transition">
              Bali
            </button>

            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-full hover:bg-green-200 transition">
              Switzerland
            </button>

          </div>

        </motion.div>

      )}

      {/* Mobile Dropdown Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mt-2 bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-white shadow-xl"
        >

          <p className="py-2 border-b border-white/20">
            Anywhere
          </p>

          <p className="py-2 border-b border-white/20">
            Any Week
          </p>

          <p className="py-2 border-b border-white/20">
            Add Guests
          </p>

          <p className="py-2">
            Become a Host
          </p>

        </motion.div>

      )}

    </motion.div>
  );
}

export default Navbar;