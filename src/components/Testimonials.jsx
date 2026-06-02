import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sophia Williams",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Absolutely loved the experience! The stay was luxurious and unforgettable.",
  },

  {
    id: 2,
    name: "James Anderson",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Beautiful homes and seamless booking process. Highly recommended!",
  },

  {
    id: 3,
    name: "Emily Johnson",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "A stunning platform with premium stays and amazing service.",
  },
];

function Testimonials({ darkMode }) {
  return (
    <div
      className={`px-6 md:px-10 py-20 transition-all duration-500 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-white text-black"
      }`}
    >

      <h1 className="text-4xl font-bold text-center mb-4">
        What Our Guests Say
      </h1>

      <p className="text-center text-gray-500 mb-14 text-lg">
        Real experiences from travelers around the world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {reviews.map((review) => (

          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 shadow-xl transition-all duration-500 ${
              darkMode
                ? "bg-gray-800"
                : "bg-gray-100"
            }`}
          >

            <div className="flex items-center gap-4 mb-6">

              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-pink-500"
              />

              <div>

                <h2 className="text-xl font-bold">
                  {review.name}
                </h2>

                <p className="text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </p>

              </div>

            </div>

            <p className="text-gray-500 leading-7">
              "{review.review}"
            </p>

          </motion.div>

        ))}

      </div>
    </div>
  );
}

export default Testimonials;