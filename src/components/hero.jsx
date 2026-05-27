function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >

      {/* Dark Overlay */}
      <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center text-white">

        <h1 className="text-5xl md:text-7xl font-bold text-center">
          Find Your Next Stay
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-center">
          Discover unique places around the world
        </p>

        <button className="mt-8 bg-pink-500 hover:bg-pink-600 hover:scale-110 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl">

          Explore Now

        </button>

      </div>
    </div>
  );
}

export default Hero;