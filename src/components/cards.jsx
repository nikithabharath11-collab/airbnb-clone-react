import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    title: "Luxury Villa",
    location: "Maldives",
    price: "$450/night",
    rating: "4.9",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    title: "Modern Apartment",
    location: "New York",
    price: "$300/night",
    rating: "4.7",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    title: "Mountain Cabin",
    location: "Switzerland",
    price: "$380/night",
    rating: "4.8",
  },
];

function Cards({ darkMode }) {

  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {

    if (wishlist.includes(id)) {

      setWishlist(wishlist.filter((item) => item !== id));

    } else {

      setWishlist([...wishlist, id]);

    }
  };

  return (

    <div
      className={`px-6 md:px-10 py-20 transition-all duration-500 ${
        darkMode
          ? "bg-transparent text-white"
          : "bg-transparent text-white"
      }`}
    >

      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-4xl md:text-6xl font-bold">
            Popular Luxury Stays ✨
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Handpicked homes with comfort, elegance, and unforgettable experiences.
          </p>

        </motion.div>

        {/* Wishlist Counter */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-6 md:mt-0 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-2xl shadow-xl"
        >

          <p className="text-pink-400 font-semibold text-lg">
            ❤️ Wishlist: {wishlist.length}
          </p>

        </motion.div>

      </div>

      {/* Cards Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {properties.map((property) => (

          <Tilt
            key={property.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.03}
            gyroscope={true}
          >

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
              }}
              className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer ${
                darkMode
                  ? "bg-white/10 backdrop-blur-lg border border-white/10 text-white"
                  : "bg-white/10 backdrop-blur-lg border border-white/10 text-white"
              }`}
            >

              {/* Image Section */}

              <div className="overflow-hidden relative">

                {/* Wishlist Button */}

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleWishlist(property.id)}
                  className={`absolute top-4 right-4 z-10 backdrop-blur-md p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
                    wishlist.includes(property.id)
                      ? "bg-pink-500 scale-110"
                      : "bg-white/80"
                  }`}
                >

                  <FaHeart
                    className={`text-lg transition-all duration-300 ${
                      wishlist.includes(property.id)
                        ? "text-white"
                        : "text-pink-500"
                    }`}
                  />

                </motion.div>

                {/* Property Image */}

                <img
                  src={property.image}
                  alt={property.title}
                  className="h-72 w-full object-cover hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-bold text-white">
                    {property.title}
                  </h2>

                  <p className="text-pink-400 font-semibold text-lg">
                    ⭐ {property.rating}
                  </p>

                </div>

                <p className="mt-2 text-lg text-gray-300">
                  {property.location}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <p className="font-bold text-xl text-white">
                    {property.price}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-lg shadow-pink-500/30"
                  >

                    Book Now

                  </motion.button>

                </div>

              </div>

            </motion.div>

          </Tilt>

        ))}

      </div>

    </div>
  );
}

export default Cards;