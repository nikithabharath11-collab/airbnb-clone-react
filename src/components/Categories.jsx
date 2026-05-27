function Categories() {
  const categories = [
    "Beach",
    "Mountain",
    "Cabins",
    "Pools",
    "Camping",
    "Luxury",
  ];

  return (
    <div className="px-8 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Explore Categories
      </h1>

      <div className="flex flex-wrap gap-5">

        {categories.map((category, index) => (
          <div
            key={index}
            className="px-6 py-3 border rounded-full shadow-sm hover:bg-pink-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer font-medium"
          >

            {category}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Categories;