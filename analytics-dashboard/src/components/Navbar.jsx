import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaMoon,
} from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center p-6">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 bg-clip-text text-transparent">
          Admin Analytics
        </h1>

        <p className="text-gray-400 mt-1">
          Real-time business monitoring dashboard
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Live Clock */}
        <div className="bg-white/10 backdrop-blur-xl border border-cyan-500/20 px-5 py-3 rounded-2xl shadow-lg">
          <p className="text-cyan-400 font-bold">
            🕒 {currentTime}
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl hover:border-cyan-500/40 transition-all">
          <FaSearch className="text-cyan-400" />

          <input
            type="text"
            placeholder="Search dashboard..."
            className="bg-transparent outline-none text-white placeholder-gray-400 w-48"
          />
        </div>

        {/* Notifications */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl cursor-pointer hover:scale-110 transition-all duration-300">

          <FaBell className="text-yellow-400 text-xl" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full animate-pulse">
            3
          </span>

        </div>

        {/* Theme Button */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl cursor-pointer hover:scale-110 transition-all duration-300">
          <FaMoon className="text-purple-400 text-lg" />
        </div>

        {/* Semester Badge */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-2xl shadow-lg shadow-cyan-500/30">
          <p className="text-white font-semibold">
            3rd Semester • VIT
          </p>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl hover:border-pink-500/40 transition-all">

          <FaUserCircle className="text-pink-400 text-4xl" />

          <div>
            <p className="text-white font-semibold">
              Nikitha Bharath
            </p>

            <p className="text-gray-400 text-sm">
              Super Admin
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Navbar;