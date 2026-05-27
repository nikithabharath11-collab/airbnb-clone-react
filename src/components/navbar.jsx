import { FaAirbnb, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 shadow-md bg-white gap-4">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaAirbnb className="text-pink-500 text-4xl" />
        <h1 className="text-2xl font-bold text-pink-500">
          Airbnb
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-wrap justify-center items-center border rounded-full px-4 py-2 shadow-sm gap-3">

        <p className="text-sm font-medium">
          Anywhere
        </p>

        <p className="text-sm font-medium">
          Any Week
        </p>

        <p className="text-sm text-gray-500">
          Add Guests
        </p>

        <div className="bg-pink-500 p-2 rounded-full text-white">
          <FaSearch />
        </div>
      </div>

      {/* User Menu */}
      <div className="flex items-center gap-3 border rounded-full px-4 py-2 shadow-sm">

        <p className="hidden md:block">
          Become a Host
        </p>

        <FaUserCircle className="text-3xl text-gray-600" />
      </div>

    </div>
  );
}

export default Navbar;