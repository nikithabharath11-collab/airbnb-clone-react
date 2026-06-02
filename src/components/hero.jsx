import { motion } from "framer-motion";

function Hero() {
  return (

    <div className="relative overflow-hidden pt-32 h-[90vh] flex items-center justify-center">

      {/* Background Video */}

      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute w-full h-full object-cover"
>

  <source
    src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
    type="video/mp4"
  />

</video>

      {/* Animated Glow Blobs */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Dark Overlay */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-black/60 w-full h-full flex flex-col justify-center items-center text-white"
      >

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
            Find Your Next Stay
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200">
            Discover unique places around the world
          </p>

          <button className="mt-8 bg-pink-500 hover:bg-pink-600 hover:scale-110 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl shadow-pink-500/50 hover:shadow-pink-500/70">
            Explore Now
          </button>

        </motion.div>

      </motion.div>

    </div>
  );
}

export default Hero;