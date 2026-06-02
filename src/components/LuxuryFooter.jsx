import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

function LuxuryFooter() {

  return (

    <div className="relative mt-24 overflow-hidden">

      {/* Glow Background */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Main Footer */}

      <div className="relative z-10 backdrop-blur-xl bg-white/10 border-t border-white/20 px-6 md:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h1 className="text-4xl font-bold text-pink-500">
              Airbnb
            </h1>

            <p className="mt-4 text-gray-300 leading-7">
              Discover luxury stays and unique travel experiences
              around the globe with comfort and style.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h2 className="text-2xl font-semibold mb-5">
              Explore
            </h2>

            <div className="flex flex-col gap-3 text-gray-300">

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Homes
              </p>

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Experiences
              </p>

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Destinations
              </p>

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Luxury Villas
              </p>

            </div>

          </div>

          {/* Support */}

          <div>

            <h2 className="text-2xl font-semibold mb-5">
              Support
            </h2>

            <div className="flex flex-col gap-3 text-gray-300">

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Help Center
              </p>

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Cancellation
              </p>

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Safety Info
              </p>

              <p className="hover:text-pink-400 transition-all cursor-pointer">
                Contact Us
              </p>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h2 className="text-2xl font-semibold mb-5">
              Newsletter ✨
            </h2>

            <p className="text-gray-300 mb-4">
              Get travel inspiration and exclusive offers.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 outline-none text-white placeholder:text-gray-400"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-pink-500 hover:bg-pink-600 transition-all px-6 py-3 rounded-full font-semibold shadow-lg"
              >

                Subscribe

              </motion.button>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-400 text-center">
            © 2026 Airbnb Clone. Designed with ❤️ by Nikitha
          </p>

          {/* Social Icons */}

          <div className="flex gap-5 text-2xl">

            <motion.div whileHover={{ scale: 1.2 }}>
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition-all" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition-all" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <FaYoutube className="cursor-pointer hover:text-red-500 transition-all" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <FaGithub className="cursor-pointer hover:text-gray-300 transition-all" />
            </motion.div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LuxuryFooter;