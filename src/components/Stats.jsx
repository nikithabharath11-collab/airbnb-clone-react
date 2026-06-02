import { motion } from "framer-motion";

const stats = [

  {
    id: 1,
    number: "10K+",
    title: "Happy Travelers",
  },

  {
    id: 2,
    number: "500+",
    title: "Luxury Homes",
  },

  {
    id: 3,
    number: "120+",
    title: "Countries",
  },

  {
    id: 4,
    number: "4.9★",
    title: "User Rating",
  },

];

function Stats() {

  return (

    <div className="px-6 md:px-16 py-24">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >

        Trusted Around The World 🌍

      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item) => (

          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-2xl"
          >

            <h2 className="text-5xl font-bold text-pink-500 mb-4">
              {item.number}
            </h2>

            <p className="text-lg text-gray-200">
              {item.title}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Stats;