const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Luxury Villa",
    location: "Maldives",
    price: "$450/night",
    rating: "4.9",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Modern Apartment",
    location: "New York",
    price: "$300/night",
    rating: "4.7",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Mountain Cabin",
    location: "Switzerland",
    price: "$380/night",
    rating: "4.8",
  },
];

function Cards() {
  return (
    <div className="px-6 md:px-10 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Popular Stays
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {properties.map((property) => (
          <div
            key={property.id}
            className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >

            <img
              src={property.image}
              alt={property.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-5">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  {property.title}
                </h2>

                <p className="text-pink-500 font-semibold">
                  ⭐ {property.rating}
                </p>

              </div>

              <p className="text-gray-500 mt-2">
                {property.location}
              </p>

              <p className="mt-4 font-bold text-lg">
                {property.price}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Cards;