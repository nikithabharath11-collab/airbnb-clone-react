import { motion } from "framer-motion";

const destinations = [

  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    name: "Maldives",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    name: "Paris",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    name: "Dubai",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    name: "Santorini",
  },

];

function Destinations() {

  return (

    <div className="px-6 md:px-16 py-24">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >

        Explore Dream Destinations ✈️

      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {destinations.map((place) => (

          <motion.div
            key={place.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer"
          >

            <img
              src={place.image}
              alt={place.name}
              className="h-[400px] w-full object-cover group-hover:scale-110 transition-all duration-700"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

            {/* Text */}

            <div className="absolute bottom-6 left-6 text-white">

              <h2 className="text-3xl font-bold">
                {place.name}
              </h2>

              <p className="mt-2 text-gray-200">
                Discover luxury stays
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Destinations;