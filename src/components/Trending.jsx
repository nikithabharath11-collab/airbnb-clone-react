import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Bali",
    country: "Indonesia",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    title: "Paris",
    country: "France",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    title: "Dubai",
    country: "UAE",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Santorini",
    country: "Greece",
  },
];

function Trending({ darkMode }) {

  return (

    <div
      className={`px-6 md:px-10 py-20 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-black"
      }`}
    >

      <h1 className="text-4xl font-bold mb-4 text-center">
        Trending Destinations
      </h1>

      <p className="text-center text-gray-500 mb-14 text-lg">
        Explore the world’s most loved travel destinations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {destinations.map((place) => (

          <motion.div
            key={place.id}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer"
          >

            <img
              src={place.image}
              alt={place.title}
              className="h-80 w-full object-cover hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-5 left-5 text-white">

              <span className="bg-pink-500 px-3 py-1 rounded-full text-sm">
                🔥 Trending
              </span>

              <h2 className="text-3xl font-bold mt-3">
                {place.title}
              </h2>

              <p className="text-gray-200">
                {place.country}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Trending;